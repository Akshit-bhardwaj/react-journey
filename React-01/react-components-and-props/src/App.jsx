// Calling components in App.jsx
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const app = () => {
  return (
    <>
      {/* <Navbar name= "raju"/>
        <Navbar name= "Akshit"/> */}
      <div className="parent">
        <Card
          name="Akshit Bhardwaj"
          about="hello"
          img="https://images.unsplash.com/photo-1770699196996-1c94e091cdfb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
        />
        <Card
          name="Kritika Aggarwal"
          img="https://images.unsplash.com/photo-1743082063774-674d414c74cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
        />
        <Card
          name="Ansh Bhardwaj"
          img="https://images.unsplash.com/photo-1753301639147-efd28ea85dac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
        />
        <Card
          name="Akshita Bhardwaj"
          img="https://images.unsplash.com/photo-1771924310799-930349452c76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
        />
      </div>
    </>
  );
};
export default app;
