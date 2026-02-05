/**
 * =====================================================
 * SOURCE MAP FILE (.map) – INTERNAL WORKING & DESCRIPTION
 * =====================================================
 *
 * 
 * 🔹 Why Source Map files are needed internally?
 *
 * During build:
 * - Babel converts JSX → JavaScript
 * - Bundlers minify, rename variables, and merge files
 *
 * Result:
 * - Line numbers change
 * - Variable names change
 * - Original file structure is lost
 *
 * Source maps preserve the relationship between:
 *   compiled code ↔ original source code
 *
 *
 * 
 * 🔹 What is inside a Source Map file?
 *
 * A source map is a JSON file containing:
 *
 * - version      → source map version
 * - file         → generated file name
 * - sources      → list of original source files
 * - names        → original variable/function names
 * - mappings     → encoded mapping data (core logic)
 *
 *
 * 🔹 Internal Working (Step-by-Step)
 *
 * 1️⃣ Developer writes JSX / modern JS
 *
 * 2️⃣ Babel / Bundler compiles the code
 *    - JSX → React.createElement
 *    - ES6+ → ES5
 *
 * 3️⃣ At the same time, a source map is generated
 *    - Every line & column in compiled code
 *      is mapped to original source
 *
 * 4️⃣ Compiled JS file contains a reference:
 *
 *    //# sourceMappingURL=main.js.map
 *
 * 5️⃣ Browser DevTools reads this reference
 *
 * 6️⃣ DevTools loads the .map file
 *
 * 7️⃣ Errors, breakpoints, and stack traces
 *    are translated back to original source code
 *
 *
 * 🔹 How browser uses Source Maps internally?
 *
 * - Browser never executes source maps
 * - Browser executes ONLY compiled JavaScript
 *
 * - Source maps are used ONLY by DevTools
 *   for debugging purposes
 *
 * - When an error occurs:
 *   compiled line → mapped → original source line
 *
 *
 * 🔹 Example (Internal Perspective)
 *
 * Compiled JS error:
 *   main.js:1:4520
 *
 * Source map translates it to:
 *   App.jsx:14
 *
 * Developer sees:
 * - Original JSX
 * - Original variable names
 *
 *
 * 🔹 Source Maps in Development vs Production
 *
 * Development:
 * - Full source maps enabled
 * - Easy debugging
 * - Larger bundle size
 *
 * Production:
 * - Source maps may be:
 *   • Disabled (security reasons)
 *   • Hidden
 *   • Uploaded to error tracking tools (Sentry)
 *
 *
 * 🔹 Security Concern
 *
 * - Source maps expose original source code
 * - Can reveal business logic
 * - Hence often disabled in production
 *
 *
 * 🔹 Tools that generate Source Maps
 *
 * - Babel
 * - Webpack
 * - Vite
 * - CRA (Create React App)
 *
 *
 * 🔑 Final One-line Summary
 *
 * A source map file is a bridge that allows browsers to
 * map compiled JavaScript back to the original source code
 * for accurate debugging without affecting execution.
 */
