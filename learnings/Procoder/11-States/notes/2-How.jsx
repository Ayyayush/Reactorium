/**
 * How does State work in React?
 *
 * State in React works as a **trigger mechanism** for re-rendering
 * the UI whenever data changes.
 *
 * ------------------------------------------------------------
 * Step-by-Step Working of State:
 * ------------------------------------------------------------
 *
 * 1️⃣ State is CREATED inside a component
 * ------------------------------------------------------------
 * State is defined so React can track changing data.
 *
 * Example (conceptual):
 * state = { count: 0 }
 *
 * ------------------------------------------------------------
 * 2️⃣ State value is USED inside JSX
 * ------------------------------------------------------------
 * State is read inside the render output.
 *
 * Example:
 * <h1>{count}</h1>
 *
 * This tells React:
 * “This UI depends on state.”
 *
 * ------------------------------------------------------------
 * 3️⃣ State is UPDATED using React’s method
 * ------------------------------------------------------------
 * State must be updated using:
 * - setState()  (class component)
 * - setCount()  (hooks)
 *
 * ❌ Direct update is NOT allowed:
 * state.count = 5;
 *
 * ------------------------------------------------------------
 * 4️⃣ React DETECTS the state change
 * ------------------------------------------------------------
 * When state update method is called,
 * React marks the component as “dirty”.
 *
 * ------------------------------------------------------------
 * 5️⃣ React RE-RENDERS the component
 * ------------------------------------------------------------
 * React re-runs the component function
 * (or render method in class component).
 *
 * JSX is executed again.
 *
 * ------------------------------------------------------------
 * 6️⃣ Virtual DOM is UPDATED
 * ------------------------------------------------------------
 * A new Virtual DOM tree is created
 * based on the updated state.
 *
 * ------------------------------------------------------------
 * 7️⃣ Diffing happens (Old vs New Virtual DOM)
 * ------------------------------------------------------------
 * React compares:
 * - Previous Virtual DOM
 * - New Virtual DOM
 *
 * Finds ONLY what changed.
 *
 * ------------------------------------------------------------
 * 8️⃣ Real DOM is UPDATED efficiently
 * ------------------------------------------------------------
 * React updates only the changed nodes
 * in the real browser DOM.
 *
 * This makes React very fast.
 *
 * ------------------------------------------------------------
 * IMPORTANT RULES ABOUT STATE:
 * ------------------------------------------------------------
 * - State updates are asynchronous.
 * - State updates cause re-render.
 * - Never mutate state directly.
 * - State is local to the component.
 *
 * ------------------------------------------------------------
 * Interview One-Liner:
 * ------------------------------------------------------------
 * State works in React by triggering re-rendering; when state
 * changes, React updates the Virtual DOM, diffs it, and efficiently
 * updates only the necessary parts of the real DOM.
 */











/**
 * useState agar 0 se initialize hota hai,
 * toh baar-baar render hone par 0 hi kyun nahi ban jaata?
 *
 * ------------------------------------------------------------
 * Answer (Simple Hinglish):
 * ------------------------------------------------------------
 * Kyunki useState **value ko yaad rakhta hai**.
 *
 * React aisa nahi karta ki har render pe
 * useState(0) dobara se fresh start ho jaaye.
 *
 * React pehli baar:
 * 👉 state initialize karta hai
 * 👉 uske baad value ko preserve (yaad) rakhta hai
 *
 * Isliye:
 * - First render  → state = 0
 * - Next render   → state = purani value (updated one)
 *
 * ------------------------------------------------------------
 * Ye kaise possible hota hai?
 * ------------------------------------------------------------
 * Iske peeche **Closures** ka concept use hota hai.
 *
 * ------------------------------------------------------------
 * What is Closure? (Beginner Hinglish)
 * ------------------------------------------------------------
 * Closure ka matlab hota hai:
 *
 * 👉 Ek function apne bahar ke variables ko
 *    "yaad" rakh sakta hai, even after function execute ho chuka ho.
 *
 * Simple example:
 *
 * function outer() {
 *   let x = 10;
 *   return function inner() {
 *     console.log(x);
 *   }
 * }
 *
 * inner function, x ko yaad rakhta hai.
 *
 * React useState bhi isi concept ka use karta hai.
 *
 * 
 * 
 * 
 * ------------------------------------------------------------
 * useState + Closure ka relation
 * ------------------------------------------------------------
 * React internally state ko aise store karta hai
 * ki next render pe bhi purani value available rahe.
 *
 * Isliye:
 * useState(0) har render pe reset nahi hota.
 *
 * ------------------------------------------------------------
 * Important point (VERY IMPORTANT):
 * ------------------------------------------------------------
 * Agar hum sirf value update karein aur print karein:
 *
 * action = action + 1;
 * console.log(action);
 *
 * 👉 Value update ho jaayegi (JS level pe)
 * ❌ Par component re-render nahi hoga
 *
 * ------------------------------------------------------------
 * Component ko update (re-render) karne ke liye
 * ------------------------------------------------------------
 * ❗ setAction() use karna hi padega
 *
 * Example:
 * setAction(action + 1);
 *
 * Kyunki:
 * 👉 React sirf STATE UPDATE ko hi observe karta hai
 *
 * ------------------------------------------------------------
 * Ek aur important baat:
 * ------------------------------------------------------------
 * Agar ek hi click mein
 * multiple times setAction call karein:
 *
 * setAction(action + 1);
 * setAction(action + 1);
 * setAction(action + 1);
 *
 * 👉 React unko BATCH kar deta hai
 * 👉 Final result ek baar hi update hota hai
 *
 * Reason:
 * - Performance optimization
 * - Unnecessary re-renders se bachna
 *
 * ------------------------------------------------------------
 * Agar component ko multiple times update karna ho
 * ------------------------------------------------------------
 * Toh uske liye React ek special pattern deta hai
 * (functional updates / advanced concepts)
 *
 * 👉 Ye hum aage padhenge
 *
 * ------------------------------------------------------------
 * One-line Summary:
 * ------------------------------------------------------------
 * useState apni value ko closures ke through yaad rakhta hai,
 * aur sirf setState / setAction ke through hi React component
 * ko re-render karta hai.
 */
