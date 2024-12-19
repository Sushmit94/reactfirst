import { useState } from "react";
import './App.css';

function App() {
  const [color, setColor] = useState("olive");

  console.log("Current color:", color); // Debugging log to see if state is changing

  return (
    <div className={`app-container ${color}`}>
      <div className="button-container">
        <button onClick={() => setColor("red")} className="color-button red">
          Red
        </button>
        <button onClick={() => setColor("blue")} className="color-button blue">
          Blue
        </button>
        <button onClick={() => setColor("green")} className="color-button green">
          Green
        </button>
      </div>
    </div>
  );
}

export default App;
