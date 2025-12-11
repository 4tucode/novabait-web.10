# Verificación del Sistema de Email

## ✅ Checklist de Verificación

### 1. Configuración de Variables de Entorno

- [ ] Archivo `.env` creado en la raíz del proyecto con las credenciales de Firebase
- [ ] Variables configuradas en Firebase Functions (o en `functions/.env`)

### 2. Instalación de Dependencias

```bash
# En la raíz del proyecto
npm install

# En la carpeta functions
cd functions
npm install
```

### 3. Verificar Configuración de Firebase

```bash
# Verificar que estás logueado
firebase login

# Verificar el proyecto actual
firebase projects:list

# Verificar que el proyecto correcto esté seleccionado
firebase use novabait
```

### 4. Verificar Reglas de Firestore

```bash
# Desplegar reglas
firebase deploy --only firestore:rules

# Verificar en la consola de Firebase que las reglas estén activas
```

### 5. Probar la Configuración de Email

#### Opción A: Usando el script de prueba

```bash
cd functions
# Crea un archivo .env con:
# GMAIL_EMAIL=tu-email@gmail.com
# GMAIL_PASSWORD=tu-contraseña-de-aplicacion
node test-email.js
```

#### Opción B: Verificar manualmente

1. Verifica que las credenciales estén configuradas:
```bash
firebase functions:config:get
```

Deberías ver:
```
{
  "gmail": {
    "email": "tu-email@gmail.com",
    "password": "tu-password"
  },
  "company": {
    "email": "contacto@novabait.com"
  }
}
```

### 6. Desplegar Cloud Functions

```bash
firebase deploy --only functions
```

### 7. Verificar que las Functions estén desplegadas

```bash
firebase functions:list
```

Deberías ver:
```
sendContactEmails
```

### 8. Probar el Formulario Completo

1. Inicia el servidor de desarrollo:
```bash
npm run dev
```

2. Ve a la página de contacto: `http://localhost:5173/contacto`

3. Completa el formulario con datos de prueba

4. Envía el formulario

5. Verifica:
   - [ ] El formulario se guarda en Firestore (consola de Firebase)
   - [ ] Llega el email de confirmación al cliente
   - [ ] Llega el email de notificación a la empresa

### 9. Verificar Logs

```bash
# Ver logs en tiempo real
firebase functions:log

# Ver logs de una función específica
firebase functions:log --only sendContactEmails
```

## 🔍 Verificación de Errores Comunes

### Error: "Permission denied" al guardar en Firestore

**Solución:**
```bash
firebase deploy --only firestore:rules
```

### Error: "Las credenciales de email no están configuradas"

**Solución:**
```bash
firebase functions:config:set gmail.email="tu-email@gmail.com" gmail.password="tu-password"
firebase deploy --only functions
```

### Error: "Invalid login" o "Authentication failed"

**Causas posibles:**
1. No estás usando una contraseña de aplicación
2. La verificación en 2 pasos no está activada
3. La contraseña es incorrecta

**Solución:**
1. Ve a [Google Account Security](https://myaccount.google.com/security)
2. Activa la verificación en 2 pasos
3. Genera una nueva contraseña de aplicación
4. Usa esa contraseña en la configuración

### Los emails no se envían pero no hay errores

**Verificar:**
1. Revisa los logs: `firebase functions:log`
2. Verifica que el documento se haya creado en Firestore
3. Verifica que la función se haya activado (debería aparecer en los logs)

### El formulario se envía pero no llegan los emails

**Verificar:**
1. Revisa la carpeta de spam
2. Verifica los logs de Firebase Functions
3. Verifica que el email de destino sea correcto
4. Verifica que las credenciales de Gmail sean correctas

## 📊 Verificación en Firebase Console

1. Ve a [Firebase Console](https://console.firebase.google.com)
2. Selecciona el proyecto `novabait`
3. Ve a **Firestore Database**
4. Verifica que la colección `contacts` tenga documentos
5. Cada documento debería tener:
   - `emailSent: true` (si los emails se enviaron correctamente)
   - `emailSentAt` (timestamp de cuando se envió)
   - O `emailError` y `emailSent: false` (si hubo un error)

## 🧪 Prueba Completa

1. **Preparación:**
   - Asegúrate de tener acceso a dos emails diferentes (cliente y empresa)
   - Ten la consola de Firebase abierta

2. **Ejecución:**
   - Completa el formulario con datos reales
   - Envía el formulario

3. **Verificación:**
   - ✅ El formulario se guarda en Firestore
   - ✅ Llega email de confirmación al cliente
   - ✅ Llega email de notificación a la empresa
   - ✅ Los logs muestran éxito
   - ✅ El documento en Firestore tiene `emailSent: true`

## ✅ Todo Funciona Correctamente Si:

- El formulario se envía sin errores
- Los emails llegan a ambas direcciones
- Los logs muestran éxito
- El documento en Firestore tiene el estado correcto
- No hay errores en la consola del navegador

