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
 * usestae agar 0 se inilize h toh baar baar render hone pe 0 hi kyun nhi maan leta old value
 * toh ska answe h ki usestae chizen yaad rakhta h 
 * 
 * closures ka joconcept h uskouse kre 
 * 
 * whatis closures 
 * 
 * ek aur chz h man lo hum uestae ke action ko updae kre aur rint kare 
 * toh wo update hoga 
 * par component udpate nhi hoga
 * agar cmpoent update kraa h oth setAction use krna hi hoga 
 * 
 * agarmaan lo ek h click pe 
 * multile times setacin kr rhe h
 * toh ek baar hi hoga 
 * 
 * aagr component ko mu;iple times karan h update toh hum usko aage padnge 
 * 
 */