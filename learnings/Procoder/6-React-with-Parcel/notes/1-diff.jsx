/**
 * ===============================
 * WHAT ARE BUNDLERS
 * ===============================
 *
 * 🔹 Definition:
 *
 * Bundlers are tools that take multiple files
 * (JavaScript, JSX, CSS, images, etc.)
 * and combine them into one or more optimized files
 * that the browser can understand.
 *
 * In simple words:
 * - Browser ek hi file easily load karta hai
 * - Bundler alag-alag files ko ek bundle bana deta hai
 *
 *
 * 🔹 Why bundlers are needed?
 *
 * - Browsers cannot efficiently handle:
 *   • Hundreds of JS files
 *   • JSX
 *   • ES6 modules directly (in older browsers)
 *
 * - Bundlers help by:
 *   • Combining files
 *   • Optimizing code
 *   • Improving performance
 *
 *
 * ===============================
 * DIFFERENCE BETWEEN
 * WEBPACK, PARCEL, VITE, CRA
 * ===============================
 *
 * 🔹 Webpack
 *
 * - Most powerful and configurable bundler
 * - Requires manual configuration
 * - Steep learning curve
 * - Used in large enterprise projects
 *
 *
 * 🔹 Parcel
 *
 * - Zero-configuration bundler
 * - Automatically handles:
 *   • Babel
 *   • CSS
 *   • Assets
 * - Very easy to learn
 * - Great for beginners
 *
 *
 * 🔹 Vite
 *
 * - Modern build tool
 * - Uses ES Modules in development
 * - Extremely fast
 * - Minimal configuration
 * - Preferred for modern React apps
 *
 *
 * 🔹 Create React App (CRA)
 *
 * - React boilerplate tool (not a bundler itself)
 * - Internally uses Webpack
 * - Zero-config but less flexible
 * - Slower compared to Vite
 *
 *
 * ===============================
 * SUMMARY TABLE (MENTAL MODEL)
 * ===============================
 *
 * Webpack → Powerful but complex
 * Parcel  → Simple and beginner-friendly
 * Vite    → Fast and modern
 * CRA     → Setup tool using Webpack
 *
 *
 * ===============================
 * DIFFERENCE BETWEEN
 * BABEL AND BUNDLERS
 * ===============================
 *
 * 🔹 Babel
 *
 * - Babel is a transpiler
 * - Converts:
 *   • JSX → JavaScript
 *   • ES6+ → ES5
 * - Does NOT bundle files
 * - Does NOT optimize assets
 *
 *
 * 🔹 Bundlers
 *
 * - Combine multiple files into bundles
 * - Optimize code
 * - Handle assets (CSS, images)
 * - Often use Babel internally
 *
 *
 * 🔑 Key Difference:
 *
 * Babel changes SYNTAX
 * Bundlers manage FILES
 *
 *
 * ===============================
 * DIFFERENCE BETWEEN
 * IMPORT / EXPORT IN JS vs JSX FILES
 * ===============================
 *
 * 🔹 JavaScript (.js files)
 *
 * - import/export is pure JavaScript
 * - No JSX syntax allowed (unless Babel is used)
 *
 * Example:
 *   export function add(a, b) {
 *       return a + b;
 *   }
 *
 *
 * 🔹 JSX (.jsx files)
 *
 * - import/export syntax SAME as JS
 * - JSX syntax allowed
 * - Needs Babel to transpile
 *
 * Example:
 *   export default function App() {
 *       return <h1>Hello JSX</h1>;
 *   }
 *
 *
 * 🔑 Important:
 *
 * - import/export works the SAME
 * - Difference is only JSX syntax support
 *
 *
 * ===============================
 * WHY PARCEL FIRST, THEN VITE
 * ===============================
 *
 * - Parcel has:
 *   • Zero configuration
 *   • Simple mental model
 *   • Easy debugging
 *
 * - Helps understand:
 *   • Bundling
 *   • Assets
 *   • Babel integration
 *
 * - After Parcel:
 *   • Vite becomes easier to understand
 *   • Modern workflow makes sense
 *
 *
 * 🔑 One-line Revision
 *
 * Bundlers combine files,
 * Babel converts syntax,
 * Parcel is easiest to start,
 * Vite is fastest for modern React apps.
 */
