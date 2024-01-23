import "./App.css";
import { useState } from "react"; //to create a state
import IncreaseButton from "./components/IncreaseButton";
import DeacreaseButton from "./components/DeacreaseButton";
import ResestButton from "./components/ResestButton";

function App() {
  const [count, Setcount] = useState(0);

  const increase = () => {
    Setcount((prevState) => count + 1);
  };

  const decrease = () => {
    Setcount((prevState) => (prevState > 0 ? prevState - 1 : prevState));
  };

  const reset = () => {
    Setcount(0);
  };

  return (
    <div className="d-flex justify-content-center align-items-center text-center vh-100">
      <div>
        <IncreaseButton increase={increase} />
        <ResestButton reset={reset} />
        <DeacreaseButton decrease={decrease} />
        <h1> {count} </h1>
      </div>
    </div>
  );
}

export default App;