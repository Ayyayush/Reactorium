/**
 * useState Hook – IN DETAIL (Beginner Hinglish, step-by-step)
 *
 * ------------------------------------------------------------
 * Hook aakhir hota kya hai?
 * ------------------------------------------------------------
 * Hook ek **special React function** hota hai
 * jo functional components ko
 * 👉 state
 * 👉 lifecycle
 * 👉 extra React features
 * use karne ki power deta hai.
 *
 * Simple words:
 * 👉 Hook React ke andar ghusne ka “hook” (connection) hai
 *
 * ------------------------------------------------------------
 * Ab tak hum kya samajh chuke hain?
 * ------------------------------------------------------------
 * ✔ useState value ko store karta hai
 * ✔ value update hoti hai → component re-render hota hai
 *
 * Ab dekhte hain:
 * 👉 BEHIND THE SCENES useState kaise kaam karta hai
 *
 * ------------------------------------------------------------
 * useState ACTUALLY kya hai?
 * ------------------------------------------------------------
 */

import { useState } from "react";

console.log(useState);

/**
 * Output (conceptual):
 * ƒ useState() { ... }
 *
 * 👉 Iska matlab:
 * useState ek FUNCTION hai
 */

/**
 * ❌ Ye galat hai:
 *
 * console.log(useState[0]);
 * console.log(useState[1]);
 *
 * Kyunki:
 * 👉 useState ek function hai
 * 👉 function ke [0], [1] nahi hote
 *
 * useState TAB array deta hai
 * jab hum useState() CALL karte hain
 */

/**
 * ------------------------------------------------------------
 * useState() call karne par kya milta hai?
 * ------------------------------------------------------------
 */

const result = useState(0);

/**
 * result ka output (conceptual):
 *
 * [ 0, ƒ ]
 *
 * 👉 0th index → state value
 * 👉 1st index → state update function
 */

/**
 * ------------------------------------------------------------
 * CORRECT WAY: Array Destructuring
 * ------------------------------------------------------------
 */

const [action1, setAction1] = useState(0);

/**
 * action1     → 0
 * setAction1  → function
 *
 * Ab React ko pata hai:
 * - action1 change hua
 * - component re-render karna hai
 */




const [action2, setAction2] = useState("");

/**
 * ------------------------------------------------------------
 * BEHIND THE SCENES (IMPORTANT PART)
 * ------------------------------------------------------------
 *
 * React internally aisa kuch karta hai (conceptually):
 *
 * [
 *   state1,
 *   state2,
 *   state3,
 *   ...
 * ]
 *
 * Har component ke liye React
 * state values ko ek LIST mein yaad rakhta hai.
 *
 * Isliye:
 * - useState(0) har render pe reset nahi hota
 * - React purani value ko yaad rakhta hai
 *
 * Ye kaam hota hai:
 * 👉 Closures + React internal memory se
 *
 * 
 * 
 * 
 * ------------------------------------------------------------
 * ! Rules of using useState (VERY IMPORTANT – INTERVIEW)
 * ------------------------------------------------------------
 *
 * 1️⃣ Hooks ko sirf TOP LEVEL par call karo
 *
 * ❌ if ke andar nahi
 * ❌ loop ke andar nahi
 * ❌ function ke andar nahi
 *
 * ✔ Component ke top level par
 *
 * ------------------------------------------------------------
 * 2️⃣ Hooks sirf React components ke andar
 *
 * ❌ Normal JS function ke andar nahi
 * ❌ Class component ke andar nahi
 *
 * ------------------------------------------------------------
 * 3️⃣ useState ka order kabhi change mat karo
 *
 * React state ko ORDER ke basis pe track karta hai
 *
 * ------------------------------------------------------------
 * 4️⃣ State ko DIRECT mutate mat karo
 *
 * ❌ action1 = action1 + 1
 * ✔ setAction1(action1 + 1)
 *
 * ------------------------------------------------------------
 * Important Warning (console mein):
 * ------------------------------------------------------------
 *
 * Agar rules break karoge toh React bolega:
 *
 * ❌ "Invalid hook call"
 *
 * ------------------------------------------------------------
 * One-line Summary (EXAM / INTERVIEW)
 * ------------------------------------------------------------
 *
 * useState ek React hook hai jo state value aur usko update
 * karne ka function deta hai; React internally order aur
 * closures ke through state ko yaad rakhta hai aur
 * state change hone par component re-render karta hai.
 */
