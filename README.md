# Hospital Management System (MERN Stack)

## 📌 Project Overview
The **Hospital Management System** is a full-stack web application built using the **MERN Stack (MongoDB, Express.js, React, Node.js)**. It provides an efficient platform for managing hospital operations, including patient management, appointment scheduling, and record tracking. The system features **authentication and authorization** using **JSON Web Tokens (JWT)** and includes separate **user and admin dashboards**.

## 🚀 Features

### 🔒 Authentication & Authorization
- Secure login and signup using **JWT authentication**
- Role-based access control for **admins and users**

### 🏥 Hospital Management
- **Patient Management:** Add, update, and delete patient records
- **Appointment Scheduling:** Book, reschedule, and cancel appointments
- **Medical Records:** Store and manage patient history securely
- **Admin Dashboard:** Manage doctors, staff, and hospital operations

### 📡 Technologies Used
- **Frontend:** React.js (Redux, Tailwind CSS for UI styling)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose for schema modeling)
- **Authentication:** JSON Web Tokens (JWT), bcrypt for password hashing
- **State Management:** Redux Toolkit
- **File Uploads:** Cloudinary (for medical reports and images)
- **Notifications:** Email notifications for appointment confirmations

## 🛠️ Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (v14+)
- MongoDB (local or Atlas cloud database)
- npm or yarn

### Steps to Run the Project

#### Clone the Repository
```bash
git clone https://github.com/your-username/hospital-management-system.git
cd hospital-management-system
```

#### Install Dependencies
##### Backend Setup
```bash
cd backend
npm install
```
##### Frontend Setup
```bash
cd ../frontend
npm install
```

#### Configure Environment Variables
Create a **.env** file in the backend directory and add the following:
```env
PORT=
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

#### Start the Server
##### Backend
```bash
npm run dev
```
##### Frontend
```bash
npm start
```



## 📚 Future Enhancements
- Add real-time chat support for doctor-patient communication
- Implement AI-powered diagnosis suggestions
- Integration with telemedicine services

## 👨‍💻 Contributing
Contributions are welcome! Feel free to fork the repo, create a new branch, and submit a **pull request**.
