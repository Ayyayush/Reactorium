/**
 * ============================================================
 *                    Conditional Rendering (React)
 * ============================================================
 *
 * 🔹 What is Conditional Rendering?
 *
 * Conditional Rendering ka matlab hai UI ko condition ke basis par
 * show ya hide karna.
 *
 * Simple words me:
 * Agar koi condition true hai → kuch render karo
 * Agar false hai → kuch aur render karo ya kuch bhi mat render karo
 *
 * Ye bilkul JavaScript ke normal if-else jaisa hi hota hai,
 * bas yaha hum JSX ke andar use karte hain.
 *
 *
 * ------------------------------------------------------------
 *
 * 🔹 Why we need Conditional Rendering?
 *
 * Real-world apps me:
 *
 * - User logged in hai ya nahi?
 * - Data load ho gaya ya loading chal rahi hai?
 * - Error aaya ya success?
 * - Cart empty hai ya products hain?
 *
 * Har situation me UI change hoti hai.
 * Isi ko handle karne ke liye conditional rendering use hoti hai.
 *
 *
 * ------------------------------------------------------------
 *
 * 🔹 How to use Conditional Rendering?
 *
 * React me hum multiple tariko se condition laga sakte hain:
 *
 * 1️⃣ if-else statement
 * 2️⃣ Ternary operator ( ? : )
 * 3️⃣ Logical AND operator ( && )
 * 4️⃣ Early return pattern
 *
 *
 * 
 * 
 * ------------------------------------------------------------
 *
 * 🔹 Rules (Very Important ⚠️)
 *
 * 1. JSX ke andar directly if-else nahi likh sakte.
 *    Agar use karna hai to JSX ke bahar use karo.
 *
 * 2. JSX me sirf expressions allowed hote hain,
 *    statements allowed nahi hote.
 *
 * 3. Condition boolean honi chahiye.
 *
 * 4. Humesha ek single parent element return karo.
 *
 *
 * ------------------------------------------------------------
 *
 * 
 * 
 * 🔹 Syntax Examples
 *
 * 1️⃣ if-else (JSX ke bahar)
 *
 * if (isLoggedIn) {
 *   return <h1>Welcome User</h1>
 * } else {
 *   return <h1>Please Login</h1>
 * }
 *
 *
 * 2️⃣ Ternary Operator (Most common)
 *
 * {isLoggedIn ? <h1>Welcome</h1> : <h1>Login</h1>}
 *
 *
 * 3️⃣ Logical AND (Short Condition)
 *
 * {isAdmin && <button>Delete</button>}
 *
 * Agar left side true hoga tabhi right side render hoga.
 *
 * 
 * 
 *
 * 4️⃣ Early Return Pattern (Clean Code)
 *
 * if (!data) return <h1>Loading...</h1>
 *
 * return <h1>Data Loaded</h1>
 *
 *
 * ------------------------------------------------------------
 *
 * 🔹 Demo Code (Simple Example)
 *
 * function App() {
 *
 *   const isLoggedIn = true;
 *
 *   return (
 *     <div>
 *       {isLoggedIn
 *         ? <h1>Welcome Back 👋</h1>
 *         : <h1>Please Login 🔒</h1>
 *       }
 *     </div>
 *   );
 * }
 *
 *
 * ------------------------------------------------------------
 *
 * 🔹 Real World Example (Loading State)
 *
 * function App() {
 *
 *   const [loading, setLoading] = useState(true);
 *
 *   if (loading) {
 *     return <h1>Loading...</h1>;
 *   }
 *
 *   return <h1>Data Loaded Successfully ✅</h1>;
 * }
 *
 *
 * ------------------------------------------------------------
 *
 * 🔹 Important Interview Line 🎯
 *
 * "Conditional rendering in React allows components to render
 * different UI elements based on conditions using JavaScript
 * expressions like ternary operators, logical AND, or early returns."
 *
 *
 * ------------------------------------------------------------
 *
 * 🔹 Summary
 *
 * Conditional Rendering = UI ko dynamic banana
 * based on state, props ya kisi bhi condition ke basis par.
 *
 * Ye React ka core concept hai.
 *
 * Agar ye clear ho gaya → React ka 50% flow samajh aajata hai.
 *
 * ============================================================
 */
