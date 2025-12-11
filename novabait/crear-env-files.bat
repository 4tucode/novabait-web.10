@echo off
echo ========================================
echo Creando archivos .env
echo ========================================
echo.

REM Crear .env en la raiz
echo Creando novabait/.env...
(
echo # Firebase Configuration
echo VITE_FIREBASE_API_KEY=AIzaSyAibS6jGbJBYk-y_aNqEbpIOOXKoDDwLjA
echo VITE_FIREBASE_AUTH_DOMAIN=novabait.firebaseapp.com
echo VITE_FIREBASE_PROJECT_ID=novabait
echo VITE_FIREBASE_STORAGE_BUCKET=novabait.firebasestorage.app
echo VITE_FIREBASE_MESSAGING_SENDER_ID=741724005006
echo VITE_FIREBASE_APP_ID=1:741724005006:web:5bbdffe3f03045887f9fdf
) > .env
echo [OK] Archivo .env creado en la raiz
echo.

REM Crear .env en functions
echo Creando novabait/functions/.env...
(
echo # Gmail Configuration for Email Sending
echo # IMPORTANTE: Usa una contraseña de aplicacion, no tu contraseña normal de Gmail
echo # Para generar una contraseña de aplicacion:
echo # 1. Ve a https://myaccount.google.com/security
echo # 2. Activa la verificacion en 2 pasos ^(si no esta activada^)
echo # 3. Ve a "Contrasenas de aplicaciones" y genera una nueva
echo # 4. Usa esa contrasena aqui
echo.
echo GMAIL_EMAIL=tu-email@gmail.com
echo GMAIL_PASSWORD=tu-contraseña-de-aplicacion
echo.
echo # Email donde recibiras las notificaciones de nuevos contactos
echo COMPANY_EMAIL=contacto@novabait.com
) > functions\.env
echo [OK] Archivo .env creado en functions/
echo.
echo ========================================
echo IMPORTANTE:
echo ========================================
echo 1. Edita novabait/functions/.env y reemplaza:
echo    - tu-email@gmail.com con tu email de Gmail
echo    - tu-contraseña-de-aplicacion con tu contraseña de aplicacion
echo    - contacto@novabait.com con el email donde quieres recibir notificaciones
echo.
echo 2. Los archivos .env ya estan en .gitignore y NO se subiran a Git
echo.
pause

