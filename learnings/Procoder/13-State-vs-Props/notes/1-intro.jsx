/**
 * State vs Props in React (Beginner Hinglish – DETAIL MEIN)
 *
 * ------------------------------------------------------------
 * Sabse pehle: Props aur State hote kya hain?
 * ------------------------------------------------------------
 *
 * React mein data handle karne ke do main tareeke hote hain:
 * 1️⃣ Props
 * 2️⃣ State
 *
 * Dono ka kaam UI ko data dena hota hai,
 * lekin dono ka ROLE alag hota hai.
 *
 * ============================================================
 * WHAT ARE PROPS?
 * ============================================================
 *
 * Props ka full form hota hai → Properties
 *
 * 👉 Props ek component ko bahar se data dene ka tareeka hote hain
 * 👉 Props parent component se child component ko milte hain
 *
 * Simple words:
 * 👉 Props = data jo "bahar se aata hai"
 *
 * Example:
 *
 * <AppleBasket appleCount={5} basketName="Basket 1" />
 *
 * Yahan:
 * - appleCount
 * - basketName
 *
 * ye dono PROPS hain
 *
 * ------------------------------------------------------------
 * Props ki properties:
 * ------------------------------------------------------------
 * ✔ Read-only hote hain (change nahi kar sakte)
 * ✔ Parent → Child flow hota hai
 * ✔ Child props ko modify nahi kar sakta
 *
 * ============================================================
 * WHAT ARE STATE?
 * ============================================================
 *
 * State ek component ke ANDAR ka data hota hai
 * jo time ke saath change ho sakta hai.
 *
 * Simple words:
 * 👉 State = data jo component khud control karta hai
 *
 * Example:
 *
 * const [count, setCount] = useState(0);
 *
 * Yahan:
 * - count → state value
 * - setCount → state update function
 *
 * ------------------------------------------------------------
 * State ki properties:
 * ------------------------------------------------------------
 * ✔ Component ke andar hota hai
 * ✔ Change ho sakta hai
 * ✔ Change hone par UI re-render hoti hai
 *
 * ============================================================
 * EK IMPORTANT BAAT (VERY IMPORTANT)
 * ============================================================
 *
 * 👉 Ek component ke liye jo STATE hoti hai,
 *    wahi dusre component ke liye PROP ban jaati hai.
 *
 * ------------------------------------------------------------
 * Counter Example se samajhte hain
 * ------------------------------------------------------------
 *
 * AppleCounter (Parent)
 * ---------------------
 * const [leftAppleCount, setLeftAppleCount] = useState(5);
 *
 * AppleBasket (Child)
 * -------------------
 * <AppleBasket appleCount={leftAppleCount} />
 *
 * 👉 AppleCounter ke liye:
 * leftAppleCount = STATE
 *
 * 👉 AppleBasket ke liye:
 * appleCount = PROP
 *
 * SAME VALUE
 * DIFFERENT ROLE
 *
 * ============================================================
 * STATE vs PROPS (TABLE)
 * ============================================================
 *
 * | Feature        | State                    | Props                   |
 * |----------------|--------------------------|-------------------------|
 * | Belongs to     | Component itself         | Parent component        |
 * | Can change?    | ✅ Yes                   | ❌ No (read-only)       |
 * | Who updates?   | Component itself         | Parent only             |
 * | Re-render?     | ✅ Yes                   | ✅ Yes                  |
 *
 * ============================================================
 * RULES WITH PROPS (YAAD RAKHO)
 * ============================================================
 *
 * 1️⃣ Props are READ-ONLY
 *
 * ❌ props.appleCount = 10
 * ✔ Parent se hi update hoga
 *
 * ------------------------------------------------------------
 * 2️⃣ Props flow ONE WAY hota hai
 *
 * Parent → Child
 *
 * Child → Parent ❌ (direct nahi)
 *
 * ------------------------------------------------------------
 * 3️⃣ Props change hone par child re-render hota hai
 *
 * ============================================================
 * PROBLEMS WITH PROPS (LIMITATIONS)
 * ============================================================
 *
 * 1️⃣ Prop Drilling
 * ------------------------------------------------------------
 * Jab data ko:
 * Parent → Child → Grandchild → GreatGrandchild
 * pass karna pade
 *
 * Code messy ho jaata hai
 *
 * ------------------------------------------------------------
 * 2️⃣ Child props ko khud change nahi kar sakta
 * ------------------------------------------------------------
 * Child sirf REQUEST kar sakta hai
 * Actual update parent hi karega
 *
 * ------------------------------------------------------------
 * 3️⃣ Too many props → unreadable code
 *
 * ============================================================
 * ONE-LINE INTERVIEW ANSWER
 * ============================================================
 *
 * Props are read-only data passed from parent to child,
 * while state is internal, mutable data that controls
 * a component’s behavior and re-rendering.
 *
 * ============================================================
 * FINAL GOLDEN LINE (YAAD RAKHO)
 * ============================================================
 *
 * 👉 Jo data component ke andar control hota hai → STATE
 * 👉 Jo data component ko bahar se milta hai → PROPS
 */
