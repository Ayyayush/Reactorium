/**
 * React Fragments – aur thoda deep 
 *
 * ------------------------------------------------------------
 * let’s see some more things about Fragments
 * ------------------------------------------------------------
 */

/**
 * console.log(Fragment)
 * console.log(typeof(Fragment))
 *
 * (Fragment ko samajhne ke liye)
 */

/**
 * ------------------------------------------------------------
 * Fragment ACTUALLY hota kya hai?
 * ------------------------------------------------------------
 *
 * React.Fragment ek **JavaScript object / symbol-based type** hota hai
 * jo React internally use karta hai.
 *
 * Ye koi HTML tag nahi hai ❌
 * Ye browser ke DOM mein directly exist nahi karta ❌
 *
 * ------------------------------------------------------------
 * typeof Fragment kya hota hai?
 * ------------------------------------------------------------
 *
 * typeof React.Fragment  →  "symbol" (internally)
 *
 * Matlab:
 * 👉 Fragment ek special React identifier hai
 * 👉 Jo React ko batata hai:
 *    "Group these elements, but DOM mein kuch add mat karo"
 *
 * ------------------------------------------------------------
 * IMPORTANT CLARIFICATION
 * ------------------------------------------------------------
 *
 * <>
 *   <h1>Hello</h1>
 * </>
 *
 * Ye JSX syntax hai
 * Iske peeche React.Fragment hi kaam karta hai
 *
 * Short syntax <> </> = React.Fragment
 *
 * ------------------------------------------------------------
 * Fragment vs div (quick comparison)
 * ------------------------------------------------------------
 *
 * <div>
 *   <h1>Hello</h1>
 * </div>
 *
 * DOM mein:
 * <div>...</div>  ❌ extra node
 *
 * <>
 *   <h1>Hello</h1>
 * </>
 *
 * DOM mein:
 * <h1>Hello</h1>  ✅ clean DOM
 *
 * ------------------------------------------------------------
 * Fragment ke RULES (IMPORTANT)
 * ------------------------------------------------------------
 *
 * 1️⃣ Fragment koi props accept nahi karta
 *
 * ❌ <>
 *     <div>Test</div>
 *   </>
 *
 * (except `key`, wo bhi lists mein)
 *
 * ------------------------------------------------------------
 * 2️⃣ Short Fragment syntax mein `key` allowed nahi hota
 *
 * ❌ <>
 *     key={id}
 *   </>
 *
 * ✔ <React.Fragment key={id}>
 *
 * ------------------------------------------------------------
 * 3️⃣ Fragment ek wrapper hai, component nahi
 *
 * 👉 Fragment ke upar events nahi lagte
 *
 * ------------------------------------------------------------
 * MCQs (INTERVIEW / EXAM PRACTICE)
 * ------------------------------------------------------------
 *
 * Q1. React Fragment ka main use kya hai?
 * A) Styling
 * B) State handling
 * C) Grouping elements without extra DOM node  ✅
 * D) Event handling
 *
 * ------------------------------------------------------------
 *
 * Q2. Fragment ka short syntax kaunsa hai?
 * A) <fragment></fragment>
 * B) <React.Fragment>
 * C) <> </>   ✅
 * D) <div></div>
 *
 * ------------------------------------------------------------
 *
 * Q3. Fragment browser DOM mein kya add karta hai?
 * A) div
 * B) span
 * C) empty node
 * D) nothing   ✅
 *
 * ------------------------------------------------------------
 *
 * Q4. Fragment ke saath key kab use hota hai?
 * A) Hamesha
 * B) Kabhi nahi
 * C) Sirf lists mein   ✅
 * D) Events ke saath
 *
 * ------------------------------------------------------------
 *
 * Q5. Fragment ek HTML element hai?
 * A) Yes
 * B) No   ✅
 *
 * ------------------------------------------------------------
 * One-line Summary (YAAD RAKHO)
 * ------------------------------------------------------------
 *
 * React Fragment ek invisible wrapper hai
 * jo multiple JSX elements ko group karta hai
 * bina DOM mein extra node add kiye.
 */
