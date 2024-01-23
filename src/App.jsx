import "./App.css";
import { useState } from "react"; //to create a state

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
        <h1>{count}</h1>
        <button> Increase </button>
        <button> Decrease </button>
        <button> Set to Zero </button>
        <h1> {count} </h1>
      </div>
    </div>
  );
}

export default App;