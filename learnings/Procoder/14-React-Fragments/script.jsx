// ❌ WRONG before: useState was not imported
// ✅ FIX: import useState
import React, { useState } from "react";

// ❌ WRONG before: component name was lowercase
// ✅ FIX: Component name must start with CAPITAL letter
const Counter = () => {

  // ❌ WRONG before: inconsistent naming + spelling
  // ✅ FIX: proper variable name
  const totalApples = 10;

  // ❌ WRONG before: leftapplecount initialized incorrectly
  // ✅ FIX: left basket should start with total apples
  const [leftAppleCount, setLeftAppleCount] = useState(totalApples);

  // ❌ WRONG before: rightAppleCount depended on wrong variable
  // ✅ FIX: start with 0 apples
  const [rightAppleCount, setRightAppleCount] = useState(0);

  // ❌ WRONG before: empty if() condition
  // ✅ FIX: proper boundary check
  const leftClickHandler = () => {
    if (rightAppleCount > 0) {
      setRightAppleCount(rightAppleCount - 1);
      setLeftAppleCount(leftAppleCount + 1);
    }
  };

  const rightClickHandler = () => {
    if (leftAppleCount > 0) {
      setLeftAppleCount(leftAppleCount - 1);
      setRightAppleCount(rightAppleCount + 1);
    }
  };

  return (
    <>
      <div className="counter w-full rounded-xl">

        {/* ❌ WRONG before: JSX syntax invalid */}
        {/* ✅ FIX: render value inside JSX properly */}
        <div className="basket1">
          {leftAppleCount}
        </div>

        {/* ❌ WRONG before: button had no click handler */}
        <button onClick={leftClickHandler}>
          ←
        </button>

        <button onClick={rightClickHandler}>
          →
        </button>

        {/* ❌ WRONG before: JSX syntax invalid */}
        <div className="basket2">
          {rightAppleCount}
        </div>

      </div>
    </>
  );
};

// ❌ WRONG before: exporting lowercase component
// ✅ FIX: export correct component
export default Counter;
