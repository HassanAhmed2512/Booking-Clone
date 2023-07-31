# Booking.com (Clone)

This documentation provides an overview of the Booking.com Clone project, developed using MERN stack (MongoDB, Express, React, Node.js) and various other technologies. The project serves as a replica of the popular booking website "booking.com," allowing users to search for accommodations, view details, and make bookings.

## Table of Contents

- :house_with_garden: [Project Overview](#project-overview)
- :star: [Features](#features)
- :wrench: [Technologies Used](#technologies-used)
- :rocket: [Getting Started](#getting-started)
  - :gear: [Prerequisites](#prerequisites)
  - :inbox_tray: [Installation](#installation)
- :hammer_and_wrench: [Setting Up the Backend](#setting-up-the-backend)
  - :file_folder: [Database Configuration](#database-configuration)
  - :closed_lock_with_key: [JWT Strategy for Authentication](#jwt-strategy-for-authentication)
- :art: [Setting Up the Frontend](#setting-up-the-frontend)
  - :arrows_counterclockwise: [React Context API](#react-context-api)
  - :globe_with_meridians: [Axios for API Calls](#axios-for-api-calls)
- :lock: [Encrypting Passwords](#encrypting-passwords)
- :busts_in_silhouette: [Contributing](#contributing)

## Project Overview

The Booking.com Clone is a full-stack web application built with the MERN (MongoDB, Express, React, Node.js) technology stack. The goal of this project is to provide users with an interface to search for and book accommodations. The application offers user authentication, search functionality, detailed accommodation information, and the ability to make bookings securely.

## Features

- :door: User authentication (signup, login, and logout) using JWT tokens.
- :mag: Search for accommodations based on location, dates, and other filters.
- :hotel: View detailed information about accommodations, including images and reviews.
- :pencil: Make bookings for selected accommodations securely.
- :lock: Encrypt user passwords for enhanced security.

## Technologies Used

The project incorporates the following technologies:

- **Frontend**: 
  - :atom: React: A popular JavaScript library for building user interfaces.
  - :arrows_counterclockwise: React Context: Used for state management within the application.
  - :globe_with_meridians: Axios: A promise-based HTTP client for making API calls to the backend.
  
- **Backend**: 
  - :computer: Node.js: A server-side JavaScript runtime environment.
  - :rocket: Express: A fast and minimalist web application framework for Node.js.
  - :card_file_box: MongoDB: A NoSQL database used to store application data.
  - :closed_lock_with_key: JWT (JSON Web Tokens): Used for secure authentication.
  - :lock: Bcrypt: Used to encrypt and hash user passwords for security.

## Getting Started

Follow the steps below to set up and run the project on your local machine.

### Prerequisites

Ensure you have the following prerequisites installed:

- :gear: Node.js and npm (Node Package Manager)
- :card_file_box: MongoDB database

### Installation

1. Clone the repository from GitHub:

   ```bash
   git clone <repository_url>
   cd booking-com-clone
   
Install the required dependencies for both frontend and backend:

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install

## Setting Up the Backend

### Database Configuration
Make sure you have MongoDB installed and running on your system.

Create a .env file in the backend directory with the following content:
MONGODB_URI=<your_mongodb_connection_string>

### JWT Strategy for Authentication

The backend uses JSON Web Tokens (JWT) for user authentication. When a user logs in or signs up, the server issues a JWT token that the user includes in subsequent requests to authenticate themselves.

- To use JWT for authentication, create a .env file in the backend directory with the following content:
 `JWT_SECRET=<your_jwt_secret_key>` .
 - The JWT_SECRET is a secret key used to sign the tokens. Make sure to replace <your_jwt_secret_key> with a strong and secure random string.

## Setting Up the Frontend

### React Context API

The frontend uses the React Context API for state management. The context provides a way to pass data through the component tree without having to pass props manually at every level.


### Axios for API Calls
Axios is used in the frontend to make API calls to the backend server. Ensure that the backend server is running and accessible from the frontend.

## Encrypting Passwords
User passwords are encrypted using the bcrypt library before storing them in the database. This ensures that user data remains secure even in the event of a data breach.

## Contributing
We welcome contributions to improve the project. If you find any issues or want to add new features, please feel free to create pull requests.







