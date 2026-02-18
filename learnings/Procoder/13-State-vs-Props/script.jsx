import { useState } from "react";


const Counter4 = () => { 
  const [count, setCount] = useState(0);

  console.log("rendering Counter");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>

      <button
        onClick={() => {
          // React ko bola: previous value leke update karo
          setCount((previousState) => previousState + 1);
          setCount((previousState) => previousState + 1);
          setCount((previousState) => previousState + 1);
        }}
      >
        Increase Count
      </button>
    </div>
  );
};
