// Click handler function
function handleClick() {
  alert("Button clicked!");
}

// Heading element
const heading = React.createElement(
  "h1",
  { className: "title" },
  "Hello React"
);

// Button element with onClick event
const button = React.createElement(
  "button",
  {
    className: "btn",
    onClick: handleClick
  },
  "Click me"
);

// Parent wrapper
const container = React.createElement(
  "div",
  { className: "container", id: "container" },
  [
    heading,
    button
  ] // 👈 children as ARRAY
);



// React 18+ root creation
const root = ReactDOM.createRoot(
  document.getElementById("root")
);

// Render the UI
root.render(container);
