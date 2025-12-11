import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../config/firebase'

/**
 * Guarda un formulario de contacto en Firestore
 * @param {Object} formData - Datos del formulario
 * @returns {Promise<string>} - ID del documento creado
 */
export const saveContactForm = async (formData) => {
  try {
    const contactRef = collection(db, 'contacts')
    
    const contactData = {
      ...formData,
      createdAt: serverTimestamp(),
      status: 'new',
      read: false
    }
    
    const docRef = await addDoc(contactRef, contactData)
    return docRef.id
  } catch (error) {
    console.error('Error al guardar el formulario de contacto:', error)
    throw new Error('No se pudo enviar el formulario. Por favor, inténtalo de nuevo.')
  }
}

/**
 * Formatea los datos del formulario para el email
 * @param {Object} formData - Datos del formulario
 * @returns {string} - Texto formateado para el email
 */
export const formatContactEmail = (formData) => {
  const projectTypeLabels = {
    web: 'Página Web',
    app: 'Aplicación Web',
    ecommerce: 'Tienda Online / E-commerce',
    redesign: 'Rediseño de sitio existente',
    maintenance: 'Mantenimiento y soporte',
    other: 'Otro'
  }
  
  const budgetLabels = {
    'under-5k': 'Menos de 5.000€',
    '5k-10k': '5.000€ - 10.000€',
    '10k-25k': '10.000€ - 25.000€',
    '25k-50k': '25.000€ - 50.000€',
    'over-50k': 'Más de 50.000€',
    'discuss': 'Prefiero discutirlo'
  }
  
  const timelineLabels = {
    urgent: 'Urgente (menos de 1 mes)',
    '1-3months': '1 - 3 meses',
    '3-6months': '3 - 6 meses',
    '6-12months': '6 - 12 meses',
    flexible: 'Flexible'
  }
  
  let emailContent = `
NUEVA SOLICITUD DE CONTACTO - NOVABAI.T

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

INFORMACIÓN DE CONTACTO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nombre: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Teléfono: ${formData.phone}` : ''}
${formData.company ? `Empresa: ${formData.company}` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DETALLES DEL PROYECTO:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tipo de proyecto: ${projectTypeLabels[formData.projectType] || formData.projectType}
${formData.budget ? `Presupuesto: ${budgetLabels[formData.budget] || formData.budget}` : ''}
${formData.timeline ? `Plazo estimado: ${timelineLabels[formData.timeline] || formData.timeline}` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DESCRIPCIÓN:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.description}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`
  
  return emailContent
}

