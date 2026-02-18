/**
 * States
 *
 * ------------------------------------------------------------
 * What are States in React?
 * ------------------------------------------------------------
 * State is a **special object** in React that stores data
 * which can **change over time** and affects what is shown
 * on the screen (UI).
 *
 * State is managed by React, not by normal JavaScript.
 *
 * Example:
 * - Counter value
 * - Number of apples in a basket
 * - Input field value
 * - Toggle (true / false)
 *
 * ------------------------------------------------------------
 * Why is State used?
 * ------------------------------------------------------------
 * State is used because:
 * ✔ UI needs to change when data changes
 * ✔ React needs to know WHEN to re-render a component
 *
 * In simple words:
 * 👉 If data changes and UI should update → use STATE
 *
 * ------------------------------------------------------------
 * What if we don’t use State?
 * ------------------------------------------------------------
 * If we use normal variables like:
 *
 * let count = 0;
 * count++;
 *
 * Then:
 * ❌ React will NOT re-render
 * ❌ UI will NOT update
 *
 * Because React does NOT track normal variables.
 *
 * ------------------------------------------------------------
 * Why React doesn’t re-render if we don’t use State?
 * ------------------------------------------------------------
 * React re-renders a component ONLY when:
 * ✔ State changes
 * ✔ Props change
 *
 * Normal variables:
 * - Are invisible to React
 * - Do not trigger re-render
 *
 * That’s why in the apple counter example,
 * apple count changed in code but NOT on screen.
 *
 * ------------------------------------------------------------
 * What warning comes in browser console if we don’t use State?
 * ------------------------------------------------------------
 * IMPORTANT:
 * ❌ React does NOT show any warning or error
 *
 * The code runs perfectly fine,
 * but the UI does not update.
 *
 * This makes beginners confused, but it is expected behavior.
 *
 * ------------------------------------------------------------
 * Does React update its components automatically?
 * ------------------------------------------------------------
 * ❌ NO — React does NOT update components automatically
 *
 * ✔ React updates components ONLY when:
 * - State changes
 * - Props change
 *
 * React does NOT watch:
 * - Normal variables
 * - Direct DOM changes
 *
 * ------------------------------------------------------------
 * “React mein jo value update hoti hai wahi render hoti hai”
 * ------------------------------------------------------------
 * This statement is PARTLY true.
 *
 * Correct version:
 * 👉 React renders ONLY the values that are part of
 *    state or props.
 *
 * If a value updates but is NOT in state or props,
 * React will ignore it.
 *
 * ------------------------------------------------------------
 * How does React use Virtual DOM?
 * ------------------------------------------------------------
 * React does NOT directly update the real browser DOM.
 *
 * Instead:
 * 1️⃣ React creates a Virtual DOM (copy of real DOM)
 * 2️⃣ When state changes, a NEW Virtual DOM is created
 * 3️⃣ React compares old vs new Virtual DOM (diffing)
 * 4️⃣ Only the changed part is updated in real DOM
 *
 * This process is called:
 * 👉 Reconciliation
 *
 * ------------------------------------------------------------
 * What is Virtual DOM?
 * ------------------------------------------------------------
 * Virtual DOM is a **lightweight JavaScript object**
 * that represents the real DOM structure.
 *
 * It is:
 * ✔ Faster
 * ✔ Lightweight
 * ✔ Efficient
 *
 * React uses Virtual DOM to:
 * - Improve performance
 * - Minimize real DOM updates
 *
 * ------------------------------------------------------------
 * Final Interview One-Liner:
 * ------------------------------------------------------------
 * State is React’s way of managing dynamic data; only state
 * and props changes trigger re-rendering, which React efficiently
 * handles using the Virtual DOM.
 */
