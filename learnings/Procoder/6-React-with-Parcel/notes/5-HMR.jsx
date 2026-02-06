/**
 * ===============================
 * HMR (HOT MODULE REPLACEMENT)
 * ===============================
 *
 * 🔹 What is HMR?
 *
 * HMR ka full form hota hai:
 * 👉 Hot Module Replacement
 *
 * HMR ek feature hai jo allow karta hai
 * application ke specific parts (modules)
 * ko update karna bina poora page reload kiye.
 *
 *
 * ===============================
 * HMR KYA KARTA HAI?
 * ===============================
 *
 * - Code change hota hai
 * - Sirf changed file / module update hota hai
 * - Browser refresh nahi hota
 * - Application ka state preserve rehta hai
 *
 *
 * ===============================
 * HMR KAISE KAAM KARTA HAI?
 * ===============================
 *
 * 1️⃣ Developer code change karta hai
 *
 * 2️⃣ Bundler (Parcel / Webpack / Vite / CRA)
 *    change detect karta hai
 *
 * 3️⃣ Bundler sirf affected module ko recompile karta hai
 *
 * 4️⃣ Browser ko bataya jaata hai:
 *    "Sirf ye module update karo"
 *
 * 5️⃣ Browser bina reload ke UI update karta hai
 *
 *
 * ===============================
 * PAGE RELOAD vs HMR
 * ===============================
 *
 * ❌ Normal Reload:
 * - Poora page reload hota hai
 * - JavaScript state reset ho jaata hai
 * - Slow experience
 *
 * ✅ HMR:
 * - Sirf changed module update hota hai
 * - State same rehta hai
 * - Fast development experience
 *
 *
 * ===============================
 * HMR KA USE KYA HAI?
 * ===============================
 *
 * - Faster development
 * - Better developer experience
 * - UI changes instantly dikhti hain
 * - Form data / state lose nahi hota
 *
 *
 * ===============================
 * HMR IN POPULAR TOOLS
 * ===============================
 *
 * Parcel:
 * - Built-in HMR
 * - Zero configuration
 *
 * Webpack:
 * - HMR supported
 * - Manual configuration required
 *
 * Vite:
 * - Extremely fast HMR
 * - Uses native ES modules
 *
 * CRA (Create React App):
 * - HMR enabled by default
 *
 *
 * ===============================
 * REACT + HMR (IMPORTANT)
 * ===============================
 *
 * - React components hot-swap ho jaate hain
 * - UI update hota hai without full reload
 * - State preserved rehta hai
 *
 *
 * ===============================
 * ONE-LINE REVISION
 * ===============================
 *
 * HMR allows updating only the changed part
 * of an application in the browser without
 * reloading the entire page.
 */
