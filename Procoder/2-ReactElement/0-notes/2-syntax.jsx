/**
 * React.createElement
 *
 * Ye React ka core method hai jo UI element create karta hai
 *
 * Syntax:
 * React.createElement(type, props, children)
 *
 * Parameters:
 * - type     → HTML tag ya React component (e.g. "div", "h1")
 * - props    → attributes / properties (null bhi ho sakta hai)
 * - children → jo DOM ke andar dikhega (text ya aur elements)
 */


// React.createElement syntax

// (or simply React Element API / React API syntax)
// Example:
const heading = React.createElement(
    "h1",                   // type
    { className: "title" }, // props
    "Hello React"           // children
);


// ❌ React khud browser pe render nahi karta
// ✅ Browser pe dikhane ke liye ReactDOM use hota hai

// Parent element (wrapper)
const container = React.createElement(
  "div",                     // parent type
  null,                      // no props
  heading,                   // child 1
  button                     // child 2
);

// Render ONLY ONE element
ReactDOM.render(
  container,                 // single React element
  document.getElementById("root")
);



// React 18 mein root banana padta hai

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

// Root ke through hi render hota hai
root.render(heading);




// ye saari chien aasan ho jayeg aur hi jsx use krne pe 