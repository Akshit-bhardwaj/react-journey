# Job Cards UI – React Project

##  Project Description

This project is a simple **Job Cards UI built using React**.
It displays multiple job listings using **React components and props**.

The main objective of this project is to understand React concepts such as:

* Components
* Props
* Dynamic rendering using `.map()`
* Reusable UI components

Each job card displays information like **company logo, company name, job role, job type, salary, and location.**

---

##  Features

* Dynamic job cards using `.map()`
* Reusable **Card component**
* Props used for passing data
* Company logos
* Clean and simple UI

---

## 🛠️ Technologies Used

* React.js
* JavaScript (ES6)
* HTML5
* CSS3

---

## 📂 Project Structure

```
src
│
├── App.js
├── Cards.jsx
├── data.js
└── style.css
```

* **App.js** → Main component where job data is mapped
* **Cards.jsx** → Reusable job card component
* **data.js** → Job data array
* **style.css** → Styling for UI

---

## ⚙️ How to Run This Project

Follow these steps to run the project locally on your system.

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Akshit-bhardwaj/react-journey.git
```

### 2️⃣ Go to the Project Directory

```bash
cd react-journey
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Start the Development Server

```bash
npm run dev
```

---

## 📊 How It Works

1. A **job data array** contains multiple job objects.
2. The `.map()` function loops through the job data.
3. Each job object is passed as **props** to the `Cards` component.
4. The `Cards` component renders the job card UI.

Example:

```javascript
{jobs.map((job, index) => (
  <Cards key={index} {...job} />
))}
```

---

## 🧑‍💻 Author

**Akshit Bhardwaj**

---