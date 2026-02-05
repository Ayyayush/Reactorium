/**
 * Basic JSX Syntax
 *
 * - JSX HTML jaisa dikhta hai
 * - Par internally ye JavaScript hi hota hai
 */

// JSX elements
const element1 = <h1>Hello JSX 👋</h1>;

const element2 = (
    <h2 className="title" id="main-heading">
        Welcome to JSX
    </h2>
);

const name = "React";
const year = 2026;

const element3 = (
    <h1>
        Learning {name} in {year}
    </h1>
);

// ✅ Single parent element (JSX rule)
const finalElement = (
    <div>
        {element1}
        {element2}
        {element3}
    </div>
);

// React root create karna (ONLY ONCE)
const root = ReactDOM.createRoot(
    document.getElementById("root")
);

// Final JSX render
root.render(finalElement);
