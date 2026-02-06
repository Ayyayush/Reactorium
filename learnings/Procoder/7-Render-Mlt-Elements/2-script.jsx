/**
 * ===============================================
 * BASIC TYPE COMPONENT RENDERING (SINGLE PAGE)
 * ===============================================
 *
 * Concepts covered:
 * - Functional component
 * - JSX rendering
 * - Reusing components
 * - Rendering multiple components
 */

import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Card Component
 *
 * - Simple reusable component
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
                textAlign: "center",
                margin: "10px"
            }}
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React Logo"
                style={{ width: "100px" }}
            />

            <h3>React Card</h3>
            <p>Basic component rendering</p>
        </div>
    );
};

/**
 * ===============================================
 * STYLE 1: Rendering multiple components using Array
 * ===============================================
 *
 * - JSX cannot use for-loops
 * - We create an array and map over it
 */
const Container1 = () => {
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {
                Array(10).fill(0).map((_, index) => (
                    <Card key={index} />
                ))
            }
        </div>
    );
};

/**
 * ===============================================
 * STYLE 2: Rendering using data array (BEST PRACTICE)
 * ===============================================
 *
 * - Real-world React approach
 * - Data-driven UI
 */
const courses = [1, 2, 3, 4, 5];

const Container2 = () => {
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {
                courses.map((course, index) => (
                    <Card key={index} />
                ))
            }
        </div>
    );
};

/**
 * Create React root (ONLY ONCE)
 */
const root = ReactDOM.createRoot(
    document.querySelector("#root")
);

/**
 * Render ONE parent component
 */
root.render(<Container2 />);
