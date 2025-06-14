# 🛡️ Proyecto de Autenticación JWT + OAuth2 (Google) con Node.js, React y PostgreSQL

Este proyecto es una aplicación web completa que implementa autenticación mediante **JWT (JSON Web Tokens)** y **OAuth2 con Google**, permitiendo a los usuarios registrarse, iniciar sesión con correo/contraseña o acceder usando su cuenta de Google.

---

## 🚀 Tecnologías utilizadas

- **Frontend**
  - React + Vite
  - TailwindCSS
  - React Router DOM
  - Axios

- **Backend**
  - Node.js + Express
  - PostgreSQL con Sequelize ORM
  - Passport.js + Google OAuth2
  - JWT para autenticación segura

---

## 🔐 Funcionalidades

✅ Registro y login con validación de datos  
✅ Login con cuenta de Google (OAuth2)  
✅ Almacenamiento seguro de tokens JWT  
✅ Perfil del usuario autenticado  
✅ Protección de rutas privadas en frontend  
✅ Cierre de sesión con control de historial del navegador  
✅ Interfaz responsive y estilizada con TailwindCSS

---

## 🧱 Estructura del proyecto

root/
├── backend/
│ ├── controllers/
│ ├── middlewares/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ └── server.js
├── frontend/
│ ├── components/
│ ├── context/
│ ├── pages/
│ ├── services/
│ └── main.jsx

## 🧑‍💻 Instalación y ejecución

### 🔧 Backend

1. Ir a la carpeta `backend/`
2. Instalar dependencias:
   ```bash
   npm install

Configurar variables de entorno .env
Crear archivo .env:

DB_NAME=nombre
DB_USER=postgres
DB_PASSWORD=contraseña
DB_HOST=localhost
PORT=puerto
JWT_SECRET=tu_JWT
GOOGLE_CLIENT_ID=ID_Client
GOOGLE_CLIENT_SECRET=Secret_Client

Ejecutar servidor:
nodemon server.js

💻 Frontend
Ir a la carpeta frontend/

Instalar dependencias:

npm install

Ejecutar el servidor:
npm run dev


🔐 Rutas protegidas
/home – Accesible solo con token válido

/google-success – Captura el token de Google y redirige al home

📌 Consideraciones
El botón de cerrar sesión también previene volver atrás con la flecha del navegador.

El nombre del usuario aparece en el navbar una vez logueado.

Google OAuth2 redirige al frontend con un token en la URL.

🧠 Autor
Desarrollado por Luis Carranza
Proyecto académico de autenticación segura con tecnologías modernas 🔐