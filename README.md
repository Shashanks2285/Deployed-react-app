# AI-Powered Todo List with AI Workout Planner

A full-stack application that combines a to-do list with AI-powered workout planning. Users can add tasks (each representing a muscle group), generate an AI-driven workout plan, delete tasks, and save the task list to a MongoDB backend. The frontend is built with React and enhanced with smooth animations using Framer Motion, while the backend is built with Node.js, Express, and MongoDB.

> **Live Demo (Frontend):** [https://deployed-react-app-frontend.vercel.app/login](https://deployed-react-app-frontend.vercel.app/login)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [Frontend Setup](#frontend-setup)
    - [Backend Setup](#backend-setup)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [CORS Configuration](#cors-configuration)
- [Known Issues & Fixes](#known-issues--fixes)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Task Management:**  
  - Add tasks (e.g., muscle groups) to your list.
  - Delete tasks from the list.
  - Save your tasks to a MongoDB backend.
  
- **AI-Powered Workout Planning:**  
  - Generate AI-driven workout plans based on the muscle group.
  - Plans include recommended exercises, nutrition recommendations, and additional training tips.
  - Powered by Google Generative AI (Gemini).

- **User Authentication:**  
  - Simple login functionality (token and userId are stored in local storage).

- **Modern UI:**  
  - Responsive design with smooth animations using Framer Motion.
  - Custom UI components for buttons, cards, and inputs.
  - Toast notifications for success/error messages.

## Technologies Used

- **Frontend:**  
  - React  
  - Framer Motion  
  - Axios  
  - React Toastify  
  - Google Generative AI (Gemini)  
  - Custom UI Components  

- **Backend:**  
  - Node.js  
  - Express  
  - MongoDB (Mongoose)  

- **Deployment:**  
  - Vercel

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (or yarn)
- A MongoDB instance (local or MongoDB Atlas)
- Vercel account (for deployment)

### Installation

#### Frontend Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/ai-powered-todo-list.git
   cd ai-powered-todo-list/frontend
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the `frontend` directory with the following variable:

   ```env
   REACT_APP_GEMINI_API_KEY=your_google_generative_ai_api_key
   ```

4. **Run the Frontend:**

   ```bash
   npm start
   ```

#### Backend Setup

1. **Navigate to the Backend Directory:**

   ```bash
   cd ../backend
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the `backend` directory with the following:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=8510
   ```

4. **Run the Backend Server:**

   ```bash
   npm start
   ```

## API Endpoints

### **POST /tasks/add**

- **Description:** Add new tasks or update the existing task list for a user.

### **GET /tasks/all/:userId**

- **Description:** Retrieve all tasks for a given user.

## Deployment

Both the frontend and backend are deployed on Vercel.

## CORS Configuration

When deploying to different origins, ensure the backend sends the correct CORS headers.

## Known Issues & Fixes

- **CORS Errors:**  
  Ensure your backend is configured correctly with CORS headers.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License.

## Contact

For questions or further information, please contact [Your Name](mailto:your.email@example.com).

