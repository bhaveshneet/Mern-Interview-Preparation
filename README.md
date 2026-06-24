# Todo App

A Full-Stack Todo Management Application built using **Next.js, TypeScript, Express.js, MySQL, JWT Authentication, Redux Toolkit, and Tailwind CSS**.

## GitHub Repository

Repository Link:

```text
https://github.com/bhaveshneet/Mern-Interview-Preparation.git
```

---

# Features

## Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Password Hashing using bcryptjs

## Todo Management

- Create Todo
- View Todos
- Update Todo
- Delete Todo

## Additional Features

- Search Todos
- Pagination
- Redux Toolkit State Management
- SSR-based Todo Listing
- Responsive UI using Tailwind CSS
- Validation and Error Handling
- Reusable Components

---

# Tech Stack

## Frontend

- Next.js
- TypeScript
- Redux Toolkit
- React Redux
- Axios
- Tailwind CSS
- Lucide React

## Backend

- Express.js
- TypeScript
- JWT
- bcryptjs
- CORS
- dotenv

## Database

- MySQL

---

# Project Structure

## Backend

```text
backend
│
├── src
│   ├── config
│   │   └── db.ts
│   │
│   ├── controllers
│   │   ├── authController.ts
│   │   └── todoController.ts
│   │
│   ├── middleware
│   │   ├── authMiddleware.ts
│   │   └── errorMiddleware.ts
│   │
│   ├── routes
│   │   ├── authRoutes.ts
│   │   └── todoRoutes.ts
│   │
│   ├── services
│   │   ├── authService.ts
│   │   └── todoService.ts
│   │
│   ├── validators
│   │   ├── authValidator.ts
│   │   └── todoValidator.ts
│   │
│   ├── utils
│   │   └── generateToken.ts
│   │
│   ├── types
│   │   ├── custom.d.ts
│   │   └── express/index.d.ts
│   │
│   ├── app.ts
│   └── server.ts
│
├── package.json
└── tsconfig.json
```

## Frontend

```text
frontend
│
├── src
│   ├── app
│   │   ├── page.tsx
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   ├── dashboard/page.tsx
│   │   ├── todos/page.tsx
│   │   ├── add-todo/page.tsx
│   │   └── edit-todo/[id]/page.tsx
│   │
│   ├── components
│   │   ├── Navbar.tsx
│   │   ├── TodoForm.tsx
│   │   ├── TodoItem.tsx
│   │   └── Pagination.tsx
│   │
│   ├── hooks
│   │   ├── useAppDispatch.ts
│   │   └── useAppSelector.ts
│   │
│   ├── redux
│   │   ├── provider.tsx
│   │   ├── store.ts
│   │   └── slices
│   │       ├── authSlice.ts
│   │       └── todoSlice.ts
│   │
│   ├── services
│   │   ├── api.ts
│   │   ├── authService.ts
│   │   └── todoService.ts
│   │
│   └── types
│       ├── index.ts
│       └── todo.ts
│
├── package.json
└── next.config.ts
```

---

# Backend Setup

## Create Backend Project

```bash
mkdir backend

cd backend

npm init -y
```

## Install Dependencies

```bash
npm install express mysql2 dotenv cors bcryptjs jsonwebtoken
```

## Install Development Dependencies

```bash
npm install -D typescript ts-node-dev @types/node @types/express @types/cors @types/bcryptjs @types/jsonwebtoken
```

## Initialize TypeScript

```bash
npx tsc --init
```

## Run Backend

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

# Frontend Setup

## Create Next.js Project

```bash
npx create-next-app@latest frontend --typescript
```

## Navigate to Frontend

```bash
cd frontend
```

## Install Axios

```bash
npm install axios
```

## Install Redux Toolkit

```bash
npm install @reduxjs/toolkit react-redux
```

## Install Icons

```bash
npm install lucide-react
```

## Install JWT Decode

```bash
npm install jwt-decode
```

## Run Frontend

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:3000
```

---

# Authentication Flow

```text
Home Page
    ↓
Register
    ↓
Login
    ↓
JWT Token Generated
    ↓
Token Stored
    ↓
Protected Routes
    ↓
Dashboard / Todos
```

---

# Todo Flow

```text
Add Todo
    ↓
Backend API
    ↓
MySQL Database
    ↓
Redux Store Update
    ↓
UI Refresh

Edit Todo
    ↓
Update API
    ↓
Database Update
    ↓
Redux Update

Delete Todo
    ↓
Delete API
    ↓
Database Delete
    ↓
Redux Update
```

---

# Search Functionality

```text
User Types Keyword
        ↓
Filter Todo List
        ↓
Display Matching Results
```

---

# Pagination

```text
Page 1
   ↓
Page 2
   ↓
Page 3
```

Only a limited number of todos are displayed per page for better performance and user experience.

---

# API Endpoints

## Authentication

```http
POST /api/auth/register

POST /api/auth/login
```

## Todos

```http
GET /api/todos

POST /api/todos

PUT /api/todos/:id

DELETE /api/todos/:id
```

---

# Future Enhancements

- Dark Mode
- Email Notifications
- Role-Based Access Control
- Docker Deployment

---

# Author

**Bhavesh Neet**

Full Stack Developer

Built with:

- Next.js
- TypeScript
- Express.js
- MySQL
- JWT Authentication
- Redux Toolkit
- Tailwind CSS
