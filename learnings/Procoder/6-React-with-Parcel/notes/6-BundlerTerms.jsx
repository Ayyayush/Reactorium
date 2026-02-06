/**
 * ===============================================
 * IMPORTANT BUNDLER TERMS (INTERVIEW POV)
 * ===============================================
 *
 * These terms are commonly asked in frontend / React
 * interviews when discussing bundlers like:
 * Parcel, Webpack, Vite, CRA
 *
 *
 * ===============================================
 * 1️⃣ TREE SHAKING
 * ===============================================
 *
 * 🔹 What is Tree Shaking?
 *
 * Tree Shaking is a process where bundlers remove
 * unused code from the final bundle.
 *
 * - Only the code that is ACTUALLY used is kept
 * - Unused imports are removed
 *
 * 🔹 Why is it called Tree Shaking?
 *
 * - Dependency graph is like a tree
 * - Unused branches are "shaken off"
 *
 * 🔹 Requirement:
 *
 * - Uses ES Modules (import / export)
 *
 * 🔹 Benefit:
 *
 * - Smaller bundle size
 * - Faster load time
 *
 *
 * ===============================================
 * 2️⃣ CODE SPLITTING
 * ===============================================
 *
 * 🔹 What is Code Splitting?
 *
 * Code splitting means breaking one large bundle
 * into multiple smaller chunks.
 *
 * 🔹 Why?
 *
 * - Load only what is needed
 * - Reduce initial load time
 *
 * 🔹 Example:
 *
 * - Home page loads first
 * - Dashboard code loads only when user navigates
 *
 *
 * ===============================================
 * 3️⃣ BUNDLE
 * ===============================================
 *
 * 🔹 What is a Bundle?
 *
 * A bundle is the final output file generated
 * by the bundler which contains:
 * - JavaScript
 * - CSS
 * - Assets
 *
 * Browser loads the bundle, not source files.
 *
 *
 * ===============================================
 * 4️⃣ DEPENDENCY GRAPH
 * ===============================================
 *
 * 🔹 What is Dependency Graph?
 *
 * A dependency graph is a structure that shows:
 * - Which file depends on which file
 *
 * Bundler starts from entry file and
 * recursively follows imports.
 *
 *
 * ===============================================
 * 5️⃣ ENTRY POINT
 * ===============================================
 *
 * 🔹 What is Entry Point?
 *
 * Entry point is the starting file of the app
 * from where bundler starts building the graph.
 *
 * Examples:
 * - index.html (Parcel, Vite)
 * - index.js / main.jsx
 *
 *
 * ===============================================
 * 6️⃣ OUTPUT / DIST FOLDER
 * ===============================================
 *
 * 🔹 What is dist folder?
 *
 * - dist = distribution
 * - Contains final, optimized files
 * - Ready to deploy
 *
 *
 * ===============================================
 * 7️⃣ HMR (HOT MODULE REPLACEMENT)
 * ===============================================
 *
 * 🔹 What is HMR?
 *
 * - Updates only changed modules
 * - No full page reload
 * - State is preserved
 *
 *
 * ===============================================
 * 8️⃣ MINIFICATION
 * ===============================================
 *
 * 🔹 What is Minification?
 *
 * - Removes:
 *   • spaces
 *   • comments
 *   • line breaks
 *
 * - Shortens variable names
 *
 * 🔹 Purpose:
 *
 * - Reduce file size
 *
 *
 * ===============================================
 * 9️⃣ TRANSPILATION
 * ===============================================
 *
 * 🔹 What is Transpilation?
 *
 * - Converting modern JS / JSX
 *   into browser-compatible JavaScript
 *
 * - Done by Babel (used inside bundlers)
 *
 *
 * ===============================================
 * 🔟 SOURCE MAPS
 * ===============================================
 *
 * 🔹 What are Source Maps?
 *
 * - Map compiled code back to original source
 * - Used for debugging
 * - Browser never executes source maps
 *
 *
 * ===============================================
 * 1️⃣1️⃣ CACHING
 * ===============================================
 *
 * 🔹 What is Caching?
 *
 * - Bundlers generate hashed filenames
 * - Browser caches unchanged files
 * - Improves performance
 *
 *
 * ===============================================
 * 1️⃣2️⃣ LAZY LOADING
 * ===============================================
 *
 * 🔹 What is Lazy Loading?
 *
 * - Load resources only when required
 * - Improves initial load speed
 *
 *
 * ===============================================
 * ONE-LINE INTERVIEW SUMMARY
 * ===============================================
 *
 * Bundlers create dependency graphs, remove unused code
 * using tree shaking, split code into chunks, and produce
 * optimized bundles with fast reload and caching.
 */
