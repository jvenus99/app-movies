# App Movies

This repository contains the code for the App Movies application, which is a web application for searching and exploring movies. The application is built using a client-server architecture, with the frontend and backend components.
Frontend

The frontend of the application is built using React, a popular JavaScript library for building user interfaces. It follows a component-based architecture and utilizes modern web development tools and libraries.
Technologies Used

    React: A JavaScript library for building user interfaces.
    Redux: A predictable state management library for managing application state.
    Axios: A promise-based HTTP client for making API requests.
    SCSS: A CSS preprocessor that enhances the capabilities of CSS.

Project Structure

The frontend code is organized using a modular structure, following the principles of clean architecture with DDD. The main folders and files in the frontend codebase are:


Backend

The backend of the application is built using NestJS, a powerful Node.js framework for building scalable and efficient server-side applications. It follows the principles of the Clean Architecture, which promotes separation of concerns and maintainability.
Technologies Used

    NestJS: A progressive Node.js framework for building efficient and scalable server-side applications.
    TypeScript: A statically typed superset of JavaScript that enables type-checking and improved developer productivity.

Project Structure

The backend code follows a modular structure, organized into different modules representing different features and functionalities. The main folders and files in the backend codebase are:

    src/modules: Contains modules representing different features of the application, such as movies and users.
    src/controllers: Contains controller classes responsible for handling incoming requests and returning responses.
    src/services: Contains service classes that encapsulate the business logic of the application.
    src/repositories: Contains repository classes responsible for interacting with the database.

Getting Started

To run the application locally, follow these steps:

    Clone the repository: git clone https://github.com/jvenus99/app-movies.git
    Configure .env in backend with the API key

    cd backend
    yarn
    yarn start

    cd frontend
    yarn
    yarn dev


The application will be accessible at http://localhost:3000 -> backend

Conclusion

The App Movies application is built using a client-server architecture, with React and NestJS as the main technologies for the frontend and backend, respectively. It demonstrates best practices in component-based architecture, state management with Redux, and server-side development with NestJS. Feel free to explore the codebase and contribute to further enhancements and features.