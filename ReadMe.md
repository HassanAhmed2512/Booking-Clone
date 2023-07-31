# Booking.com Clone Project Documentation

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
- :page_with_curl: [License](#license)

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
