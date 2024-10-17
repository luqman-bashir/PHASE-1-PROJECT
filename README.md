# Video App
### The app is Video App, 16/10/2024
### **By Luqman Bashir**

## Description
The Video App is a web application that allows users to manage a collection of educational videos. Users can search for videos, add new ones, edit existing entries, and delete videos they no longer need. The app features a clean, responsive UI built using Bootstrap, with JavaScript handling the logic for video management, and a JSON server simulating the backend.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Support and contact details](#support-and-contact-details)
- [License](#license)

## Features
- **Search Videos**: Filter videos in real-time based on the title.
- **Add Video**: Users can add videos by providing the title, description, and YouTube URL.
- **Edit Video**: Modify details of any existing video.
- **Delete Video**: Remove videos from the collection.
- **Responsive Design**: Optimized for different screen sizes using Bootstrap.
- **Video Preview**: YouTube thumbnails are automatically generated based on the provided URL.

## Technologies

The project is built using:

- **HTML**: For structuring the web content.
- **CSS & Bootstrap**: For styling and creating a responsive layout.
- **JavaScript**: For interactivity and handling CRUD operations.
- **JSON Server**: To simulate a RESTful API backend for video data management.

## Installation

### Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js**: Install Node.js from [here](https://nodejs.org/).
- **JSON Server**: This will serve as your mock backend.

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/video-app.git
Navigate to the project folder:

bash
Copy code
cd video-app
Install JSON Server globally if you haven't already:

bash
Copy code
npm install -g json-server
Start the JSON Server:

bash
Copy code
json-server --watch db.json --port 3000
This will host the mock database on http://localhost:3000.

## Run the application:
Open index.html in your web browser, or you can serve it using a local server (e.g., Live Server for Visual Studio Code).

## Usage
Once the application is running:

Add a Video: Fill in the title, description, and the YouTube URL of a video in the form, and click "Add Video".
Edit a Video: To modify a video, click the "Edit" button, update the fields, and save the changes.
Delete a Video: Use the "Delete" button to remove videos from the list.
Search for a Video: Use the search bar at the top to filter videos by title.
Video URL Format
The app expects YouTube video URLs in the format: https://www.youtube.com/watch?v=VIDEO_ID. The thumbnail is automatically generated from this URL.

## Project Structure
bash
Copy code
video-app/
│
├── index.html          # Main HTML file
├── index.js            # JavaScript logic for the app
├── style.css           # Custom styles
├── db.json             # Mock data served by JSON Server
├── README.md           # Project documentation
└── LICENSE             # License file
Contributing
Contributions are welcome! Please follow these steps if you'd like to contribute:

Fork the project.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add some feature').
Push the branch (git push origin feature/your-feature).
Open a Pull Request.
Please ensure your code adheres to the project's coding standards and includes proper documentation.

##live server
* You can view the web live on [video app](https://luqman-bashir.github.io/PHASE-1-PROJECT/)
* render live (https://dashboard.render.com/web/srv-cs81rg08fa8c73bis380/deploys/dep-cs81rg88fa8c73bis3c0?r=2024-10-16%4020%3A09%3A42%7E2024-10-16%4020%3A12%3A33)



## Support and contact details
Email: luqmanbash@gmail.com

## License
*LIcenced under the [MT-licence]()*

Copyright (c) 2024 **Luqman Bashir**

## Acknowledgments
This project uses Bootstrap for its responsive layout. JSON Server provides a simple way to mock a backend API.

