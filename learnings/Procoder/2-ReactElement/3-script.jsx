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





// Super nested parent wrapper
const container = React.createElement(
  "div",                                    // level 1
  { className: "container", id: "container" },
  [
    React.createElement(
      "section",                            // level 2
      { className: "section" },
      [
        React.createElement(
          "div",                            // level 3
          { className: "card" },
          [
            React.createElement(
              "header",                     // level 4
              { className: "card-header" },
              heading                       // reused heading
            ),
            React.createElement(
              "main",                       // level 4
              { className: "card-body" },
              [
                React.createElement(
                  "p",                      // level 5
                  null,
                  "This is deeply nested React UI"
                ),
                button                      // reused button
              ]
            ),
            React.createElement(
              "footer",                     // level 4
              { className: "card-footer" },
              "Footer Text"
            )
          ]
        )
      ]
    )
  ]
);




// React 18+ root creation
const root = ReactDOM.createRoot(
  document.getElementById("root")
);

// Render the UI
root.render(container);
