#  Full-Stack Hotel Booking System

[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/) 
[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)](https://reactjs.org/) 
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/) 

A **full-stack hotel booking application** built with the MERN stack (MongoDB, Express, React, Node.js). Users can browse hotels, view room details, check availability, and make bookings with secure authentication. Includes both frontend and backend components, optimized for responsive UI and smooth UX.

---

##  Features

-  **User Authentication** – Secure login and registration with JWT and encrypted passwords  
-  **Browse Hotels** – Search hotels and filter by location, price, etc.  
-  **Booking System** – Book rooms with real-time availability checks  
-  **User Dashboard** – View and manage bookings  
-  **Admin Dashboard** – Manage hotels, rooms, and bookings  
-  **Responsive UI** – Optimized for both desktop and mobile  

---

##  Technologies Used

- **Frontend:** React, CSS, Bootstrap (or other CSS frameworks)  
- **Backend:** Node.js, Express  
- **Database:** MongoDB  
- **Authentication:** JWT (JSON Web Tokens)  
- **Deployment:** Heroku (backend), Netlify/Vercel (frontend)  

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed  
- [MongoDB](https://www.mongodb.com/) installed locally or a MongoDB Atlas account  

---

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Binary-Shade/Full-stack-hotel-booking.git
   cd Full-stack-hotel-booking
   ```

2. **Install dependencies for both frontend and backend:**
   - For the backend:
     ```bash
     cd backend
     npm install
     ```
   - For the frontend:
     ```bash
     cd ../frontend
     npm install
     ```

3. **Environment Variables**:
   Create a `.env` file in the `backend` directory with the following:
   ```plaintext
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   ```

### Running the Project

1. **Backend**:
   In the `backend` directory, run:
   ```bash
   npm start
   ```

2. **Frontend**:
   In the `frontend` directory, run:
   ```bash
   npm start
   ```

3. **Access the application**:
   - Frontend: `http://localhost:3000`
   - Backend (API): `http://localhost:5000`

## Project Structure

```
hotel-booking-system/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   └── index.js
└── README.md
```

- **Backend**: Contains the server code, routes, models, and controllers for the API.
- **Frontend**: React code, organized into components and pages for a smooth user experience.

## API Endpoints

- **User Authentication**: `/api/auth/`
- **Hotel Management**: `/api/hotels/`
- **Room Management**: `/api/rooms/`
- **Booking**: `/api/bookings/`
