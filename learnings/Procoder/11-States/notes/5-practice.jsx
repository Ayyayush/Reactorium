import React, { useState } from "react";

const counter = () => {

  // useState returns [value, updateFunction]
  // action → current value
  // setAction → function to update value
  const [action, setAction] = useState(0);

  return (
    <div>

      {/*
        action state value render ho rahi hai
        jab action change hoga, UI re-render hogi
      */}
      <h1>I am a counter {action}</h1>

      {/*
        onClick mein FUNCTION REFERENCE dete hain
        arrow function isliye lagayi taaki click par chale
      */}
      <button
        onClick={() => setAction(action + 1)}
      >
        Increase Action
      </button>

      {/*
        Tailwind classes properly space-separated hoti hain
      */}
      <div className="innerclass text-blue-500 w-full rounded-xl">
        counter Inner Div
      </div>

    </div>
  );
};

export default counter;
