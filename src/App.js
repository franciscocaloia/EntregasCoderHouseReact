import "./App.css";
import NavBar from "./components/NavBar.jsx";
// import { useState } from "react";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  /*const [counter, setCounter] = useState(0);
  console.log(useState(0));

  const handleClick = () => {
    setCounter(counter + 1);
  }; 
*/

  return (
    <>
      <NavBar />
      <ItemListContainer content="Catalogo de productos"></ItemListContainer>
      {/* <h1>{counter}</h1>
      <button onClick={handleClick}>incrementar</button> */}
    </>
  );
}

export default App;
