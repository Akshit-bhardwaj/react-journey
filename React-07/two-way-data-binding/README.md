Two-Way Data Binding in React

This project demonstrates the concept of two-way data binding in React.js, where the UI and state stay in sync with each other.

🚀 What is Two-Way Data Binding?

Two-way data binding means:

When the user updates the input, the state updates
When the state updates, the UI reflects the change

👉 In React, this is achieved using:

useState()
value attribute
onChange event
🧠 Implementation
```
import { useState } from "react"

const DataBinding = () => {
  const [name, setName] = useState("")

  return (
    <>
      <input
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />

      <h1>{name}</h1>
    </>
  )
}

export default DataBinding

```
 How It Works
 ----
useState creates a state variable name
value={name} binds input field with state
onChange updates state on every keystroke
UI (<h1>) updates automatically
```
🏗️ Project Structure
src/
│── components/
│     └── DataBinding.jsx
│
│── App.jsx
│── main.jsx
```
 Key Learning
 ----
Controlled components in React
Handling user input efficiently
Syncing UI with state
 Conclusion
 ----

This project helped in understanding how React manages dynamic data and keeps the UI consistent using two-way data binding.