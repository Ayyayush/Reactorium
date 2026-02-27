/**
 * =========================================================
 * useParams() Hook – Detailed Explanation
 * =========================================================
 *
 * 🔹 What is useParams()?
 * ---------------------------------------------------------
 * useParams() ek React Router ka hook hai.
 *
 * - Ye URL ke dynamic parameters ko read karne ke kaam aata hai
 * - Sirf un components ke andar use hota hai
 *   jo React Router ke through render hue ho
 *
 * Example URL:
 *   /country/India
 *
 * Yahan:
 * - "India" ek dynamic parameter hai
 *
 * =========================================================
 * Why do we need useParams()?
 * =========================================================
 *
 * useParams() ka use hum tab karte hain jab:
 * - URL ke basis par data fetch karna ho
 * - Same component ko different data ke liye reuse karna ho
 *
 * Example use cases:
 * - Country detail page
 * - Product detail page
 * - User profile page
 *
 * =========================================================
 * How does useParams() work?
 * =========================================================
 *
 * Step 1️⃣: Dynamic route define karo
 *
 *   path: 'country/:name'
 *
 * Step 2️⃣: URL open hota hai
 *
 *   /country/Croatia
 *
 * Step 3️⃣: useParams() URL se value read karta hai
 *
 *   { name: "Croatia" }
 *
 * =========================================================
 * Syntax of useParams()
 * =========================================================
 *
 *   import { useParams } from 'react-router-dom'
 *
 *   const params = useParams()
 *
 * OR (commonly used):
 *
 *   const { name } = useParams()
 *
 * =========================================================
 * Basic Demo using useParams()
 * =========================================================
 *
 * Route:
 *   path: 'country/:name'
 *
 * Component:
 *
 *   function CountryDetail() {
 *     const { name } = useParams()
 *     return <h1>{name}</h1>
 *   }
 *
 * Agar URL ho:
 *   /country/India
 *
 * Output:
 *   India
 *
 * =========================================================
 * Important Points to Remember
 * =========================================================
 *
 * - useParams() ek object return karta hai
 * - Keys wahi hoti hain jo route mein define hoti hain
 * - Values hamesha string hoti hain
 * - URL change hone par component re-render hota hai
 *
 * =========================================================
 * Common Mistakes
 * =========================================================
 *
 * ❌ useParams() ko non-route component mein use karna
 * ❌ Route path mein colon (:) lagana bhool jaana
 * ❌ Expecting number instead of string
 *
 * =========================================================
 * High-Level Mental Model
 * =========================================================
 *
 * User clicks Link
 *        ↓
 * URL changes (without reload)
 *        ↓
 * React Router matches dynamic route
 *        ↓
 * useParams() extracts value
 *        ↓
 * Component uses that value (API call / UI)
 *
 * =========================================================
 * Interview One-Liner
 * =========================================================
 *
 * "useParams is a React Router hook that allows us to
 * access dynamic route parameters from the URL so that
 * we can render data-driven pages using the same component."
 *
 * =========================================================
 */