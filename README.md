React Basic Architecture (Vite + React)

This project demonstrates the basic architecture of a React application created with Vite.
It explains the purpose of important folders and files and shows how a simple component is connected and rendered in the application.

---

Project Overview

This project was created to understand:

- How a React project generated with Vite is structured
- The role of core files like "index.html", "main.jsx", and "App.jsx"
- How React components are created and rendered
- Where static assets such as images, videos, and fonts should be stored

---

## Project Architecture
```
react-basic-architecture
│
├── node_modules
│
├── public
│   ├── images
│   ├── videos
│   └── fonts
│
├── src
│   ├── components
│   │   └── App.jsx (custom component example)
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js

```
---

Folder and File Explanation

1. public/

The public folder contains static assets that do not need to be processed by the build tool.

Typical assets stored here include:

- Images
- Videos
- Fonts
- Icons
- Static files like "robots.txt"

Example:

public
 ├── images
 ├── videos
 └── fonts

Files placed here are served directly by the browser.

---

2. src/

The src folder contains the main source code of the React application.

This is where all React components, logic, styles, and application structure are written.

Example structure:

src
 ├── components
 ├── App.jsx
 └── main.jsx

---

3. App.jsx

"App.jsx" is the root component of the React application.

All other components are usually imported and rendered inside this component.

Example:

const App = ()=>{
  return (
    <div id="parent">
      <h1 id="child1">Hello I'm first child</h1>
      <h2 id="child2">Hello I'm second child</h2>
    </div>
  )
}
export default App

export default App

This component represents the main UI structure of the application.

---

4. main.jsx

"main.jsx" is the entry point of the React application.

It connects the React app to the HTML page and renders the root component ("App").

Example flow:

main.jsx
   ↓
App.jsx
   ↓
Components

Example code:

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
)

---

5. index.html

"index.html" is the main HTML file of the application.

It contains a root element where the React application will be mounted.

Example:

<div id="root"></div>

React attaches the application to this element using "main.jsx".

---

6. components/

The components folder is used to store reusable UI components.

Example components:

- Navbar
- Button
- Card
- Footer
- Forms

Example structure:

components
 └── App.jsx

These components are imported and used inside "App.jsx".

---

7. package.json

"package.json" is one of the most important files in a JavaScript project.

It contains:

- Project name and version
- Installed dependencies
- Development scripts
- Project metadata

Example:

scripts:
- dev → start development server
- build → create production build
- preview → preview production build

Dependencies like React are also listed here.

---

8. node_modules/

This folder contains all installed project dependencies.

It is automatically generated when running:

npm install

This folder should never be edited manually.

---

Application Flow

The application runs in the following order:

index.html
   ↓
main.jsx
   ↓
App.jsx
   ↓
Components

1. "index.html" provides the root element
2. "main.jsx" connects React to the DOM
3. "App.jsx" acts as the root React component
4. Other components are rendered inside "App.jsx"

---

Example Implementation

In this project:

- A simple App component was created
- The component was imported into "main.jsx"
- React renders the component inside the root element in "index.html"

---

Learning Objective

This project helps understand:

- React project architecture
- Component-based structure
- Application entry point
- Static vs dynamic resources
- How React mounts the UI to the DOM

---

Conclusion

Understanding the basic architecture of a React project is essential before building real-world applications.

Once this structure is clear, developers can move on to:

- Props
- State
- Hooks
- Routing
- API integration
- Component design patterns

---

Author

Akshit Bhardwaj

React Learning Journey
