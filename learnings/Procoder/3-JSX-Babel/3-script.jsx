/**
 * ===============================
 * JSX RENDERING – COMPLETE EXAMPLE
 * ===============================
 *
 * This file demonstrates:
 * 1. Conditional Rendering
 * 2. List Rendering using map()
 * 3. JSX Components
 * 4. Single Parent Rule
 * 5. Why {} are used in JSX
 */

/* --------------------------------------------------
   1️⃣ CONDITIONAL RENDERING
-------------------------------------------------- */

// Normal JavaScript variable
const isLoggedIn = true;

// JSX element with conditional rendering
const conditionElement = (
    <h1>
        {/* JSX comments are written inside curly braces */}

        {/* {} means: "andar JavaScript likhi hui hai" */}
        {/* Ternary operator is a JS expression */}
        {isLoggedIn ? "Welcome Back 👋" : "Please Login"}
    </h1>
);

/* --------------------------------------------------
   2️⃣ LIST RENDERING USING map()
-------------------------------------------------- */

// JavaScript array
const fruits = ["Apple", "Banana", "Mango"];

// JSX list element
const listElement = (
    <ul>
        {
            /* {} tells JSX that JavaScript code is written inside */

            fruits.map((fruit) => (
                /*
                 * map() runs once for each array item
                 * fruit = current element of the array
                 */

                <li
                    key={fruit}        /* key helps React identify list items */
                >
                    {fruit}            {/* Displays the value on UI */}
                </li>
            ))
        }
    </ul>
);

/* --------------------------------------------------
   3️⃣ JSX COMPONENT
-------------------------------------------------- */

// A simple functional component
function App() {
    return <h1>This is a JSX Component</h1>;
}

/* --------------------------------------------------
   4️⃣ COMBINING EVERYTHING
-------------------------------------------------- */

// React can render ONLY ONE root element
// So all JSX blocks are wrapped inside one parent <div>
const finalElement = (
    <div>
        {conditionElement}   {/* Rendering JSX variable */}
        {listElement}        {/* Rendering JSX list */}
        <App />              {/* Rendering component */}
    </div>
);

/* --------------------------------------------------
   5️⃣ REACT ROOT & RENDERING
-------------------------------------------------- */

// createRoot() is called ONLY ONCE
const root = ReactDOM.createRoot(
    document.getElementById("root")
);

// render() accepts ONLY ONE JSX element
root.render(finalElement);
