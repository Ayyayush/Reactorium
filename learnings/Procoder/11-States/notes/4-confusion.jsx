/**
 * ❌ aise bhi kr skte h ?  →  NO (Ye galat hai)
 *
 * Tumne likha:
 *
 * const action = useState(0);
 * const setAction = useState(1);
 *
 * Ye React mein **BILKUL GALAT** hai.
 * Chalo step-by-step samajhte hain **kyon galat hai**.
 *
 * ------------------------------------------------------------
 * 1️⃣ useState KYA return karta hai?
 * ------------------------------------------------------------
 *
 * useState() ek ARRAY return karta hai:
 *
 * useState(0)  →  [ stateValue, updateFunction ]
 *
 * Example:
 * useState(0)
 * returns:
 * [ 0, function ]
 *
 * ------------------------------------------------------------
 * 2️⃣ Tumhare code mein kya ho raha hai?
 * ------------------------------------------------------------
 *
 * const action = useState(0);
 *
 * action = [0, ƒ]      ❌
 * (poora array aa gaya)
 *
 * const setAction = useState(1);
 *
 * setAction = [1, ƒ]   ❌
 * (ye bhi poora array hai, function nahi)
 *
 * 👉 Yahan `setAction` koi update function nahi hai,
 * 👉 Ye sirf ek aur array hai.
 *
 * ------------------------------------------------------------
 * 3️⃣ Problem kya hogi?
 * ------------------------------------------------------------
 *
 * Tum expect kar rahe ho:
 *
 * action     → value ho
 * setAction  → function ho
 *
 * Lekin actual mein:
 *
 * action     → array hai
 * setAction  → array hai
 *
 * Agar tum likho:
 *
 * setAction(5);
 *
 * ❌ ERROR aayega:
 * "setAction is not a function"
 *
 * ------------------------------------------------------------
 * 4️⃣ React ka RULE (bahut important)
 * ------------------------------------------------------------
 *
 * 👉 useState ko **sirf ek baar** call karte hain
 * 👉 Aur uske result ko **array destructuring** se todte hain
 *
 * ------------------------------------------------------------
 * 5️⃣ ✅ CORRECT TAREEKA (RIGHT WAY)
 * ------------------------------------------------------------
 */

const [action, setAction] = useState(0);

/**
 * Ab kya hua?
 *
 * action     = 0
 * setAction  = function
 *
 * Ab ye bilkul sahi hai ✅
 *
 * ------------------------------------------------------------
 * 6️⃣ Kaam kaise karega?
 * ------------------------------------------------------------
 *
 * setAction(1);
 *
 * → state update hogi
 * → React re-render karega
 * → UI update ho jaayegi
 *
 * ------------------------------------------------------------
 * 7️⃣ Beginner ke liye simple rule (YAAD RAKHO)
 * ------------------------------------------------------------
 *
 * ❌ useState ko kabhi do alag variables mein call mat karo
 *
 * ✅ Hamesha aise likho:
 *
 * const [value, setValue] = useState(initialValue);
 *
 * ------------------------------------------------------------
 * 8️⃣ Interview One-Liner
 * ------------------------------------------------------------
 *
 * useState ek array return karta hai jisme pehla element state value
 * hota hai aur doosra element us state ko update karne ka function hota hai.
 */
