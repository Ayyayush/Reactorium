/**
 * ===============================
 * JSX CONTAINER ELEMENT
 * ===============================
 *
 * This JSX demonstrates:
 * - Nested JSX structure
 * - className & id usage
 * - Inline styling in JSX
 * - Forms and inputs
 * - Rendering JSX to the DOM
 */

// JSX element stored in a JavaScript variable
const container = (
  // Root JSX element (single parent rule)
  <div className="container" id="container">

    {/* -------- Section 1 -------- */}
    <section>
      {/* Normal paragraph */}
      <p>The library for web and native user interfaces</p>

      {/* 
        Image in JSX
        - src works same as HTML
        - style is an OBJECT (not a string)
        - camelCase property names
      */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        style={{
          width: 200,              // number = px by default
          backgroundColor: "teal", // camelCase instead of background-color
          borderRadius: 8,
          padding: 16,
        }}
      />
    </section>

    {/* -------- Section 2 -------- */}
    <section>

      {/* HTML form written in JSX */}
      <form>

        {/* Input group for username */}
        <div className="input-group">

          {/* 
            htmlFor is used instead of 'for'
            because 'for' is a reserved keyword in JS
          */}
          <label htmlFor="username">Username</label>

          {/* Input field */}
          <input id="username" />
        </div>

        {/* Input group for password */}
        <div className="input-group">
          <label htmlFor="password">Password</label>

          {/* Password input */}
          <input id="password" type="password" />
        </div>

      </form>
    </section>

  </div>
);

/**
 * container is NOT HTML
 * It is a React element (JavaScript object)
 */
console.log(container);

/* ===============================
   REACT DOM RENDERING
   =============================== */

// Create React root (ONLY ONCE)
const root = ReactDOM.createRoot(
  document.querySelector("#root")
);

// Render the JSX element into the DOM
root.render(container);
