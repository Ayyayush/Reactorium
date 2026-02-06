/**
 * ===============================
 * WORKING OF PARCEL
 * ===============================
 *
 * 🔹 What happens when we run:
 *
 *   npx parcel index.html
 *
 *
 * 🔹 Step-by-step internal working
 *
 * 1️⃣ Parcel starts a development server
 *
 * - Parcel apna local dev server start karta hai
 * - Server sirf tumhare system par run hota hai
 * - By default:
 *   http://localhost:1234
 *
 *
 * 2️⃣ Parcel reads `index.html` as the entry point
 *
 * - index.html ek application entry hoti hai
 * - Browser isi file ko load karta hai
 *
 *
 * 3️⃣ Parcel scans `<script>` and `<link>` tags
 *
 * - JS / JSX files
 * - CSS files
 * - Images / assets
 *
 * Parcel automatically dependency graph banata hai
 *
 *
 * 4️⃣ Parcel resolves node_modules
 *
 * - import React from "react"
 * - import ReactDOM from "react-dom/client"
 *
 * Parcel automatically:
 * - node_modules ko locate karta hai
 * - correct files resolve karta hai
 *
 *
 * 5️⃣ Parcel uses Babel internally
 *
 * - JSX → JavaScript
 * - ES6+ → Browser-compatible JS
 *
 * Developer ko Babel manually configure nahi karna padta
 *
 *
 * 6️⃣ Parcel bundles everything
 *
 * - Multiple JS files → bundle
 * - CSS → injected or bundled
 * - Images → optimized assets
 *
 *
 * 7️⃣ Parcel serves optimized output
 *
 * - Browser ko sirf optimized JavaScript milta hai
 * - Browser React / JSX / node_modules nahi dekhta
 *
 *
 * 8️⃣ Parcel provides Live Reloading
 *
 * - File change detect karta hai
 * - Browser automatically refresh hota hai
 *
 *
 * ===============================
 * WHAT IS `dist/` FOLDER
 * ===============================
 *
 * 🔹 Definition:
 *
 * `dist` folder ka matlab hota hai:
 * "distribution folder"
 *
 * Is folder ke andar:
 * - Final optimized files hoti hain
 * - Browser-ready code hota hai
 *
 *
 * 🔹 dist folder kab banta hai?
 *
 * - `parcel build index.html` run karne par
 * - Production-ready output generate hota hai
 *
 *
 * 🔹 dist folder ke andar kya hota hai?
 *
 * - Minified JavaScript bundles
 * - Optimized CSS
 * - Compressed images
 * - Source maps (optional)
 *
 *
 * 🔹 dist folder ka kaam kya hai?
 *
 * - Ye folder directly server par deploy hota hai
 * - Browser isi folder ke files ko load karta hai
 *
 *
 * 🔹 Development vs Production
 *
 * Development:
 * - parcel index.html
 * - Files memory mein serve hoti hain
 * - dist folder zaroori nahi
 *
 * Production:
 * - parcel build index.html
 * - dist folder generate hota hai
 *
 *
 * ===============================
 * FLOW (MENTAL MODEL)
 * ===============================
 *
 * index.html
 *    ↓
 * Parcel Dev Server
 *    ↓
 * JSX + node_modules + CSS
 *    ↓
 * Bundling + Transpiling
 *    ↓
 * Browser-ready JavaScript
 *
 *
 * ===============================
 * ONE-LINE REVISION
 * ===============================
 *
 * Parcel ek zero-config bundler hai jo
 * index.html ko entry banakar
 * React, JSX, aur node_modules ko
 * browser-compatible bundle mein convert karta hai,
 * aur `dist` folder production output ke liye hota hai.
 */
