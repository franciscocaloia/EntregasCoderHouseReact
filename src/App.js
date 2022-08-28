import "./App.css";
import NavBar from "./components/NavBar.jsx";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  console.log(useState(0));

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <NavBar />
      <h1>{counter}</h1>
      <button onClick={handleClick}>incrementar</button>
    </>
  );
}

export default App;
