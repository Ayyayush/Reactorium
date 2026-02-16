/**
 * Today we will be studying Event Handling in React
 *
 * In React, event handling works **almost the same as JavaScript**,
 * but with a **small syntax change**.
 *
 * ------------------------------------------------------------
 * Basic Idea:
 * ------------------------------------------------------------
 * - Events are actions like click, hover, key press, etc.
 * - React listens to these events and runs a function.
 * - We DO NOT use addEventListener in React.
 *
 * ------------------------------------------------------------
 * JavaScript vs React (Difference):
 * ------------------------------------------------------------
 *
 * JavaScript:
 * element.addEventListener("click", function () {
 *   console.log("Clicked");
 * });
 *
 * React:
 * <button onClick={handleClick}></button>
 *
 * ------------------------------------------------------------
 * Important Syntax Rule:
 * ------------------------------------------------------------
 * - Event names are written in **camelCase**
 * - We pass a **function reference**, not a function call
 *
 * Correct:
 * <h1 onClick={handleClick}></h1>
 *
 * Wrong:
 * <h1 onClick={handleClick()}></h1>
 *
 * ------------------------------------------------------------
 * Example Using h1 Tag:
 * ------------------------------------------------------------
 * Maan lo h1 tag mein click karna hai,
 * toh React mein bilkul JavaScript jaisa hi hota hai,
 * bas syntax thoda change ho jaata hai.
 *
 * <h1 onClick={handleClick}>Hello</h1>
 *
 * ------------------------------------------------------------
 * Using Apple Counter Example:
 * ------------------------------------------------------------
 * - Button click event will move apples.
 * - Event function will update data (later using state).
 * - UI will automatically re-render.
 *
 * Example:
 * <Button onClick={moveRight} />
 *
 * ------------------------------------------------------------
 * Common React Events:
 * ------------------------------------------------------------
 * - onClick
 * - onChange
 * - onSubmit
 * - onMouseEnter
 * - onKeyDown
 *
 * ------------------------------------------------------------
 * Key Points to Remember:
 * ------------------------------------------------------------
 * - React uses Synthetic Events (cross-browser safe).
 * - No direct DOM manipulation.
 * - Events are attached directly in JSX.
 *
 * ------------------------------------------------------------
 * Interview One-Liner:
 * ------------------------------------------------------------
 * Event handling in React is done by attaching camelCase event
 * handlers directly to JSX elements using function references.
 */
/**
 * What are Synthetic Events?
 *
 * In React, **Synthetic Events** are a wrapper around the browser’s
 * native events. React creates its own event system so that
 * events work **the same way in all browsers**.
 *
 * ------------------------------------------------------------
 * Why React Uses Synthetic Events:
 * ------------------------------------------------------------
 * - Different browsers handle events differently.
 * - React normalizes these differences.
 * - Gives a consistent API for all events.
 *
 * In short:
 * 👉 Synthetic Event = React’s cross-browser event object
 *
 * ------------------------------------------------------------
 * Important Points:
 * ------------------------------------------------------------
 * - Synthetic events are pooled (older versions of React).
 * - Event object is reused for performance.
 * - Works exactly like normal JS events (e.target, e.type, etc.).
 *
 * ------------------------------------------------------------
 * Example:
 * ------------------------------------------------------------
 * function handleClick(event) {
 *   console.log(event.target);
 * }
 *
 * <button onClick={handleClick}>Click</button>
 *
 * Here `event` is a **SyntheticEvent**, not a native event.
 *
 * ------------------------------------------------------------
 * Most Commonly Used Event Handling Syntax in React:
 * ------------------------------------------------------------
 *
 * 1️⃣ Click Event
 * ------------------------------------------------------------
 * <button onClick={handleClick}>Click Me</button>
 *
 * 2️⃣ Input Change Event
 * ------------------------------------------------------------
 * <input onChange={handleChange} />
 *
 * 3️⃣ Form Submit Event
 * ------------------------------------------------------------
 * <form onSubmit={handleSubmit}></form>
 *
 * 4️⃣ Mouse Events
 * ------------------------------------------------------------
 * <div onMouseEnter={handleEnter}></div>
 * <div onMouseLeave={handleLeave}></div>
 *
 * 5️⃣ Keyboard Events
 * ------------------------------------------------------------
 * <input onKeyDown={handleKeyDown} />
 *
 * ------------------------------------------------------------
 * JavaScript vs React Syntax:
 * ------------------------------------------------------------
 *
 * JavaScript:
 * element.addEventListener("click", handler);
 *
 * React:
 * <button onClick={handler}></button>
 *
 * ------------------------------------------------------------
 * Interview One-Liner:
 * ------------------------------------------------------------
 * Synthetic events are React’s cross-browser wrapper around
 * native browser events to provide consistent behavior.
 */
