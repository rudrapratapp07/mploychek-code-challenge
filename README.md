# MPloyChek - Digital Background Verification System

Welcome to the MPloyChek code challenge submission! This project is a modern Single Page Application (SPA) built to manage and view digital background verification records. 

## 🚀 Live Demo

- **Frontend (Live):** [https://mploychek-code-challenge.vercel.app](https://mploychek-code-challenge.vercel.app)
- **Backend API:** [https://mploychek-code-challenge.onrender.com](https://mploychek-code-challenge.onrender.com)

## 🔑 Demo Credentials

You can test the application using the following mock accounts:

| Role | Username | Password | Notes |
| :--- | :--- | :--- | :--- |
| **Admin** | `admin` | `password` | Has access to the Dashboard and the exclusive Admin Panel to manage users. |
| **General User** | `user` | `password` | Can only access their personal dashboard to view their verification records. |

---

## ✨ Features Implemented

This application was carefully crafted to meet all the requirements of the assessment:

- **Modern Tech Stack**: Built with **Angular 17** (TypeScript) for the frontend and **Node.js/Express** (TypeScript) for the backend.
- **Role-Based Authentication**: Secure login system that differentiates between `Admin` and `General User` roles, controlling access to routes and features.
- **Dynamic Dashboard**: A personalized dashboard that welcomes the user, displays their role, and lists their verification records in a clean, modern table.
- **Admin Management Panel**: An exclusive interface for administrators to view, add, and delete users from the system's database.
- **Async Processing & Delay Mechanism**: The backend API includes a configurable delay parameter (`?delay=2000`). The frontend handles this gracefully by showcasing beautiful loading states and spinners while the asynchronous processing happens, ensuring a smooth UX.
- **Modular Architecture**: The codebase uses highly modular, clean architecture. API communication is abstracted into dedicated Angular Services (`auth.service.ts`, `user.service.ts`).
- **Premium UI/UX**: The application features a custom "glassmorphism" aesthetic with a responsive design, tailored specifically for this challenge without relying on generic copied templates.

---

## 🛠️ Technologies Used

### Frontend
- **Angular 17** (Standalone Components)
- **TypeScript**
- **SCSS** (Custom modern styling, CSS variables, Glassmorphism)
- **RxJS** (State management and async operations)

### Backend
- **Node.js** & **Express**
- **TypeScript**
- **CORS** & **UUID**
- **Local File-based JSON Database** (acting as the dummy API database)

---

## 💻 Running the Project Locally

If you wish to run the project on your local machine, follow these steps:

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Angular CLI (`npm install -g @angular/cli`)

### 1. Start the Backend
```bash
cd backend
npm install
npm run dev
```
The backend server will start on `http://localhost:3000`.

### 2. Start the Frontend
*Note: The frontend is currently configured to point to the live Render backend. If you want to test it locally, update the `apiUrl` in `auth.service.ts` and `user.service.ts` back to `http://localhost:3000/api`.*

```bash
cd frontend
npm install
npm start
```
The application will open automatically at `http://localhost:4200`.

---
*Developed for the NSQTech Software Engineer Intern position code challenge.*
