# 📌 TaskList – Full Stack Todo Web App

A modern and responsive **full-stack Todo application** built using the MERN stack with Vite for fast development.  
This app allows users to securely manage daily tasks with authentication and protected routes.

---

## 🌐 Live Demo

- **Frontend:** task-list-client.vercel.app/ 

> Replace the above links with your actual deployed URLs.

---

## 🚀 Features

- 🔐 JWT Authentication (Signup / Login)
- 🔒 Protected Routes with Token Verification
- ✅ Add, Edit, Delete Tasks
- 📱 Fully Responsive Design (Mobile First)
- ⚡ Fast Development with Vite
- 🌍 RESTful API Architecture
- 🔑 Secure Password Hashing with bcrypt
- 🌐 Environment Variable Configuration

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Token (JWT)
- bcrypt

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## ⚡ Getting Started (Local Development)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Shaurya0o0/TaskList.git
cd TaskList
```

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
npm run dev
```

Create a `.env` file inside the `server/` folder:

```
PORT=5000
NODE_ENV=development

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<dbname>?retryWrites=true&w=majority

JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d

CLIENT_URL=http://localhost:5173

```

---

### 3️⃣ Frontend Setup

```bash
cd client
npm install
npm run dev
```

Create a `.env` file inside the `client/` folder:

```
VITE_API_URL=
```

---

## 🔐 Authentication Flow

1. User registers or logs in  
2. Server validates credentials  
3. JWT token is generated  
4. Token is stored on the client side  
5. Protected routes verify token before granting access  

---

## 🧠 What I Learned

- Building a complete MERN stack application  
- Implementing secure authentication with JWT  
- Structuring scalable backend APIs  
- Managing protected routes in React  
- Deploying frontend and backend separately  

---

## 📈 Future Improvements

- 📅 Task due dates & reminders  
- 🗂️ Task categories & filters  
- 🌙 Dark mode  
- 📊 Productivity dashboard  
- 🔔 Email notifications  

---

## 🤝 Contributing

Contributions are welcome!  
Fork the repository and submit a pull request.

---

⭐ If you like this project, consider giving it a star!