# Contenido de los Archivos .env

## ⚠️ IMPORTANTE: Copia este contenido manualmente a los archivos .env

Los archivos `.env` están protegidos por seguridad. Copia el contenido a continuación en los archivos correspondientes.

---

## 📁 Archivo: `novabait/.env` (Raíz del proyecto)

Crea este archivo en la raíz del proyecto `novabait/`:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=AIzaSyAibS6jGbJBYk-y_aNqEbpIOOXKoDDwLjA
VITE_FIREBASE_AUTH_DOMAIN=novabait.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=novabait
VITE_FIREBASE_STORAGE_BUCKET=novabait.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=741724005006
VITE_FIREBASE_APP_ID=1:741724005006:web:5bbdffe3f03045887f9fdf
```

---

## 📁 Archivo: `novabait/functions/.env` (Carpeta functions)

Crea este archivo en la carpeta `novabait/functions/`:

```env
# Gmail Configuration for Email Sending
# IMPORTANTE: Usa una contraseña de aplicación, no tu contraseña normal de Gmail
# Para generar una contraseña de aplicación:
# 1. Ve a https://myaccount.google.com/security
# 2. Activa la verificación en 2 pasos (si no está activada)
# 3. Ve a "Contraseñas de aplicaciones" y genera una nueva
# 4. Usa esa contraseña aquí

GMAIL_EMAIL=tu-email@gmail.com
GMAIL_PASSWORD=tu-contraseña-de-aplicacion

# Email donde recibirás las notificaciones de nuevos contactos
COMPANY_EMAIL=contacto@novabait.com
```

---

## 📝 Instrucciones

### 1. Crear `.env` en la raíz

1. Crea un archivo llamado `.env` en `novabait/`
2. Copia el contenido del primer bloque de código
3. Guarda el archivo

### 2. Crear `functions/.env`

1. Crea un archivo llamado `.env` en `novabait/functions/`
2. Copia el contenido del segundo bloque de código
3. **IMPORTANTE**: Reemplaza:
   - `tu-email@gmail.com` con tu email de Gmail
   - `tu-contraseña-de-aplicacion` con tu contraseña de aplicación de Gmail
   - `contacto@novabait.com` con el email donde quieres recibir las notificaciones
4. Guarda el archivo

### 3. Verificar que los archivos estén en .gitignore

Los archivos `.env` ya están añadidos al `.gitignore` para que no se suban a Git.

---

## ✅ Verificación

Después de crear los archivos, verifica que todo esté correcto:

```bash
# Verificar que el .env de la raíz existe
cat .env

# Verificar que el .env de functions existe
cat functions/.env
```

---

## 🔒 Seguridad

- ⚠️ **NUNCA** subas estos archivos a Git (ya están en .gitignore)
- ⚠️ **NUNCA** compartas tus credenciales
- ✅ Usa contraseñas de aplicación para Gmail, no tu contraseña normal
- ✅ Mantén estos archivos solo en tu máquina local

