# Hospital Management System

Welcome to the Hospital Management System, a comprehensive solution for managing hospital operations including patient management, appointment scheduling, and administrative controls.

## Authors
   *Training project*

- *Anurag Kushwaha*
  
  - *Email-* anuragkushwaha1501@gmail.com
    
- *Anurag Trivedi*
  
  - *Email-* anuragtrivediindian@gmail.com
    
- *Aryan Chaurasia*
  
  - *Email-* aryanchaurasia033@gmail.com
  

## Frontend

### Features

- *Patient Management*: Add, update, and view patient information.
- *Appointment Scheduling*: Schedule, reschedule, and cancel patient appointments.
- *Doctor Dashboard*: Manage doctor schedules and availability.
- *Admin Dashboard*: Administrative controls for managing users and roles.

### Technologies Used

- *React*: JavaScript library for building user interfaces.
- *Vite*: Fast frontend build tool with modern development features.
- *React Router*: Declarative routing for React applications.
- *Axios*: Promise-based HTTP client for backend API communication.

### Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm 


To get a local copy up and running:

1. Clone the repository:
bash
git clone https://github.com/anuragkushwaha1501/Hospital-Management-System.git
cd frontend


2. Install dependencies:
bash
npm install


3. Run the development server:
bash
npm run dev


---

## Backend

### Features

- *User Authentication*: Admin, Doctor, and Patient roles with JWT.
- *Appointment Management*: CRUD operations for appointments.
- *User Registration*: Register and manage users (Doctors, Patients).
- *Messaging System*: Allows users to send and receive messages.
- *File Upload*: Upload doctor avatars using Cloudinary.

### Technologies Used

- *Node.js*: JavaScript runtime environment.
- *Express.js*: Web application framework for Node.js.
- *MongoDB*: NoSQL database for storing application data.
- *Mongoose*: MongoDB object modeling for Node.js.
- *JWT*: JSON Web Tokens for authentication.
- *Cloudinary*: Cloud-based image and video management services.

### Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm 
- MongoDB Compass / Create MongoDB Atlas Account 
- Create Cloudinary Account

To get a local copy up and running:

1. Clone the repository:
bash
git clone https://github.com/anuragkushwaha1501/Hospital-Management-System.git
cd backend


2. Install dependencies:
bash
npm install


3. Set up environment variables:
Create a .env file in the backend directory and add the given details:
plaintext
PORT=
MONGO_URL=
FRONTEND_URL=
DASHBOARD_URL=
JWT_SECRET_KEY=
JWT_EXPIRES=
COOKIE_EXPIRE=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_SECRET=
CLOUDINARY_API_KEY=


4. Run the development server:
bash
npm run dev


*API Endpoints*

Detailed documentation of API endpoints is available in respective router files (userRouter.js, appointmentRouter.js, messageRouter.js). Ensure proper JWT authentication headers are set for protected routes.

*Authentication*

Supports authentication for Admin, Doctor, and Patient roles using JWT. Middleware functions (isAdminAuthenticated, isPatientAuthenticated) enforce authentication for protected routes.

*Error Handling*

Error handling middleware (errorMiddleware.js) manages validation errors, JWT errors, MongoDB errors, etc., returning structured JSON error messages.

---

## Dashboard

### Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm 


To get a local copy up and running:

1. Clone the repository:
bash
git clone https://github.com/anuragkushwaha1501/Hospital-Management-System.git
cd dashboard


2. Install dependencies:
bash
npm install


3. Run the development server:
bash
npm run dev


---

### Running the Application

1. Start the backend server:
   bash
   cd backend
   npm start
   

2. Start the frontend development server:
   bash
   cd frontend
   npm start
   

3. Open your browser and navigate to http://localhost: _your_frontend_localhost_port to see the application in action.

4. Start the dashboard development server:
   bash
   cd dashboard
   npm start
   
   
5. Open your browser and navigate to http://localhost: _your_dashboard_localhost_port to see the application in action.

### Contributing

Contributions are welcome! Fork the project, make your changes, and submit a pull request.

### License

This project is licensed under the MIT License - see the LICENSE file for details.
