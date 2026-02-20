/**
 * ============================================================
 *                        CSS Nature in React
 * ============================================================
 *
 * 🔹 CSS ka Nature (Global Nature of CSS)
 *
 * Normal CSS ka nature GLOBAL hota hai.
 *
 * Matlab:
 * Agar tum kisi bhi component ke andar
 * ek CSS file import karte ho,
 * to us file ke saare styles poore page par apply ho sakte hain.
 *
 * Example:
 *
 * .button {
 *   color: red;
 * }
 *
 * Agar kisi aur component me bhi className="button" hai,
 * to waha bhi same style apply ho jayega.
 *
 * 👉 CSS ko farq nahi padta ki wo kis component me likha gaya hai.
 * 👉 Wo sirf class naam dekhta hai.
 *
 *
 * ------------------------------------------------------------
 *
 * 🔹 Shortcomings of Using Normal CSS in React
 *
 * 1️⃣ Class name collision
 *    Do components me same class naam ho sakta hai.
 *
 * 2️⃣ Global scope problem
 *    Ek component ka style dusre component ko affect kar sakta hai.
 *
 * 3️⃣ Debugging mushkil
 *    Pata lagana hard ho jata hai ki style kaha se aa raha hai.
 *
 * 4️⃣ Large project me messy ho jata hai
 *
 *
 * ------------------------------------------------------------
 *
 * 🔹 Solution → CSS Modules
 *
 * CSS Modules ek technique hai
 * jisme CSS by default LOCAL ho jati hai.
 *
 * Matlab:
 * Har component ka CSS sirf us component tak limited rahega.
 *
 *
 * ------------------------------------------------------------
 *
 * 🔹 What is CSS Module?
 *
 * CSS Module ek special CSS file hoti hai
 * jiska naam .module.css se end hota hai.
 *
 * Example:
 * AppleBasket.module.css
 *
 * React automatically class names ko
 * unique bana deta hai internally.
 *
 * Example:
 *
 * .button
 *
 * convert ho sakta hai:
 *
 * button_x7h23a
 *
 * Isliye clash nahi hota.
 *
 *
 * ------------------------------------------------------------
 *
 * 🔹 Why to Use CSS Modules?
 *
 * ✅ No global pollution
 * ✅ No class name conflict
 * ✅ Component-level styling
 * ✅ Scalable for large apps
 * ✅ Clean architecture
 *
 *
 * ------------------------------------------------------------
 *
 * 🔹 Importing Syntax
 *
 * Step 1: File rename karo
 *
 * AppleBasket.module.css
 *
 *
 * Step 2: Import like this
 *
 * import styles from './AppleBasket.module.css'
 *
 *
 * Step 3: Use like this
 *
 * <div className={styles.appleBasket}>
 *
 *
 * ------------------------------------------------------------
 *
 * 🔹 Rules of CSS Modules
 *
 * 1️⃣ File name must end with .module.css
 *
 * 2️⃣ Import default object me karna hota hai
 *
 * 3️⃣ className me direct string nahi likhte
 *
 * ❌ Wrong:
 * className="appleBasket"
 *
 * ✅ Correct:
 * className={styles.appleBasket}
 *
 * 4️⃣ Multiple classes use karne ke liye:
 *
 * className={`${styles.box} ${styles.active}`}
 *
 *
 * ------------------------------------------------------------
 *
 * 🔹 Summary
 *
 * Normal CSS → Global
 * CSS Modules → Local (Component Scoped)
 *
 * Large React projects me
 * CSS Modules use karna better practice hai.
 *
 * ============================================================
 */