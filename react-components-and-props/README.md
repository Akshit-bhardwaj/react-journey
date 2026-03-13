# React Components and Props

A simple React project demonstrating the use of **components**, **props**, and **props drilling** to build reusable profile cards with dynamic data.

---

## 📌 Project Overview

This project focuses on understanding core **React fundamentals** such as:

* Creating reusable **React components**
* Passing data using **props**
* Implementing **props drilling** to share data across components
* Rendering **multiple dynamic cards** using reusable components

The application displays multiple **profile cards**, where each card receives different data (name, description, image, etc.) through props.

---

## ⚙️ Tech Stack

* React.js
* JavaScript (ES6+)
* CSS
* Vite (Development environment)

---

## 📂 Project Architecture

```
react-components-and-props
│
├── public
│
├── src
│   ├── components
│   │   └── Card.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
└── README.md
```

### Architecture Explanation

* **components/**
  Contains reusable React components.
  `Card.jsx` is responsible for rendering the profile card UI.

* **App.jsx**
  The main component where multiple `Card` components are rendered and props are passed.

* **main.jsx**
  React application entry point.

* **index.css**
  Global styling for the application.

---

## 🧠 Concepts Demonstrated

### 1. Reusable Components

The `Card` component is designed to be reusable and can display different content based on props.

### 2. Props

Data such as **name, description, and image** is passed from parent components to child components using props.

### 3. Props Drilling

Props are passed through components to deliver dynamic data to the `Card` component.

### 4. Dynamic UI Rendering

Multiple cards are rendered using the same component with different data.

---

## 🚀 Running the Project

### 1. Clone the repository

```bash
git clone https://github.com/Akshit-bhardwaj/react-journey.git
```

### 2. Navigate to the project folder

```bash
cd react-components-and-props
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

After running the command, open the local development server in your browser.

---


---

## 📖 Learning Outcome

After building this project, you will understand:

* How React components work
* How props pass data between components
* How reusable UI components are structured
* Basic React project architecture

---

## 👨‍💻 Author

Developed by **Akshit Bhardwaj**
