import "./App.css";
import { useState } from "react"; //to create a state

function App() {
const [count, setCount] = useState(0);

return (
<div className="App">
       <button> Increase </button>
       <button> Decrease </button>
       <button> Set to Zero </button>
       <h1> {count} </h1>
</div>
);
}