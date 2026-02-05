/**
 * ===============================
 * JSX (JavaScript XML)
 * ===============================
 *
 * 👉 Definition:
 * JSX ek JavaScript syntax extension hai
 * jo HTML-jaisa code JavaScript ke andar likhne deta hai.
 *
 *
 * 🔹 JSX in JavaScript
 *
 * - JSX syntax likhne ko easy aur readable banata hai
 * - JSX declarative hota hai (WHAT dikhana hai batata hai)
 * - JSX, React.createElement() ke complex syntax ko simplify karta hai
 * - JSX React elements ke deep nesting problem ko solve karta hai
 *
 *
 * 🔹 What is Babel?
 *
 * - Babel ek compiler / transpiler hai
 * - Browser JSX ko directly samajh nahi paata
 * - Babel JSX ko React.createElement() calls mein convert karta hai
 *
 *
 * 🔹 JSX ka flow
 *
 * JSX
 *   ↓ (Babel)
 * React.createElement()
 *   ↓
 * JavaScript Object
 *   ↓
 * Virtual DOM
 *   ↓
 * Browser DOM
 *
 *
 * 🔹 Babel acquire karne ke ways
 *
 * 1️⃣ CDN link
 *    - Learning / revision ke liye best
 *    - Browser ke andar hi JSX transpile hota hai
 *
 * 2️⃣ Bundlers (Production)
 *    - Webpack + Babel
 *    - Vite + Babel
 *    - Faster & optimized
 *
 *
 * 🔑 One-line Revision
 *
 * JSX HTML-jaisa dikhta hai, par hota JavaScript hai,
 * aur Babel usko browser-friendly JavaScript mein convert karta hai.
 */


/**
 * ===============================
 * <script> tag ka `type` attribute
 * ===============================
 *
 * - `type` attribute browser ko batata hai
 *   ki script kis language ka code hai
 *
 * - `type` ki default value hoti hai:
 *   👉 text/javascript
 *
 *
 * ❗ Agar type galat diya gaya ho
 *
 * - Example: type="text/abc"
 * - Browser ko samajh nahi aata ki code kis type ka hai
 * - Result:
 *   • Script load nahi hoti
 *   • Code execute nahi hota
 *
 *
 * 🔹 Important `type` values (React / JS context)
 *
 * 1️⃣ text/javascript
 *    - Default JavaScript type
 *    - Normal JS files ke liye
 *
 * 2️⃣ module
 *    - ES Modules ke liye
 *    - import / export allowed
 *
 * 3️⃣ text/babel
 *    - JSX + Babel CDN ke saath use hota hai
 *    - Browser se pehle Babel JSX transpile karta hai
 *
 *
 * ===============================
 * React mein kuch values directly render nahi hoti
 * ===============================
 *
 * React in values ko screen par show nahi karta:
 *
 * - false
 * - true
 * - null
 * - undefined
 *
 * Example:
 * {false}   ❌ kuch render nahi hoga
 * {true}    ❌ kuch render nahi hoga
 *
 *
 * 🔹 Reason:
 *
 * - React in values ko "no UI output" maanta hai
 * - Ye values logic ke liye hoti hain, display ke liye nahi
 *
 *
 * 🔹 Agar dikhana ho toh?
 *
 * - Inko string mein convert karna padega
 *
 * Example:
 * {"false"}
 * {String(true)}
 *
 *
 * ===============================
 * Babel install karne ka dusra tareeka
 * (Command Line / Production)
 * ===============================
 *
 * - Pehle npm install karna hota hai
 * - Phir Babel packages install kiye jaate hain
 *
 * Common packages:
 * - @babel/core
 * - @babel/preset-env
 * - @babel/preset-react
 *
 * Ye approach production apps ke liye use hoti hai
 * (CRA, Vite, Next.js, etc.)
 *
 *
 * 🔑 Final One-line Revision
 *
 * JSX browser samajh nahi paata,
 * Babel JSX ko JavaScript mein convert karta hai,
 * aur React kuch logical values ko UI mein render nahi karta.
 */
