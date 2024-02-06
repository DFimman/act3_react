import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
  };

  const reset = () => {
    setNumber(0);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Activity 3: Dichosa Number App</h1>
      </header>
      <div className="counter-container">
        <div className="counter">{number}</div>
        <div className="buttons">
          <button onClick={increment}>Increase</button>
          <button onClick={decrement}>Decrease</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;