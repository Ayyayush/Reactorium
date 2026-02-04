/**
 * Why do we have $$typeof: Symbol in React?
 *
 * Short answer:
 * → React ko pehchaanne ke liye ki ye object "React Element" hai ya nahi
 */


/**
 * 1️⃣ React internally UI ko JavaScript OBJECT ke form mein rakhta hai
 *
 * Example:
 * React.createElement("h1", null, "Hello")
 * actually returns an object
 */

const reactElementLikeObject = {
  type: "h1",
  props: { children: "Hello" }
};


/**
 * 2️⃣ Problem:
 * Agar koi normal JS object bhi same shape ka ho,
 * to React confuse ho sakta hai
 */

const fakeElement = {
  type: "h1",
  props: { children: "Hello" }
};

// React ko kaise pata chale ye real React element hai ya fake?



/**
 * 3️⃣ Solution: $$typeof
 *
 * React har real React Element ke andar ek special property daalta hai:
 * $$typeof
 *
 * Ye ek Symbol hota hai
 */

const realReactElement = {
  $$typeof: Symbol.for("react.element"),
  type: "h1",
  key: null,
  ref: null,
  props: { children: "Hello" }
};


/**
 * 4️⃣ $$typeof kya karta hai?
 *
 * → Ye React ka "identity card" hai
 * → React isse check karta hai:
 *   "Is this object REALLY created by React?"
 *
 * Agar $$typeof missing ya wrong ho →
 * React is object ko ignore / reject kar deta hai
 */


/**
 * 4️⃣ $$typeof kya karta hai?
 *
 * → Ye React ka "identity card" hai
 * → React isse check karta hai:
 *   "Is this object REALLY created by React?"
 *
 * Agar $$typeof missing ya wrong ho →
 * React is object ko ignore / reject kar deta hai
 */


/**
 * 5️⃣ Why Symbol?
 *
 * Symbol isliye use hota hai kyunki:
 *
 * - Unique hota hai
 * - Accidentally overwrite nahi hota
 * - Normal JSON / user objects se clash nahi karta
 */


/**
 * 6️⃣ Why name starts with $$ ?
 *
 * $$ ka matlab:
 * → INTERNAL USE ONLY
 * → Developers ko directly use / touch nahi karna chahiye
 *
 * Same pattern:
 * $$typeof
 * $$id
 * $$owner
 */

/**
 * 7️⃣ Real-life analogy
 *
 * React Element = Aadhaar card holder
 * $$typeof     = Aadhaar number
 *
 * Shape same ho sakta hai,
 * par bina Aadhaar number ke identity valid nahi hoti
 */


/**
 * 🔑 One-line interview answer
 *
 * "$$typeof is a Symbol used by React to uniquely identify genuine React elements
 * and protect against fake or accidentally created objects."
 */
