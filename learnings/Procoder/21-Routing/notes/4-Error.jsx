/**
 * =========================================================
 * Error.jsx Page – React Router Error Handling
 * =========================================================
 *
 * 🔹 Why do we need an Error Page?
 * ---------------------------------------------------------
 * Error page tab render hota hai jab:
 * - User galat URL type kare (404)
 * - Koi route load hone mein fail ho jaye
 * - API call fail ho jaye (loader / data error)
 * - Kisi route ke component mein runtime error aa jaye
 *
 * Isse benefit:
 * - Poori app crash nahi hoti
 * - User ko proper error message milta hai
 * - Better user experience milta hai
 *
 * =========================================================
 * Error Page kab render hota hai?
 * ---------------------------------------------------------
 *
 * Jab hum createBrowserRouter mein likhte hain:
 *
 *   {
 *     path: "/",
 *     element: <App />,
 *     errorElement: <Error />
 *   }
 *
 * Agar is route ya iske child routes mein
 * koi bhi error aata hai,
 * toh React Router automatically <Error /> render karta hai.
 *
 * =========================================================
 * What is useRouteError()?
 * ---------------------------------------------------------
 *
 * useRouteError ek hook hai jo react-router-dom provide karta hai.
 *
 * Ye hook hume:
 * - Us error ka object deta hai
 * - Jo route render hone ke time aaya hota hai
 *
 * Simple words mein:
 * useRouteError() = "route ke andar aayi hui error ka data"
 *
 * =========================================================
 * useRouteError() se kya milta hai?
 * ---------------------------------------------------------
 *
 * useRouteError() usually ek object return karta hai jisme:
 * - status       → HTTP-like status code (404, 500, etc.)
 * - statusText   → Short error message
 * - message      → Detailed error message (if any)
 *
 * Example:
 *   {
 *     status: 404,
 *     statusText: "Not Found"
 *   }
 *
 * =========================================================
 * Rules to keep in mind while creating Error Page
 * ---------------------------------------------------------
 *
 * 1️⃣ Error component ko sirf errorElement ke andar use karo
 *
 * 2️⃣ useRouteError hook:
 *    - Sirf Error component ke andar use karo
 *    - Normal components mein use nahi hota
 *
 * 3️⃣ Error handling safe honi chahiye:
 *    - error?.status
 *    - error?.message
 *
 * 4️⃣ Error page lightweight hona chahiye
 *    - Heavy logic mat rakho
 *
 * =========================================================
 * Basic Error.jsx Syntax
 * ---------------------------------------------------------
 *
 * import { useRouteError } from "react-router-dom"
 *
 * export default function Error() {
 *   const error = useRouteError()
 *
 *   return (
 *     <div>
 *       <h1>Something went wrong</h1>
 *       <p>{error.status}</p>
 *     </div>
 *   )
 * }
 *
 * =========================================================
 * Hinglish Definition (Interview Friendly)
 * ---------------------------------------------------------
 *
 * Error.jsx ek special page hota hai jo React Router ke
 * errorElement ke through render hota hai.
 * Ye page tab dikhta hai jab kisi route ko load karte time
 * koi error aa jaye.
 *
 * useRouteError ek hook hai jo hume us specific route ki
 * error details deta hai jisse hum user ko proper message
 * dikha sakte hain.
 *
 * =========================================================
 * One-line Summary
 * ---------------------------------------------------------
 *
 * Error page React Router ka safety net hota hai jo app ko
 * crash hone se bachata hai aur route-level errors ko handle karta hai.
 */