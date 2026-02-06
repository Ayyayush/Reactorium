/**
 * =====================================================
 * RENDERING MULTIPLE COMPONENTS IN REACT
 * =====================================================
 *
 * 🔹 Basic idea
 *
 * - React mein HTML file ke andar hum zyada UI nahi likhte
 * - HTML file mein sirf ek root container hota hai
 * - Saari UI JSX ke through React components mein likhi jaati hai
 *
 *
 * =====================================================
 * MULTIPLE COMPONENTS IN REACT
 * =====================================================
 *
 * - React application mein usually multiple components hote hain
 * - Har component apna ek specific kaam karta hai
 *
 * Example:
 * - Header
 * - Footer
 * - Sidebar
 * - Card
 *
 *
 * =====================================================
 * SINGLE FILE APPROACH (BASIC UNDERSTANDING)
 * =====================================================
 *
 * - Maan lo ek hi file mein multiple functions likh diye
 * - Har function ek component ko represent karta hai
 *
 * Example:
 *
 * function Header() { ... }
 * function Card() { ... }
 * function Footer() { ... }
 *
 * - In sab components ko ek parent container ke andar render kiya
 * - Parent container ko root mein render kar diya
 *
 * Ye approach basic understanding ke liye theek hai
 *
 *
 * =====================================================
 * REAL REACT PRACTICE (IMPORTANT)
 * =====================================================
 *
 * - Real projects mein:
 *   • Har component alag file mein hota hai
 *   • Code zyada clean aur maintainable hota hai
 *
 *
 * =====================================================
 * FILE-BASED COMPONENT STRUCTURE
 * =====================================================
 *
 * Example structure:
 *
 * src/
 * ├── components/
 * │   ├── Card.jsx
 * │   ├── Header.jsx
 * │   └── Footer.jsx
 * ├── App.jsx
 * └── main.jsx
 *
 *
 * =====================================================
 * APP.JSX KA ROLE
 * =====================================================
 *
 * - App.jsx usually main/root component hota hai
 * - Saare chhote components yahin import kiye jaate hain
 * - Saare components ko yahin combine kiya jaata hai
 *
 *
 * =====================================================
 * COURSE WEBSITE EXAMPLE
 * =====================================================
 *
 * - Maan lo ek course website hai
 * - Ek CourseCard component bana diya
 *
 * CourseCard ko:
 * - React reuse karta hai
 * - Alag-alag courses dikhane ke liye
 *
 *
 * =====================================================
 * REUSABILITY CONCEPT
 * =====================================================
 *
 * - Ek component ko multiple jagah use kiya ja sakta hai
 * - Data (props) change karke different output milta hai
 *
 *
 * =====================================================
 * FLOW (MENTAL MODEL)
 * =====================================================
 *
 * Individual Components
 *        ↓
 * App.jsx (combines everything)
 *        ↓
 * Root (ReactDOM.createRoot)
 *        ↓
 * Browser DOM
 *
 *
 * =====================================================
 * ONE-LINE REVISION
 * =====================================================
 *
 * React applications are built using multiple reusable
 * components that are usually defined in separate files
 * and combined in a single root component (App.jsx)
 * which is rendered into the DOM.
 */
