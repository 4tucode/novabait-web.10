# Configuración de Firebase - Formulario de Contacto

## ✅ Lo que ya está configurado

- ✅ Configuración de Firebase en `src/config/firebase.js`
- ✅ Servicio de contacto en `src/services/contactService.js`
- ✅ Formulario actualizado en `src/views/ContactView.vue`
- ✅ Cloud Functions para envío de correos en `functions/index.js`
- ✅ Reglas de Firestore actualizadas

## 📋 Pasos para completar la configuración

### 1. Crear archivo `.env` en la raíz del proyecto

Crea un archivo `.env` en `novabait/` con el siguiente contenido:

```env
VITE_FIREBASE_API_KEY=AIzaSyAibS6jGbJBYk-y_aNqEbpIOOXKoDDwLjA
VITE_FIREBASE_AUTH_DOMAIN=novabait.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=novabait
VITE_FIREBASE_STORAGE_BUCKET=novabait.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=741724005006
VITE_FIREBASE_APP_ID=1:741724005006:web:5bbdffe3f03045887f9fdf
```

### 2. Instalar dependencias

```bash
# En la raíz del proyecto
npm install

# En la carpeta functions (para Cloud Functions)
cd functions
npm install
cd ..
```

### 3. Configurar Firebase CLI (si no lo tienes)

```bash
npm install -g firebase-tools
firebase login
firebase init
```

Cuando ejecutes `firebase init`, selecciona:
- ✅ Firestore
- ✅ Functions
- ✅ (No selecciones otros servicios a menos que los necesites)

### 4. Configurar las reglas de Firestore

Las reglas ya están en `firestore.rules`. Despliégalas:

```bash
firebase deploy --only firestore:rules
```

### 5. Configurar el envío de correos

#### Opción A: Usar Gmail (Recomendado para empezar)

1. **Habilita la verificación en 2 pasos** en tu cuenta de Google
2. **Genera una contraseña de aplicación**:
   - Ve a [Google Account Security](https://myaccount.google.com/security)
   - Verificación en 2 pasos → Contraseñas de aplicaciones
   - Genera una nueva contraseña para "Correo"

3. **Configura las variables en Firebase**:

```bash
firebase functions:config:set gmail.email="tu-email@gmail.com" gmail.password="tu-contraseña-de-aplicacion"
firebase functions:config:set company.email="contacto@novabait.com"
```

#### Opción B: Usar variables de entorno (Recomendado para producción)

Crea `functions/.env`:

```env
GMAIL_EMAIL=tu-email@gmail.com
GMAIL_PASSWORD=tu-contraseña-de-aplicacion
COMPANY_EMAIL=contacto@novabait.com
```

Luego actualiza `functions/index.js` para usar `process.env` en lugar de `functions.config()`.

### 6. Desplegar Cloud Functions

```bash
firebase deploy --only functions
```

### 7. Probar el formulario

1. Inicia el servidor de desarrollo: `npm run dev`
2. Completa el formulario de contacto
3. Verifica que:
   - El formulario se guarde en Firestore (consola de Firebase)
   - Llegue el correo de confirmación al cliente
   - Llegue el correo de notificación a la empresa

## 🔍 Verificación

### Verificar que las funciones estén desplegadas:

```bash
firebase functions:list
```

### Ver logs de las funciones:

```bash
firebase functions:log
```

### Verificar datos en Firestore:

1. Ve a [Firebase Console](https://console.firebase.google.com)
2. Selecciona tu proyecto `novabait`
3. Ve a Firestore Database
4. Deberías ver la colección `contacts` con los formularios enviados

## 🐛 Solución de problemas

### Error: "Permission denied" al guardar en Firestore

- Verifica que las reglas estén desplegadas: `firebase deploy --only firestore:rules`
- Asegúrate de que las reglas permitan `create` en la colección `contacts`

### Los correos no se envían

1. Verifica los logs: `firebase functions:log`
2. Asegúrate de que las credenciales de Gmail estén correctas
3. Verifica que el email tenga verificación en 2 pasos activada
4. Usa una contraseña de aplicación, no tu contraseña normal

### Error: "Module not found: firebase"

```bash
npm install firebase
```

## 📚 Documentación adicional

- [Firebase Documentation](https://firebase.google.com/docs?hl=es-419)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)
- [Cloud Functions for Firebase](https://firebase.google.com/docs/functions)

## 🔒 Seguridad

- ⚠️ **NUNCA** subas el archivo `.env` a Git
- Asegúrate de que `.env` esté en `.gitignore`
- Las credenciales de Firebase en el frontend son públicas (esto es normal)
- Las reglas de Firestore protegen los datos del servidor

