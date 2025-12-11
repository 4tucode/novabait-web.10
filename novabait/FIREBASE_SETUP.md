# Configuración de Firebase para el Formulario de Contacto

## Pasos para configurar el envío de correos

### 1. Instalar dependencias de Firebase Functions

```bash
cd functions
npm install
```

### 2. Configurar variables de entorno para el envío de correos

Tienes dos opciones:

#### Opción A: Usar Gmail (más simple para empezar)

```bash
firebase functions:config:set gmail.email="tu-email@gmail.com" gmail.password="tu-password-de-aplicacion"
```

**Nota:** Para Gmail, necesitas usar una "Contraseña de aplicación" en lugar de tu contraseña normal:
1. Ve a tu cuenta de Google
2. Seguridad → Verificación en 2 pasos (debe estar activada)
3. Contraseñas de aplicaciones → Generar nueva contraseña

#### Opción B: Usar variables de entorno (recomendado para producción)

Edita `functions/.env` (crea el archivo si no existe):
```
GMAIL_EMAIL=tu-email@gmail.com
GMAIL_PASSWORD=tu-password-de-aplicacion
COMPANY_EMAIL=contacto@novabait.com
```

Y actualiza `functions/index.js` para usar `process.env` en lugar de `functions.config()`.

### 3. Configurar el email de la empresa

```bash
firebase functions:config:set company.email="contacto@novabait.com"
```

O usa la variable de entorno `COMPANY_EMAIL`.

### 4. Desplegar las Cloud Functions

```bash
firebase deploy --only functions
```

### 5. Actualizar las reglas de Firestore

Las reglas ya están configuradas en `firestore.rules` para permitir la creación de documentos desde el cliente.

Despliega las reglas:
```bash
firebase deploy --only firestore:rules
```

## Estructura

- `functions/index.js` - Cloud Function que se ejecuta cuando se crea un nuevo contacto
- `src/config/firebase.js` - Configuración de Firebase para el cliente
- `src/services/contactService.js` - Servicio para guardar formularios en Firestore
- `firestore.rules` - Reglas de seguridad de Firestore

## Flujo de funcionamiento

1. El usuario completa el formulario en `ContactView.vue`
2. Se guarda el formulario en Firestore (colección `contacts`)
3. La Cloud Function `sendContactEmails` se activa automáticamente
4. Se envían dos correos:
   - **Al cliente**: Confirmación de recepción
   - **A la empresa**: Notificación con todos los detalles

## Solución de problemas

### Los correos no se envían

1. Verifica que las Cloud Functions estén desplegadas: `firebase functions:list`
2. Revisa los logs: `firebase functions:log`
3. Verifica que las credenciales de email estén correctamente configuradas
4. Asegúrate de que el email de Gmail tenga la verificación en 2 pasos activada

### Error de permisos en Firestore

1. Verifica que las reglas estén desplegadas: `firebase deploy --only firestore:rules`
2. Asegúrate de que las reglas permitan la creación de documentos en `contacts`

