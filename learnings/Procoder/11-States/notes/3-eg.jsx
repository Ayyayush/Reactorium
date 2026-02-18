/**
 * Let’s understand working of useState (STEP BY STEP – Hinglish)
 *
 * Abhi ke liye hum useState ko "hooks-shooks" nahi maan rahe 😄
 * Simple words mein:
 * 👉 useState ek ADVANCED FUNCTION hai jo React ko
 *    extra power deta hai UI update karne ke liye.
 *
 * ------------------------------------------------------------
 * Basic idea:
 * ------------------------------------------------------------
 * - useState React ka ek function hai
 * - Ye function humein 2 cheezein deta hai:
 *   1️⃣ Ek value (state value)
 *   2️⃣ Ek function (jo us value ko update karta hai)
 *
 * ------------------------------------------------------------
 * IMPORTANT:
 * ------------------------------------------------------------
 * Jab hum useState(value) likhte hain,
 * toh jo value hum pass karte hain
 * woh by default ARRAY ke 0th index par chali jaati hai.
 *
 * Aur 1st index par hota hai
 * 👉 us value ko update karne wala function
 *
 * Matlab:
 * useState(initialValue)
 * return karega:
 * [ value, updateFunction ]
 *
 * ------------------------------------------------------------
 * Example samajhne se pehle console output dekhte hain
 * ------------------------------------------------------------
 */

// (Sirf samajhne ke liye – normally hum aise console nahi karte)
console.log(useState); 
// Output (conceptual):
// ƒ useState() { ... }
// 👉 Matlab useState ek FUNCTION hai

console.log(useState());  
// Output (conceptual):
// [undefined, ƒ]
// 👉 Array milta hai
// 👉 0th index = state value (undefined kyunki value pass nahi ki)
// 👉 1st index = function jo state update karega

/**
 * ------------------------------------------------------------
 * Ab REAL EXAMPLE dekhte hain
 * ------------------------------------------------------------
 */

import { useState } from "react";

export default function Counter() {

  /**
   * Yahan hum useState(0) call kar rahe hain
   *
   * useState(0) ka matlab:
   * - Initial value = 0
   * - React internally ek array banata hai:
   *
   * [
   *   0,                 // 0th index → state value
   *   function () {...}  // 1st index → state update function
   * ]
   */

  const myStateArray = useState(0);

  /**
   * Agar hum console karein:
   *
   * console.log(myStateArray);
   *
   * Output:
   * [0, ƒ]
   *
   * Matlab:
   * myStateArray[0] = 0
   * myStateArray[1] = function
   */

  return (
    <div style={{ textAlign: "center" }}>

      {/*
        myStateArray[0] → current state value
        Pehle render par:
        Output hoga: 0
      */}
      <h1>{myStateArray[0]}</h1>

      {/*
        Button par click event laga hai
        onClick ke andar function likha hai
      */}
      <button
        onClick={
          () =>
            /**
             * myStateArray[1] → state update function
             *
             * myStateArray[0] + 1 ka matlab:
             * - current value lo
             * - usme 1 add karo
             * - React ko bolo state update karne ke liye
             *
             * Jaise hi ye function chalega:
             * 👉 State update hogi
             * 👉 React component dobara render karega
             * 👉 UI update ho jaayega
             */
            myStateArray[1](myStateArray[0] + 1)
        }
      >
        Increase Count
      </button>
    </div>
  );
}

/**
 * ------------------------------------------------------------
 * FLOW SUMMARY (VERY IMPORTANT – EXAM / INTERVIEW)
 * ------------------------------------------------------------
 *
 * 1️⃣ useState(0) call hota hai
 * 2️⃣ React ek array deta hai → [value, function]
 * 3️⃣ value JSX mein use hoti hai
 * 4️⃣ Button click hota hai
 * 5️⃣ Update function call hota hai
 * 6️⃣ State change hoti hai
 * 7️⃣ React re-render karta hai
 * 8️⃣ Updated value UI par dikh jaati hai
 *
 * ------------------------------------------------------------
 * Ek line mein:
 * ------------------------------------------------------------
 * useState humein state value + usko update karne ka function deta hai,
 * aur jab state update hoti hai, React UI ko dobara render karta hai.
 */

