/**
 * Prev State (Previous State) – DETAIL MEIN (Beginner Hinglish)
 *
 * ------------------------------------------------------------
 * First: Prev State ki NEED kya hai?
 * ------------------------------------------------------------
 * Jab hum ek hi event (jaise ek click) mein
 * multiple baar state update karte hain,
 * tab React state ko IMMEDIATELY update nahi karta.
 *
 * React state updates ko:
 * 👉 BATCH karta hai (group bana deta hai)
 * 👉 Performance ke liye
 *
 * Is wajah se humein "previous state" ka concept chahiye hota hai.
 */

import { useState } from "react";



/**
 * ------------------------------------------------------------
 * COUNTER 1
 * ------------------------------------------------------------
 * Direct values pass kar rahe hain
 */
const Counter1 = () => {
  const [count, setCount] = useState(0);

  console.log("rendering Counter1");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>

      <button
        onClick={() => {
          setCount(4);
          setCount(9); // 👉 LAST call jeet jaati hai
        }}
      >
        Increase Count
      </button>
    </div>
  );
};

/**
 * 🔍 KYA HUA?
 * - React ne dono updates ko batch kiya
 * - Last update (9) ko final maana
 *
 * ✅ Final output: 9
 */





/**
 * ------------------------------------------------------------
 * COUNTER 2
 * ------------------------------------------------------------
 * count + 1 use kar rahe hain (❌ problem yahin hai)
 */
const Counter2 = () => {
  const [count, setCount] = useState(0);

  console.log("rendering Counter2");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>

      <button
        onClick={() => {
          setCount(count + 1);
          setCount(count + 1); // 👉 dono SAME value use kar rahe hain
        }}
      >
        Increase Count
      </button>
    </div>
  );
};

/**
 * 🔍 KYA HUA?
 * - count ki value abhi bhi OLD hai (0)
 * - dono baar count + 1 = 1
 * - React ne dono ko batch karke ek hi update maana
 *
 * ✅ Final output: 1 (2 nahi!)
 */




/**
 * ------------------------------------------------------------
 * COUNTER 3 (CORRECT WAY – PREV STATE)
 * ------------------------------------------------------------
 * Functional update use kar rahe hain
 */
const Counter3 = () => {
  const [count, setCount] = useState(0);

  console.log("rendering Counter3");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>

      <button
        onClick={() => {
          // ✅ React ko bola: previous value leke update karo
          setCount((previousState) => previousState + 1);

          // ❌ Ye still old count use karega
          setCount(count + 1);
        }}
      >
        Increase Count
      </button>
    </div>
  );
};

const Counter4 = () => { 
  const [count, setCount] = useState(0);

  console.log("rendering Counter3");

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
// final output 3



/* ============================================================
   COUNTER 5 (STRING STATE + PREV STATE)
   ============================================================ */
const Counter5 = () => {
  const [name, setName] = useState("Ayush");

  console.log("rendering Counter5");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{name}</h1>

      <button
        onClick={() => {
          setName((prev) => prev + "!");
          setName((prev) => prev + "!");
          setName((prev) => prev + "!");
        }}
      >
        Update Name
      </button>
    </div>
  );
};

/**
 * OUTPUT:
 * Initial render → Ayush
 * Button click  → Ayush!!!
 *
 * Reason:
 * - prev state har baar latest string deta hai
 * - multiple updates properly apply hoti hain
 */



setCount((previousState) => previousState + 1);

/**
 * ------------------------------------------------------------
 * IMPORTANT RULE (YAAD RAKHO)
 * ------------------------------------------------------------
 *
 * ❌ Jab new state purani state pe depend kare,
 *    tab:
 *    setCount(count + 1) ❌
 *
 * ✅ Hamesha use karo:
 *    setCount(prev => prev + 1)
 *
 * ------------------------------------------------------------
 * KYUN?
 * ------------------------------------------------------------
 * Kyunki:
 * - React state updates async hoti hain
 * - count variable turant update nahi hota
 * - prev state hamesha latest value deta hai
 *
 * ------------------------------------------------------------
 * ONE-LINE INTERVIEW ANSWER
 * ------------------------------------------------------------
 * When the new state depends on the previous state,
 * always use the functional update form of setState.
 */

export { Counter1, Counter2, Counter3 };
