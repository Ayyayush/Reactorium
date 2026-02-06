/**
 * ===============================================
 * SYNTAX OF IMPORTING FILES & REACT COMPONENTS
 * FROM NODE_MODULES
 * ===============================================
 *
 * In modern React, we use ES Modules to import
 * files, libraries, and components.
 *
 *
 * ===============================================
 * BASIC IMPORT SYNTAX
 * ===============================================
 *
 * 🔹 Importing React from node_modules
 *
 * Example:
 *   import React from "react";
 *
 * - "react" is a package installed inside node_modules
 * - No path (./ or ../) is used for node_modules imports
 *
 *
 * 🔹 Importing ReactDOM from node_modules
 *
 * Example:
 *   import ReactDOM from "react-dom/client";
 *
 *
 * ===============================================
 * IMPORTING LOCAL FILES / COMPONENTS
 * ===============================================
 *
 * 🔹 Importing a local JS/JSX file
 *
 * Example:
 *   import App from "./App";
 *
 * - "./" means same folder
 * - "../" means parent folder
 *
 *
 * 🔹 Importing a named export
 *
 * Example:
 *   import { add } from "./utils";
 *
 *
 * ===============================================
 * IMPORTING CSS / ASSETS
 * ===============================================
 *
 * 🔹 Importing CSS file
 *
 * Example:
 *   import "./App.css";
 *
 * - Bundler automatically injects CSS into the page
 *
 *
 * 🔹 Importing images
 *
 * Example:
 *   import logo from "./logo.png";
 *
 *
 * ===============================================
 * RULES OF IMPORTING (VERY IMPORTANT)
 * ===============================================
 *
 * 1️⃣ Node modules imports DO NOT use file paths
 *
 * ✅ Correct:
 *   import React from "react";
 *
 * ❌ Wrong:
 *   import React from "./react";
 *
 *
 * 2️⃣ Local files MUST use relative paths
 *
 * ✅ Correct:
 *   import App from "./App";
 *
 * ❌ Wrong:
 *   import App from "App";
 *
 *
 * 3️⃣ Default export can be imported with ANY name
 *
 * Example:
 *   export default function App() {}
 *
 *   import MyComponent from "./App";
 *
 *
 * 4️⃣ Named exports MUST use same name
 *
 * Example:
 *   export function add() {}
 *
 *   import { add } from "./utils";
 *
 *
 * 5️⃣ File extensions are OPTIONAL (mostly)
 *
 * Example:
 *   import App from "./App";
 *   import App from "./App.jsx";
 *
 *
 * 6️⃣ Imports are ALWAYS at the top of the file
 *
 * ❌ Invalid:
 *   if (true) {
 *       import App from "./App";
 *   }
 *
 *
 * ===============================================
 * WHY THESE RULES EXIST
 * ===============================================
 *
 * 🔹 Browser limitations
 *
 * - Browsers need a clear dependency graph
 * - Imports must be static and predictable
 *
 *
 * 🔹 Bundler optimization
 *
 * - Bundlers analyze imports at build time
 * - Enables:
 *   • Tree shaking
 *   • Code splitting
 *   • Faster builds
 *
 *
 * 🔹 Performance & consistency
 *
 * - Static imports allow:
 *   • Better caching
 *   • Faster loading
 *   • Fewer runtime errors
 *
 *
 * ===============================================
 * ONE-LINE REVISION
 * ===============================================
 *
 * Node modules are imported by package name,
 * local files use relative paths,
 * and strict import rules help bundlers optimize apps.
 */
