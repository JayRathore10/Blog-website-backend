# Blog-Website-Backend

Backend API for a full-stack blog website.  
This repository contains the server-side logic, routes, authentication, and database operations required for the blog platform.

**🔗 GitHub Repository:** https://github.com/JayRathore10/Blog-website-backend  
**🌍 Live Backend URL:** https://blog-website-backend-1-8f79.onrender.com/

---

## 📌 Features

- User registration & login (JWT authentication)
- Create, read, update, delete blog posts
- Like system for posts
- Protected routes using middleware
- MongoDB database using Mongoose
- TypeScript support
- Modular and clean folder structure

---

## 🛠 Tech Stack

- Node.js  
- Express.js  
- TypeScript  
- MongoDB + Mongoose  
- JWT Authentication  
- Hosted on Vercel  

---

## 📂 Project Structure
```
Blog-website-backend
│
├── src
│   ├── controllers
│   │   ├── authController.ts
│   │   ├── postController.ts
│   │   └── userController.ts
│
│   ├── middleware
│   │   └── isLogin.ts
│
│   ├── models
│   │   ├── userModel.ts
│   │   └── postModel.ts
│
│   ├── routes
│   │   ├── authRoute.ts
│   │   ├── postRoute.ts
│   │   └── userRoute.ts
│
│   ├── utils
│   │   └── generateToken.ts
│
│   └── index.ts
│
├── dist
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

---

## ⚙️ Installation & Setup

## 1️ Clone the Repository

```bash
git clone https://github.com/JayRathore10/Blog-website-backend
cd Blog-website-backend
```

## 2️ Install Dependencies

Run the following command to install all required Node.js packages:

```bash
npm install
```

## API Endpoint 
| Method | Endpoint         | Description                 |
| ------ | ---------------- | --------------------------- |
| POST   | `/auth/register` | Register a new user         |
| POST   | `/auth/login`    | Login user and generate JWT |


## 4 Blog Post Routes
| Method | Endpoint           | Description             |
| ------ | ------------------ | ----------------------- |
| GET    | `/post/all`        | Fetch all posts         |
| GET    | `/post/:id`        | Fetch single post       |
| POST   | `/post/create`     | Create post (Protected) |
| PUT    | `/post/update/:id` | Update post             |
| DELETE | `/post/delete/:id` | Delete post             |
| POST   | `/post/like/:id`   | Like a post             |

## 5 Middleware
 ### isLogin
* Verifies JWT token stored in cookies
* Protects private routes
* Ensures only authenticated users can create/update/delete posts

## 6 Contributing
1. Fork this repository
2. Create a new branch
  ```bash
  git checkout -b feature-name
  ```
3. Commit your changes
4. Push your branch
5. Create a Pull Request



