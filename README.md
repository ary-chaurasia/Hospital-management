# Hospital Management System

Welcome to the Hospital Management System, a comprehensive solution for managing hospital operations including patient management, appointment scheduling, and administrative controls.

## Frontend

### Features

- **Patient Management**: Add, update, and view patient information.
- **Appointment Scheduling**: Schedule, reschedule, and cancel patient appointments.
- **Doctor Dashboard**: Manage doctor schedules and availability.
- **Admin Dashboard**: Administrative controls for managing users and roles.

### Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast frontend build tool with modern development features.
- **React Router**: Declarative routing for React applications.
- **Axios**: Promise-based HTTP client for backend API communication.

### Getting Started

To get a local copy up and running:

1. Clone the repository:
git clone https://github.com/your-username/hospital-management-system-frontend.git
cd hospital-management-system-frontend

2. Install dependencies:
npm install

3. Run the development server:
npm run dev


### Contributing

Contributions are welcome! Fork the project, make your changes, and submit a pull request.

### License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Backend

### Features

- **User Authentication**: Admin, Doctor, and Patient roles with JWT.
- **Appointment Management**: CRUD operations for appointments.
- **User Registration**: Register and manage users (Doctors, Patients).
- **Messaging System**: Allows users to send and receive messages.
- **File Upload**: Upload doctor avatars using Cloudinary.

### Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: MongoDB object modeling for Node.js.
- **JWT**: JSON Web Tokens for authentication.
- **Cloudinary**: Cloud-based image and video management services.

### Installation

1. Clone the repository:

2. Install dependencies:

3. Set up environment variables in a `.env` file:
```plaintext
PORT=3000
MONGO_URL=mongodb://localhost:27017/hospital_management_system
JWT_SECRET_KEY=your_secret_key
JWT_EXPIRES=30d
COOKIE_EXPIRE=30
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
FRONTEND_URL=http://localhost:3001  # Replace with your frontend URL
DASHBOARD_URL=http://localhost:3002 # Replace with your dashboard URL

4. Start the server:

API Endpoints
Detailed documentation of API endpoints is available in respective router files (userRouter.js, appointmentRouter.js, messageRouter.js). Ensure proper JWT authentication headers are set for protected routes.

Authentication
Supports authentication for Admin, Doctor, and Patient roles using JWT. Middleware functions (isAdminAuthenticated, isPatientAuthenticated) enforce authentication for protected routes.

Error Handling
Error handling middleware (errorMiddleware.js) manages validation errors, JWT errors, MongoDB errors, etc., returning structured JSON error messages.

Credits-
Contributions are welcome. Fork the repository, make your changes, and submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.
