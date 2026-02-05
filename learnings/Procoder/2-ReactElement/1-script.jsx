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
  null,
  heading,
  button
);

// Render
ReactDOM.render(
  container,
  document.getElementById("root")
);
