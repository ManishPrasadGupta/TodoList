# To-Do List Application (PERN Stack)

This is a To-Do List web application built using the **PERN Stack** (PostgreSQL, Express.js, React, Node.js) and styled with **Tailwind CSS**. The application allows users to add, delete, and update tasks, providing a simple and effective way to manage tasks online.

## Features

- Add tasks to the to-do list.
- Mark tasks as completed.
- Delete tasks.
- Update tasks.

## Technologies Used

- **PostgreSQL**: Used for storing and managing the tasks in the database.
- **Express.js**: A web framework for Node.js used to build the backend API.
- **React**: A JavaScript library for building user interfaces, used for the frontend of the application.
- **Node.js**: A JavaScript runtime used to build the server-side of the application.
- **Tailwind CSS**: A utility-first CSS framework used for styling the frontend.

## Project Structure

The project is divided into two main directories:

- **client**: Contains the React frontend for the application, styled with Tailwind CSS.
- **server**: Contains the Express.js backend and connects to the PostgreSQL database.

## Setup Instructions

### Prerequisites

- Node.js
- PostgreSQL

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
2. Install dependencies for both client and server:

- For the client (React):
```basg
cd client
npm install
```
- For the server (Express.js):
 ```bash
cd server
npm install
```
3. Set up the PostgreSQL database by creating a new database and updating the connection details in the server directory.

4. bStart the server and the client:

- In the server directory:

bash
Copy code
npm start
In the client directory:
```bash
npm start
```
5. Open the application in your browser at http://localhost:3000.

