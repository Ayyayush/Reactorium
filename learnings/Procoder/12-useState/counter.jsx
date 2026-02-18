import "./styles.css";
import React, { useState } from "react";

/*
 * Counter Component
 * -----------------
 * This component uses useState to update count
 */
const Counter = () => {

  // count → state value
  // setCount → function to update state
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      {/* On click, state updates → UI re-renders */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      {/* Rendering Counter component */}
      <Counter />
    </div>
  );
}
