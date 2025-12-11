/**
 * Script de prueba para verificar la configuración de email
 * Ejecutar con: node test-email.js
 */

const nodemailer = require('nodemailer')
require('dotenv').config()

// Verificar que las variables de entorno estén configuradas
const email = process.env.GMAIL_EMAIL
const password = process.env.GMAIL_PASSWORD

if (!email || !password) {
  console.error('❌ Error: Las variables GMAIL_EMAIL y GMAIL_PASSWORD deben estar configuradas en .env')
  console.log('\nCrea un archivo .env en la carpeta functions/ con:')
  console.log('GMAIL_EMAIL=tu-email@gmail.com')
  console.log('GMAIL_PASSWORD=tu-contraseña-de-aplicacion')
  process.exit(1)
}

console.log('📧 Configurando transportador de email...')
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password
  }
})

// Verificar la conexión
console.log('🔍 Verificando credenciales...')
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Error al verificar las credenciales:', error.message)
    console.log('\nPosibles causas:')
    console.log('1. La contraseña de aplicación no es correcta')
    console.log('2. La verificación en 2 pasos no está activada')
    console.log('3. No estás usando una contraseña de aplicación (usa la contraseña de aplicación, no tu contraseña normal)')
    process.exit(1)
  } else {
    console.log('✅ Credenciales verificadas correctamente')
    console.log('\n📤 Enviando email de prueba...')
    
    const testEmail = {
      from: email,
      to: email, // Enviar a ti mismo para probar
      subject: 'Prueba de email - NOVABAI.T',
      html: `
        <h1>Email de Prueba</h1>
        <p>Si recibes este email, la configuración está funcionando correctamente.</p>
        <p>Fecha: ${new Date().toLocaleString('es-ES')}</p>
      `
    }
    
    transporter.sendMail(testEmail, (error, info) => {
      if (error) {
        console.error('❌ Error al enviar el email:', error.message)
        process.exit(1)
      } else {
        console.log('✅ Email de prueba enviado correctamente!')
        console.log('📬 Revisa tu bandeja de entrada:', email)
        console.log('📋 Message ID:', info.messageId)
        process.exit(0)
      }
    })
  }
})

