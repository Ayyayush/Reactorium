/**
 * React Component
 *
 * A React Component is the **basic building block** of a React application.
 * It represents a **reusable, independent piece of UI** that controls
 * how a part of the screen looks and behaves.
 *
 * ------------------------------------------------------------
 * What a React Component Does:
 * ------------------------------------------------------------
 * 1. Returns JSX (JavaScript + HTML-like syntax) that is rendered on the UI.
 * 2. Can accept data from parent components using **props**.
 * 3. Can manage its own data using **state**.
 * 4. Re-renders automatically when its state or props change.
 *
 * ------------------------------------------------------------
 * Types of React Components:
 * ------------------------------------------------------------
 * 1. Functional Components (Recommended & Most Used)
 *    - Written as JavaScript functions.
 *    - Use React Hooks like useState, useEffect.
 *    - Easier to read, write, and test.
 *
 * 2. Class Components (Legacy / Older Style)
 *    - Written using ES6 classes.
 *    - Use lifecycle methods instead of hooks.
 *    - Mostly avoided in modern React.
 *
 * ------------------------------------------------------------
 * Props (Properties):
 * ------------------------------------------------------------
 * - Props are **read-only** data passed from parent to child component.
 * - Used to make components dynamic and reusable.
 * - Example: <User name="Treddy" />
 *
 * ------------------------------------------------------------
 * State:
 * ------------------------------------------------------------
 * - State is **internal data** managed by the component itself.
 * - When state changes, React automatically re-renders the component.
 * - Used for dynamic UI (counter, form input, toggle, etc.).
 *
 * ------------------------------------------------------------
 * Important Rules:
 * ------------------------------------------------------------
 * - Component name must start with a **Capital Letter**.
 * - A component must return **one parent JSX element**.
 * - Components should follow **single responsibility principle**.
 * - JSX must be returned using a return statement.
 *
 * ------------------------------------------------------------
 * Real-World Examples of Components:
 * ------------------------------------------------------------
 * - Header
 * - Footer
 * - Navbar
 * - Button
 * - Card
 * - Modal
 *
 * ------------------------------------------------------------
 * One-Line Definition (Interview Ready):
 * ------------------------------------------------------------
 * A React Component is a reusable JavaScript function or class
 * that returns JSX to describe a part of the user interface.
 *
 */

// example 
function Hello() {
  return <h1>Hello React</h1>;
}
export default Hello;


import Hello from "./Hello";

function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

export default App;
