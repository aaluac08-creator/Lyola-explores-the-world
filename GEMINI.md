# Project: Iran Scrollytelling Website

## Project Overview

This project is a single-page, responsive, data-driven scrollytelling website that provides an immersive journey through Iran's geography, culture, and complexity. It is built using HTML, CSS, and JavaScript, with a focus on interactive data visualizations and animations.

**Key Technologies:**

*   **HTML:** The main structure of the webpage.
*   **CSS:** Styling the webpage, including responsive design and animations.
*   **JavaScript:** Powering the interactive elements, animations, and visualizations.
*   **D3.js:** Used for creating data-driven visualizations.
*   **Scrollama.js:** A modern and lightweight JavaScript library for scrollytelling.
*   **GSAP (GreenSock Animation Platform):** Used for high-performance animations.
*   **http-server:** A simple, zero-configuration command-line HTTP server.

**Architecture:**

The project follows a simple front-end architecture:

*   `index.html`: The main entry point of the application.
*   `css/`: Contains all the stylesheets for the project.
    *   `main.css`: The main stylesheet.
    *   `typography.css`: Defines the typography.
    *   `animations.css`: Contains the animation keyframes.
    *   `components.css`: Styles for individual components.
    *   `responsive.css`: Responsive design styles.
*   `js/`: Contains all the JavaScript files.
    *   `main.js`: The main application entry point.
    *   `data.js`: Contains the data used for visualizations.
    *   `scrollytelling.js`: Handles the scrollytelling logic.
    *   `visualizations.js`: Creates the D3.js visualizations.
    *   `animations.js`: Handles the GSAP animations.
    *   `utils.js`: Utility functions.
*   `assets/`: Contains all the assets for the project, including images, fonts, and data.

## Building and Running

To run the project, you need to have Node.js and npm installed.

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm start
    ```
    This will start a local development server and open the project in your default browser.

## Development Conventions

*   The code is formatted using Prettier.
*   The project uses a modular approach for both CSS and JavaScript, with separate files for different concerns.
*   The project uses a dark theme with a Persian-inspired color palette.
*   The project uses a combination of serif and sans-serif fonts for headings and body text.
