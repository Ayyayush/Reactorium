/**
 * =========================================================
 * How setQuery() works internally (useState mental model)
 * =========================================================
 *
 * Assume this state exists in App.jsx:
 *
 *   const [query, setQuery] = useState("")
 *
 * ---------------------------------------------------------
 * 🔹 BEFORE user types anything
 * ---------------------------------------------------------
 *
 * useState returns an ARRAY internally like this:
 *
 *   [
 *     query = "",
 *     setQuery = function updateQuery(newValue) { ... }
 *   ]
 *
 * So initially:
 *
 *   query = ""
 *
 * ---------------------------------------------------------
 * 🔹 User types "india" in the input field
 * ---------------------------------------------------------
 *
 * onChange event runs in SearchBar:
 *
 *   onChange={(e) => setQuery(e.target.value)}
 *
 * Which becomes:
 *
 *   setQuery("india")
 *
 * IMPORTANT:
 * - setQuery is JUST A FUNCTION
 * - It does NOT directly change query immediately
 *
 * ---------------------------------------------------------
 * 🔹 What setQuery("india") actually does
 * ---------------------------------------------------------
 *
 * 1️⃣ React stores the NEW value ("india") internally
 * 2️⃣ React marks App component for RE-RENDER
 * 3️⃣ Current App function execution STOPS
 *
 * ❌ query is NOT updated instantly here
 *
 * ---------------------------------------------------------
 * 🔹 App component runs AGAIN (re-render)
 * ---------------------------------------------------------
 *
 * React now calls:
 *
 *   App()
 *
 * This time, useState returns:
 *
 *   [
 *     query = "india",
 *     setQuery = same function reference
 *   ]
 *
 * So AFTER re-render:
 *
 *   query = "india"
 *
 * ---------------------------------------------------------
 * 🔹 Filter logic runs with NEW query value
 * ---------------------------------------------------------
 *
 *   filteredCountries = countriesData.filter(...)
 *
 * Internally for EACH country:
 *
 *   "india".includes("india")       → true
 *   "indonesia".includes("india")   → false
 *   "france".includes("india")      → false
 *
 * IMPORTANT:
 * - includes() returns boolean TEMPORARILY
 * - Boolean is NOT stored anywhere
 *
 * ---------------------------------------------------------
 * 🔹 FINAL RESULT
 * ---------------------------------------------------------
 *
 * filteredCountries = [ India ]
 *
 * This array is then passed to CountriesList
 * and UI updates automatically.
 *
 * ---------------------------------------------------------
 * ❌ COMMON WRONG THINKING (VERY IMPORTANT)
 * ---------------------------------------------------------
 *
 * ❌ setQuery does NOT:
 *    - store filteredCountries in query
 *    - store boolean values
 *    - directly modify query variable
 *
 * ---------------------------------------------------------
 * ✅ CORRECT MENTAL MODEL (SAVE THIS)
 * ---------------------------------------------------------
 *
 * setQuery(newValue)
 *      ↓
 * React schedules state update
 *      ↓
 * App component re-runs
 *      ↓
 * useState returns UPDATED value
 *      ↓
 * Logic runs again using new state
 *      ↓
 * UI updates
 *
 * ---------------------------------------------------------
 * ONE-LINE SUMMARY (INTERVIEW READY)
 * ---------------------------------------------------------
 *
 * setQuery does not directly change the state value.
 * It schedules a state update, causes the component
 * to re-render, and during the next render React
 * provides the updated state value.
 */