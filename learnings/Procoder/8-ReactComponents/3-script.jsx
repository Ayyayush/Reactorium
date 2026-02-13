// Import React to enable JSX and component creation
import React from "react";

// Import ReactDOM to render React components into the DOM
import ReactDOM from "react-dom/client";

/*
 * Cards Component
 * ----------------
 * This is a functional React component.
 * Component name starts with a CAPITAL letter (rule of React).
 */
const Cards1 = () => {
  return (
    // JSX must return ONE parent element
    <div
      // Inline styles in React are written as a JavaScript object
      style={{
        textAlign: "center",          // Centers the text
        backgroundColor: "#f2f2f2",   // Light gray background
        padding: "20px",              // Space inside the div
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)", // Shadow effect
        borderRadius: "10px",         // Rounded corners
        width: "250px",               // Fixed width
        margin: "20px auto"           // Centers the card horizontally
      }}
    >
      {/* Heading inside the card */}
      <h2>I am a card</h2>

      {/* Paragraph text */}
      <p>I am practicing React</p>
    </div>
  );
};


const Cards2 = () => {
  return (
    // Single parent JSX element (rule of React)
    <div
      className="
        text-center            /* Centers text */
        bg-gray-100             /* Light gray background */
        p-5                     /* Padding */
        shadow-lg               /* Box shadow */
        rounded-lg              /* Rounded corners */
        w-[250px]               /* Fixed width */
        mx-auto                 /* Center horizontally */
        mt-5                    /* Margin from top */
      "
    >
      {/* Card heading */}
      <h2 className="text-xl font-semibold mb-2">
        I am a card
      </h2>

      {/* Card description */}
      <p className="text-gray-600">
        I am practicing React
      </p>
    </div>
  );
};




// Get the root element from index.html
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the Cards component inside the root div
root.render(<Cards1 />);
