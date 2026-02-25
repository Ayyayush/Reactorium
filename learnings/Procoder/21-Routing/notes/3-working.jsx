/**
 * =========================================================
 * Why Child Routes & Outlet are Needed in React Router
 * =========================================================
 *
 * 🔹 Problem (Naive Approach)
 * ---------------------------------------------------------
 * Maan lo hamare project mein multiple pages hain:
 *   - Home
 *   - Contact
 *   - Country Detail
 *
 * Aur hume Header (navbar) sab pages par dikhana hai.
 *
 * Ek approach ye ho sakta hai:
 * - Har page component mein Header import kar lo
 *
 * Example:
 *   Home.jsx        → <Header />
 *   Contact.jsx     → <Header />
 *   Country.jsx     → <Header />
 *
 * ❌ Ye approach sahi nahi maana jata:
 * - Repetition (code duplicate hota hai)
 * - Maintenance problem (Header change → sab files change)
 * - Not scalable
 *
 * =========================================================
 * Better & Reusable Approach: Child Routes
 * =========================================================
 *
 * React Router ek better solution deta hai:
 * 👉 Child Routes (Nested Routes)
 *
 * Idea:
 * - Ek common layout banao (App.jsx)
 * - Usme common cheeze rakho (Header)
 * - Baaki pages ko child routes bana do
 *
 * =========================================================
 * App.jsx as a Layout Component
 * =========================================================
 *
 * App.jsx ka role:
 * - Header render karna
 * - Ek placeholder dena jahan page change hoga
 *
 * Ye placeholder hota hai:
 * 👉 <Outlet />
 *
 * =========================================================
 * What is <Outlet /> ?
 * =========================================================
 *
 * Outlet ek special component hai react-router-dom ka.
 *
 * Meaning:
 * - "Yahan child route ka component render karo"
 *
 * So:
 * - App.jsx always render hoga
 * - Outlet ke andar page change hota rahega
 *
 * =========================================================
 * App.jsx Example
 * =========================================================
 *
 * function App() {
 *   return (
 *     <>
 *       <Header />
 *       <Outlet />
 *     </>
 *   )
 * }
 *
 * =========================================================
 * Child Routes Configuration
 * =========================================================
 *
 * createBrowserRouter([
 *   {
 *     path: "/",
 *     element: <App />,
 *     children: [
 *       { index: true, element: <Home /> },
 *       { path: "contact", element: <Contact /> },
 *       { path: "country/:name", element: <CountryDetail /> }
 *     ]
 *   }
 * ])
 *
 * =========================================================
 * What does index: true mean?
 * =========================================================
 *
 * index: true ka matlab:
 * - Ye default child route hai
 * - Jab path sirf "/" ho
 * - Tab kaunsa component dikhe?
 *
 * So:
 *   "/" → App + Home
 *
 * index: true is same as:
 *   path: ""
 *
 * But index:true is the recommended & cleaner way.
 *
 * =========================================================
 * Why Home.jsx?
 * =========================================================
 *
 * Ab App.jsx sirf layout ban gaya:
 * - Header
 * - Outlet
 *
 * Isliye actual page content (search, list, filters)
 * Home.jsx mein shift kar dete hain.
 *
 * Separation of concerns:
 * - App.jsx  → Layout
 * - Home.jsx → Page logic
 *
 * =========================================================
 * Final Mental Model (VERY IMPORTANT)
 * =========================================================
 *
 * URL = "/"
 *   → Router renders App
 *   → Outlet renders Home
 *
 * URL = "/contact"
 *   → Router renders App
 *   → Outlet renders Contact
 *
 * URL = "/country/India"
 *   → Router renders App
 *   → Outlet renders CountryDetail
 *
 * =========================================================
 * One-line Summary (Interview Ready)
 * =========================================================
 *
 * Child routes allow us to create a shared layout using
 * App.jsx and dynamically render page components inside
 * it using <Outlet />, avoiding duplication and making
 * the app scalable.
 */