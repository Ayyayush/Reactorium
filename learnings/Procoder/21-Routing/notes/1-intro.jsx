/**
 * =========================================================
 * Introduction to Routing in React
 * =========================================================
 *
 * 🔹 What is Routing?
 * ---------------------------------------------------------
 * Routing ka matlab hota hai:
 * - Jab user kisi element (jaise country card) par click kare
 * - Aur URL change ho
 * - Aur user ko ek naya "page" dikhe
 *
 * Lekin IMPORTANT baat:
 * React apps mostly SPA (Single Page Applications) hoti hain.
 *
 * Iska matlab:
 * - Actual mein naya HTML page load nahi hota
 * - Browser reload nahi hota
 * - Sirf component change hota hai
 *
 * User ko FEEL hota hai jaise page change hua ho.
 *
 * =========================================================
 * Why normal <a href=""> is not enough?
 * =========================================================
 *
 * Agar hum normal <a href="/country"> use karein:
 * - Browser reload ho jaata hai ❌
 * - React ka state reset ho jaata hai ❌
 * - Performance slow ho jaati hai ❌
 *
 * Isliye React mein routing ke liye
 * ek special library use ki jaati hai.
 *
 * =========================================================
 * React Router DOM
 * =========================================================
 *
 * - React Router DOM ek popular routing library hai
 * - Ye React apps ke andar routing implement karne ke liye use hoti hai
 *
 * IMPORTANT:
 * - Ye Facebook (React) team ne develop nahi ki
 * - Ye Remix framework waalon ne develop ki hai
 *
 * React Router DOM React ke saath officially recommended hai.
 *
 * =========================================================
 * Why do we need React Router?
 * =========================================================
 *
 * React Router:
 * - URL ko listen karta hai
 * - URL ke according component render karta hai
 * - Page reload hone se bachata hai
 *
 * Example URLs:
 *   "/"               → Home page
 *   "/contact"        → Contact page
 *   "/country/India"  → Country detail page
 *
 * =========================================================
 * Installation
 * =========================================================
 *
 * React Router DOM install karne ke liye:
 *
 *   npm install react-router-dom
 *
 * =========================================================
 * What do we need for routing?
 * =========================================================
 *
 * React Router use karne ke liye hum mainly use karenge:
 *
 * - createBrowserRouter → routes define karne ke liye
 * - RouterProvider     → router ko app ke saath connect karne ke liye
 * - Route configuration → URL → Component mapping
 *
 * =========================================================
 * High-Level Mental Model (VERY IMPORTANT)
 * =========================================================
 *
 * User clicks a link
 *        ↓
 * URL changes (without reload)
 *        ↓
 * React Router checks the URL
 *        ↓
 * Matching route is found
 *        ↓
 * Corresponding component is rendered
 *
 * =========================================================
 * Goal
 * =========================================================
 *
 * React ke andar routing implement karke:
 * - Multiple pages ka effect create karna
 * - Fast navigation dena
 * - State ko preserve karna
 *
 * Next step:
 * - createBrowserRouter ka syntax samajhna
 * - main.jsx mein router setup karna
 */