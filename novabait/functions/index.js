const functions = require('firebase-functions')
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')

admin.initializeApp()

// Configuración del transportador de email
// NOTA: Necesitarás configurar estas variables en Firebase Functions Config
// firebase functions:config:set gmail.email="tu-email@gmail.com" gmail.password="tu-password"
// O mejor aún, usa variables de entorno:
// firebase functions:config:set sendgrid.api_key="tu-api-key"

// Función para obtener el transportador de email
function getTransporter() {
  const email = functions.config().gmail?.email || process.env.GMAIL_EMAIL
  const password = functions.config().gmail?.password || process.env.GMAIL_PASSWORD

  if (!email || !password) {
    throw new Error('Las credenciales de email no están configuradas. Por favor, configura GMAIL_EMAIL y GMAIL_PASSWORD.')
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass: password
    }
  })
}

// Función auxiliar para escapar HTML y prevenir XSS
function escapeHtml(text) {
  if (!text) return ''
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  return String(text).replace(/[&<>"']/g, (m) => map[m])
}

// Función que se ejecuta cuando se crea un nuevo contacto en Firestore
exports.sendContactEmails = functions.firestore
  .document('contacts/{contactId}')
  .onCreate(async (snap, context) => {
    const contactData = snap.data()
    const contactId = context.params.contactId

    // Validar datos requeridos
    if (!contactData.email || !contactData.name) {
      console.error(`Datos incompletos para el contacto ${contactId}`)
      return null
    }

    try {
      const transporter = getTransporter()
      const fromEmail = functions.config().gmail?.email || process.env.GMAIL_EMAIL
      const companyEmail = functions.config().company?.email || process.env.COMPANY_EMAIL || fromEmail

      // Escapar datos para prevenir XSS
      const safeName = escapeHtml(contactData.name)
      const safeEmail = escapeHtml(contactData.email)
      const safePhone = contactData.phone ? escapeHtml(contactData.phone) : ''
      const safeCompany = contactData.company ? escapeHtml(contactData.company) : ''
      const safeDescription = contactData.description ? escapeHtml(contactData.description).replace(/\n/g, '<br>') : ''

      // Email para el cliente (confirmación)
      const clientEmail = {
        from: fromEmail,
        to: contactData.email,
        subject: 'Gracias por contactar con NOVABAI.T',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>NOVABAI.T</h1>
              </div>
              <div class="content">
                <h2>¡Hola ${safeName}!</h2>
                <p>Gracias por contactar con nosotros. Hemos recibido tu solicitud y la estamos revisando.</p>
                <p><strong>Resumen de tu solicitud:</strong></p>
                <ul>
                  <li><strong>Email:</strong> ${safeEmail}</li>
                  ${safePhone ? `<li><strong>Teléfono:</strong> ${safePhone}</li>` : ''}
                  ${safeCompany ? `<li><strong>Empresa:</strong> ${safeCompany}</li>` : ''}
                  <li><strong>Tipo de proyecto:</strong> ${escapeHtml(getProjectTypeLabel(contactData.projectType))}</li>
                </ul>
                <p>Nos pondremos en contacto contigo en breve para discutir tu proyecto.</p>
                <p>Saludos,<br>El equipo de NOVABAI.T</p>
              </div>
              <div class="footer">
                <p>Este es un email automático, por favor no respondas a este mensaje.</p>
              </div>
            </div>
          </body>
          </html>
        `
      }

      // Email para la empresa (notificación)
      const companyEmailData = {
        from: fromEmail,
        to: companyEmail,
        subject: `Nueva solicitud de contacto - ${safeName}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 800px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #4a9eff 0%, #6bb6ff 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .info-box { background: white; padding: 20px; margin: 15px 0; border-left: 4px solid #4a9eff; border-radius: 4px; }
              .label { font-weight: bold; color: #1a1a2e; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Nueva Solicitud de Contacto</h1>
                <p>ID: ${contactId}</p>
              </div>
              <div class="content">
                <div class="info-box">
                  <p><span class="label">Nombre:</span> ${safeName}</p>
                  <p><span class="label">Email:</span> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
                  ${safePhone ? `<p><span class="label">Teléfono:</span> <a href="tel:${safePhone}">${safePhone}</a></p>` : ''}
                  ${safeCompany ? `<p><span class="label">Empresa:</span> ${safeCompany}</p>` : ''}
                </div>

                <div class="info-box">
                  <p><span class="label">Tipo de proyecto:</span> ${escapeHtml(getProjectTypeLabel(contactData.projectType))}</p>
                  ${contactData.budget ? `<p><span class="label">Presupuesto:</span> ${escapeHtml(getBudgetLabel(contactData.budget))}</p>` : ''}
                  ${contactData.timeline ? `<p><span class="label">Plazo estimado:</span> ${escapeHtml(getTimelineLabel(contactData.timeline))}</p>` : ''}
                </div>

                <div class="info-box">
                  <p><span class="label">Descripción del proyecto:</span></p>
                  <p>${safeDescription}</p>
                </div>

                <p><a href="https://console.firebase.google.com/project/${admin.app().options.projectId}/firestore/data/~2Fcontacts~2F${contactId}" style="background: #4a9eff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 20px;">Ver en Firebase Console</a></p>
              </div>
            </div>
          </body>
          </html>
        `
      }

      // Enviar ambos emails
      await Promise.all([
        transporter.sendMail(clientEmail),
        transporter.sendMail(companyEmailData)
      ])

      // Actualizar el documento con el estado de éxito
      await admin.firestore().collection('contacts').doc(contactId).update({
        emailSent: true,
        emailSentAt: admin.firestore.FieldValue.serverTimestamp()
      })

      console.log(`✅ Emails enviados correctamente para el contacto: ${contactId}`)
      return null
    } catch (error) {
      console.error(`❌ Error al enviar emails para el contacto ${contactId}:`, error)

      // Actualizar el documento con el estado de error
      try {
        await admin.firestore().collection('contacts').doc(contactId).update({
          emailError: error.message,
          emailSent: false,
          emailErrorAt: admin.firestore.FieldValue.serverTimestamp()
        })
      } catch (updateError) {
        console.error('Error al actualizar el documento con el error:', updateError)
      }

      // No lanzamos el error para que no se reintente infinitamente
      return null
    }
  })

// Funciones auxiliares para formatear las etiquetas
function getProjectTypeLabel(type) {
  const labels = {
    web: 'Página Web',
    app: 'Aplicación Web',
    ecommerce: 'Tienda Online / E-commerce',
    redesign: 'Rediseño de sitio existente',
    maintenance: 'Mantenimiento y soporte',
    other: 'Otro'
  }
  return labels[type] || type
}

function getBudgetLabel(budget) {
  const labels = {
    'under-5k': 'Menos de 5.000€',
    '5k-10k': '5.000€ - 10.000€',
    '10k-25k': '10.000€ - 25.000€',
    '25k-50k': '25.000€ - 50.000€',
    'over-50k': 'Más de 50.000€',
    'discuss': 'Prefiero discutirlo'
  }
  return labels[budget] || budget
}

function getTimelineLabel(timeline) {
  const labels = {
    urgent: 'Urgente (menos de 1 mes)',
    '1-3months': '1 - 3 meses',
    '3-6months': '3 - 6 meses',
    '6-12months': '6 - 12 meses',
    flexible: 'Flexible'
  }
  return labels[timeline] || timeline
}

