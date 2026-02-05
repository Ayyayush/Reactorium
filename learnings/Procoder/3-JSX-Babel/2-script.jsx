// Example 1: JSX with div (single parent)
const element1 = (
    <div>
        <h1>Hello JSX</h1>
        <p>This is a paragraph</p>
        <button>Click Me</button>
    </div>
);

// Example 2: JSX Fragment (no extra div)
const element2 = (
    <>
        <h1>Fragment Example</h1>
        <p>No extra div added</p>
    </>
);

// Example 3: JSX Inline Styling
const element3 = (
    <h1 style={{ color: "blue", backgroundColor: "lightgray" }}>
        Inline Style in JSX
    </h1>
);

// Combine all into ONE parent (JSX rule)
const finalElement = (
    <div>
        {element1}
        {element2}
        {element3}
    </div>
);

// Create root ONLY ONCE
const root = ReactDOM.createRoot(
    document.getElementById("root")
);

// Render ONLY ONE element
root.render(finalElement);
