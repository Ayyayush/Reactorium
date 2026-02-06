/**
 * ===============================================
 * BASIC TYPE COMPONENT RENDERING (SINGLE PAGE)
 * ===============================================
 *
 * This example shows:
 * - Functional component
 * - JSX rendering
 * - Inline styling
 * - Rendering component to root
 */

import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Card Component
 *
 * - React component is just a JavaScript function
 * - Function name starts with CAPITAL letter
 * - Returns JSX
 */
const Card = () => {
    return (
        <div
            className="cards"
            style={{
                border: "1px solid #ccc",
                padding: "16px",
                width: "200px",
                textAlign: "center"
            }}
        >
            {/* Image tag is self-closing in JSX */}
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React Logo"
                style={{
                    width: "100px",
                    marginBottom: "10px"
                }}
            />

            <h3>React Card</h3>
            <p>Basic component rendering</p>
        </div>
    );
};


// rendering the cardmultiple times style 1 
const container1=()=>
{
    {
        for(let i=0;i<10;i++)
        {
{<Card/>}
        }
    }
    
}








/**
 * Create React root (ONLY ONCE)
 */
const root = ReactDOM.createRoot(
    document.querySelector("#root")
);

/**
 * Render component
 *
 * <Card /> means:
 * - Call Card function
 * - Render the JSX it returns
 */
root.render(<Card />);
