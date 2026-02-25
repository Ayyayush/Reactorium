/**
 * =========================================================
 * Country Detail Page – React Router Concepts
 * =========================================================
 *
 * Ab hum country ka detail page banayenge.
 *
 * Jab user kisi country card pe click kare:
 *   → URL change hoga
 *   → Example: /country/India
 *   → CountryDetail component render hoga
 *
 * =========================================================
 * VS Code Shortcut
 * =========================================================
 *
 * Ctrl + D  → Same word ko next occurrence pe select karta hai
 * Ctrl + Shift + L → Same word jitni baar file mein hai sab select karta hai
 *
 * =========================================================
 * What is useParams?
 * =========================================================
 *
 * useParams ek React Router ka hook hai.
 *
 * ✔ Yes, it is a hook.
 *
 * Definition (Hinglish):
 * useParams ek hook hai jo hume URL ke dynamic
 * parameters read karne deta hai.
 *
 * Example route:
 *   path: "country/:name"
 *
 * Agar URL ho:
 *   /country/India
 *
 * Toh:
 *   const { name } = useParams()
 *
 * name = "India"
 *
 * =========================================================
 * Syntax of useParams
 * =========================================================
 *
 * import { useParams } from "react-router-dom"
 *
 * function CountryDetail() {
 *   const params = useParams()
 *   console.log(params)
 * }
 *
 * OR directly destructure:
 *
 * const { name } = useParams()
 *
 * =========================================================
 * Mental Model of useParams
 * =========================================================
 *
 * URL: /country/India
 *          ↓
 * Router matches path: country/:name
 *          ↓
 * useParams() returns { name: "India" }
 *
 * =========================================================
 * What is useNavigate?
 * =========================================================
 *
 * useNavigate bhi ek React Router hook hai.
 *
 * Ye hume programmatically navigation karne deta hai.
 *
 * Matlab:
 * Button click hone par manually URL change kar sakte hain.
 *
 * Definition (Hinglish):
 * useNavigate ek hook hai jo hume code ke through
 * kisi dusre route pe le jaane deta hai bina page reload ke.
 *
 * =========================================================
 * Syntax of useNavigate
 * =========================================================
 *
 * import { useNavigate } from "react-router-dom"
 *
 * function CountryDetail() {
 *   const navigate = useNavigate()
 *
 *   return (
 *     <button onClick={() => navigate("/")}>
 *       Go Home
 *     </button>
 *   )
 * }
 *
 * =========================================================
 * When to use useNavigate?
 * =========================================================
 *
 * ✔ Back button banana ho
 * ✔ Form submit hone ke baad redirect karna ho
 * ✔ Login hone ke baad dashboard pe bhejna ho
 * ✔ Kisi condition ke basis pe redirect karna ho
 *
 * Example: Back button
 *
 * navigate(-1)
 *
 * Meaning:
 * - Browser history mein ek step peeche jao
 *
 * =========================================================
 * Difference: Link vs useNavigate
 * =========================================================
 *
 * <Link to="/contact" />
 * → Used in JSX navigation
 *
 * useNavigate()
 * → Used inside functions / event handlers
 *
 * =========================================================
 * One-Line Summary (Interview Ready)
 * =========================================================
 *
 * useParams is a React Router hook used to access
 * dynamic URL parameters.
 *
 * useNavigate is a React Router hook used to navigate
 * programmatically between routes without reloading the page.
 */