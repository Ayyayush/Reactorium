/**
 * =========================================================
 * React Hooks – Introduction to useEffect Hook
 * =========================================================
 *
 * 🔹 What are Hooks?
 * ---------------------------------------------------------
 * - Hooks are special functions provided by React
 * - They allow us to add extra features to functional components
 * - Examples of features:
 *    • State management
 *    • Side effects
 *    • Lifecycle-like behavior
 *
 * Hooks work ONLY inside functional components.
 *
 * =========================================================
 * Hooks studied earlier
 * =========================================================
 *
 * ✔ useState Hook
 *
 * - useState is used to store and update data (state)
 * - When state changes, the component re-renders
 *
 * Example:
 *   const [value, setValue] = useState(initialValue)
 *
 * =========================================================
 * Now we study: useEffect Hook
 * =========================================================
 *
 * - useEffect is another important React hook
 * - It is used to perform SIDE EFFECTS in a component
 *
 * =========================================================
 * What are Side Effects?
 * =========================================================
 *
 * Side effects are operations that happen
 * outside of rendering UI, such as:
 *
 * - Fetching data from an API
 * - Making HTTP requests
 * - Updating the document title
 * - Running code after component renders
 * - Subscribing / unsubscribing to events
 *
 * =========================================================
 * Why do we need useEffect?
 * =========================================================
 *
 * In our Countries project:
 *
 * - Right now, we are NOT fetching data from an API
 * - We stored data manually in countriesData.js
 *
 * This is NOT how real applications work.
 *
 * In real-world apps:
 * - Data comes from a backend / API
 * - Data fetching should happen AFTER the component renders
 *
 * 👉 This is where useEffect is used.
 *
 * =========================================================
 * What does useEffect do?
 * =========================================================
 *
 * useEffect tells React:
 *
 * "After rendering the component,
 *  run this piece of code."
 *
 * It allows us to control:
 * - WHEN some code should run
 * - HOW MANY times it should run
 *
 * =========================================================
 * Basic Syntax of useEffect
 * =========================================================
 *
 * useEffect(() => {
 *   // side-effect code here
 * }, [])
 *
 * =========================================================
 * Important parts of useEffect
 * =========================================================
 *
 * 1️⃣ Callback function
 *    - The code inside runs after render
 *
 * 2️⃣ Dependency array []
 *    - Controls when the effect runs
 *
 * =========================================================
 * Dependency Array Behavior
 * =========================================================
 *
 * useEffect(() => { ... }, [])
 * → Runs ONLY ONCE (on first render)
 *
 * useEffect(() => { ... })
 * → Runs on EVERY render
 *
 * useEffect(() => { ... }, [value])
 * → Runs when `value` changes
 *
 * =========================================================
 * How we will use useEffect in Countries Project
 * =========================================================
 *
 * - Instead of importing data from countriesData.js
 * - We will fetch data from an API
 *
 * Flow:
 *
 * 1️⃣ Component renders
 * 2️⃣ useEffect runs
 * 3️⃣ API call is made
 * 4️⃣ Data is received
 * 5️⃣ Data is stored using useState
 * 6️⃣ Component re-renders with real data
 *
 * =========================================================
 * Key Difference: useState vs useEffect
 * =========================================================
 *
 * useState:
 * - Stores data
 * - Triggers re-render when data changes
 *
 * useEffect:
 * - Runs side-effect logic
 * - Does NOT store data by itself
 *
 * =========================================================
 * One-line Summary (Very Important)
 * =========================================================
 *
 * useState decides WHAT to render
 * useEffect decides WHEN to run side-effect code
 *
 */