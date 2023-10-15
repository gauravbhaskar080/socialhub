# MERN Social Media Website

This project is a social media website built using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to create accounts, post updates, follow other users, and interact with posts through likes and comments.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Setup](#setup)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization system.
- Create, edit, and delete posts with rich text content.
- Follow other users and view their posts on a personalized feed.
- Like and comment on posts to engage with other users.

## Demo

[Link to Demo](https://gaurav-bhaskar-social-hub.netlify.app/)

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/gauravbhaskar080/socialhub.git
   ```

2. **Install dependencies:**

   Navigate to the project directory and run:

   ```bash
   cd social-media-website
   npm install
   cd client
   npm install
   cd server
   npm install
   ```

3. **Set up MongoDB:**

   - Create a `.env` file in the server directory and add your MongoDB URL:

     ```
     MONGO_URL = 'your_mongo_db_url'
     JWT_SECRET = 'your_jwt_secret'
     PORT = 3001
     ```


## Usage

1. **Start the server:**
   In a new terminal window, navigate to the `server` directory and run:
   ```bash
   cd server
   npm start
   ```

   The server will start at `http://localhost:3001`.

2. **Start the client:**

   In a new terminal window, navigate to the `client` directory and run:

   ```bash
   cd client
   npm start
   ```

   The client will start at `http://localhost:3000`.

3. **Access the website:**

   Open a web browser and go to `http://localhost:3000`.

## File Structure

- `client/`: Contains the React frontend.
  - `public/`: Holds static files like CSS, images, and JavaScript.
  - `src/`: Contains the main source code.
    - `components/`: React components used in the application.
    - `scenes/`: Different scenes or pages of the application.
    - `state/`: Redux store and related files.
    - `api.js`: Backend deployment link.
    - `App.js`: The main application component.
    - `index.js`: Entry point of the React application.
    - `theme.js`: Contains theme-related styling.
- `server/`: Contains the Node.js backend.
  - `controllers/`: Controllers for handling routes and data.
  - `data/`: Sample data for initial setup.
  - `middleware/`: Custom middleware functions.
  - `models/`: Mongoose models for MongoDB.
  - `public/`: Static files.
  - `routes/`: Express.js route handlers.
  - `.env`: Configuration file for environment variables.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Create a pull request to the original repository.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for your own purposes.

---
