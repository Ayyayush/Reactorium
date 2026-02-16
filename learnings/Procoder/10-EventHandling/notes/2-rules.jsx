/**
 * Rules of Event Handling in React
 *
 * Let’s understand some IMPORTANT rules of event handling in React
 * in a very clear and beginner-friendly way.
 *
 * ------------------------------------------------------------
 * 1️⃣ Events are applied on ELEMENTS, not on COMPONENTS
 * ------------------------------------------------------------
 *
 * ❌ WRONG:
 * <Button onClick={handleClick} />
 *
 * ✔ This does NOT attach an event directly.
 * Here, `onClick` is just a normal prop.
 *
 * ✅ CORRECT:
 * <button onClick={handleClick}>Click</button>
 *
 * Events like `onClick` must be attached to
 * actual HTML elements (button, div, input, etc.).
 *
 * ------------------------------------------------------------
 * 2️⃣ When event is written on a COMPONENT,
 *     it is passed as a PROP
 * ------------------------------------------------------------
 *
 * Example:
 * <Button clickHandler={handleClick} />
 *
 * Here:
 * - `clickHandler` is NOT an event
 * - It is just a prop
 *
 * Inside Button:
 * <button onClick={clickHandler}></button>
 *
 * The real event is attached HERE.
 *
 * ------------------------------------------------------------
 * 3️⃣ You can write function directly on the element
 * ------------------------------------------------------------
 *
 * <button onClick={() => console.log("Clicked")}>
 *   Click
 * </button>
 *
 * ✔ This is allowed
 * ❌ But not recommended for big logic
 *
 * ------------------------------------------------------------
 * 4️⃣ For bigger code, pass FUNCTION REFERENCE
 * ------------------------------------------------------------
 *
 * ✔ Good practice:
 * const handleClick = () => {
 *   console.log("Clicked");
 * };
 *
 * <button onClick={handleClick}>Click</button>
 *
 * Reason:
 * - Code is clean
 * - Easy to read
 * - Easy to debug
 *
 * ------------------------------------------------------------
 * 5️⃣ Event handlers must be written in camelCase
 * ------------------------------------------------------------
 *
 * ❌ onclick
 * ❌ ONCLICK
 * ✔ onClick
 *
 * React uses camelCase for all events.
 *
 * ------------------------------------------------------------
 * 6️⃣ UI will NOT update without STATE
 * ------------------------------------------------------------
 *
 * If you only use normal variables:
 * let count = 0;
 *
 * And update them on click,
 * ❌ React will NOT re-render.
 *
 * ------------------------------------------------------------
 * 7️⃣ Why UI does not update without state
 * ------------------------------------------------------------
 *
 * Reason:
 * - React re-renders ONLY when state changes
 * - Normal variables are ignored by React
 *
 * That is why in the apple counter example,
 * the UI did not change.
 *
 * ------------------------------------------------------------
 * 8️⃣ Why we need Hooks
 * ------------------------------------------------------------
 *
 * Hooks (like useState) allow us to:
 * - Create state
 * - Update state
 * - Trigger re-render
 *
 * Without learning hooks (or class state),
 * dynamic UI is NOT possible.
 *
 * ------------------------------------------------------------
 * Interview One-Liner:
 * ------------------------------------------------------------
 * In React, events are attached to elements, logic is passed
 * through props, and UI updates only happen through state changes.
 */
