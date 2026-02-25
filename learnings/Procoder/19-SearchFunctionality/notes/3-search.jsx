/**
 * =========================================================
 * How to implement Search Functionality in React
 * =========================================================
 *
 * 🔹 Important Point:
 * Search functionality is NOT a React-specific feature.
 * It is implemented using plain JavaScript.
 *
 * React’s role is only:
 *  - To store data using state
 *  - To re-render UI when state changes
 *
 * =========================================================
 * 1️⃣ JavaScript filter() Function
 * =========================================================
 *
 * - filter() is a JavaScript array method
 * - It loops through each element of an array
 * - It returns a NEW array
 * - It keeps elements where the condition returns true
 *
 * 👉 true  → element is kept
 * 👉 false → element is removed
 *
 * Example:
 *   array.filter(item => condition)
 *
 * =========================================================
 * 2️⃣ How filter() is used for search
 * =========================================================
 *
 * - We loop through the countries array
 * - For each country, we check:
 *     Does the country name include the search query?
 *
 * - If yes (true) → keep the country
 * - If no  (false) → remove the country
 *
 * =========================================================
 * 3️⃣ includes() Function
 * =========================================================
 *
 * - includes() is a JavaScript string method
 * - It checks whether a string contains another string
 *
 * Example:
 *   "india".includes("ind") → true
 *   "france".includes("ind") → false
 *
 * - We use toLowerCase() on both:
 *     country name and query
 *   to make search case-insensitive
 *
 * =========================================================
 * 4️⃣ Why We Need State for Search Input
 * =========================================================
 *
 * - We need to store what the user types
 * - For that, we use React state (useState)
 *
 * Example:
 *   const [query, setQuery] = useState("")
 *
 * - query     → stores current input value
 * - setQuery  → updates the input value
 *
 * =========================================================
 * 5️⃣ Controlled Input Concept
 * =========================================================
 *
 * - Input field is controlled by React state
 *
 * Flow:
 *   User types in input
 *     ↓
 *   onChange event fires
 *     ↓
 *   setQuery() updates state
 *     ↓
 *   Component re-runs
 *     ↓
 *   filter() runs again
 *     ↓
 *   UI updates automatically
 *
 * =========================================================
 * 6️⃣ What is "Lifting Up the State"?
 * =========================================================
 *
 * - When multiple components need the same state
 * - We move (lift) the state to their common parent
 *
 * Example structure:
 *   App
 *    ├── SearchBar
 *    └── CountriesList
 *
 * - SearchBar updates the query
 * - CountriesList uses the query to filter data
 *
 * So:
 *   State is stored in App.jsx
 *   Passed down to children using props
 *
 * =========================================================
 * 7️⃣ React Data Flow Rule
 * =========================================================
 *
 * - Data always flows from Parent → Child
 * - Child cannot directly change parent state
 * - Parent passes functions (setQuery) to child
 *
 * =========================================================
 * 8️⃣ Final Search Flow (Big Picture)
 * =========================================================
 *
 * User types in input
 *        ↓
 * setQuery() updates state
 *        ↓
 * React re-runs component
 *        ↓
 * filter() filters data
 *        ↓
 * map() renders filtered list
 *
 * =========================================================
 * Conclusion:
 * =========================================================
 *
 * Search in React =
 *   JavaScript logic + React state + automatic re-rendering
 *
 * React itself does not provide search,
 * it just makes UI updates easy.
 */