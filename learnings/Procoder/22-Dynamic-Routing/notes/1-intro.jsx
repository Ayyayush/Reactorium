/**
 * =========================================================
 * What is Dynamic Routing in React?
 * =========================================================
 *
 * 🔹 Dynamic Routing ka matlab hota hai:
 * - URL ka kuch part dynamic (changeable) hota hai
 * - Same component different data ke saath render hota hai
 *
 * Example:
 *   /country/India
 *   /country/Croatia
 *   /country/Brazil
 *
 * Yahan:
 * - "/country" → fixed part
 * - ":name"    → dynamic part
 *
 * =========================================================
 * Why do we need Dynamic Routing?
 * =========================================================
 *
 * Agar hume:
 * - Har country ke liye alag page banana ho
 * - Lekin har page ka layout same ho
 *
 * Toh hum:
 * - Ek hi component use karte hain
 * - Data URL se dynamically fetch karte hain
 *
 * Dynamic routing:
 * - Code duplication avoid karta hai
 * - App ko scalable banata hai
 *
 * =========================================================
 * How to create a Dynamic Route?
 * =========================================================
 *
 * React Router mein dynamic route banane ke liye:
 * - Route path mein ":" (colon) lagate hain
 *
 * Example:
 *
 *   {
 *     path: 'country/:name',
 *     element: <CountryDetail />
 *   }
 *
 * Yahan:
 * - ":name" ek route parameter hai
 *
 * =========================================================
 * What is Route Parameter?
 * =========================================================
 *
 * Route parameter:
 * - URL ka dynamic value hota hai
 * - Jo component ke andar access kiya ja sakta hai
 *
 * Example URL:
 *   /country/India
 *
 * Route param:
 *   name = "India"
 *
 * =========================================================
 * What is useParams()?
 * =========================================================
 *
 * useParams():
 * - React Router ka hook hai
 * - Route parameters ko read karne ke liye use hota hai
 *
 * Syntax:
 *
 *   const params = useParams()
 *
 * Example:
 *
 *   const { name } = useParams()
 *
 * Agar URL ho:
 *   /country/Croatia
 *
 * Toh:
 *   name = "Croatia"
 *
 * =========================================================
 * Why do we use useParams()?
 * =========================================================
 *
 * useParams() use karne ke fayde:
 * - URL se dynamic data milta hai
 * - Same component multiple pages ke liye reuse hota hai
 * - API calls URL ke basis par ho paati hain
 *
 * Example:
 *   fetch(`https://api.com/country/${name}`)
 *
 * =========================================================
 * High-Level Mental Model (VERY IMPORTANT)
 * =========================================================
 *
 * User clicks a country card
 *          ↓
 * URL changes to /country/India
 *          ↓
 * React Router matches 'country/:name'
 *          ↓
 * CountryDetail component renders
 *          ↓
 * useParams() gives name = "India"
 *          ↓
 * API call runs using name
 *
 * =========================================================
 * Interview One-Liner
 * =========================================================
 *
 * "Dynamic routing allows us to render the same component
 * for multiple URLs by using route parameters, which can
 * be accessed using the useParams hook."
 *
 * =========================================================
 */