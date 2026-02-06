/**
 * ===============================
 * WHY REACT NEEDS A BUNDLER (PARCEL)
 * ===============================
 *
 * 🔹 React ek client-side library hai
 *
 * - React ka kaam hai UI banana
 * - React browser ke andar hi run hota hai
 *
 *
 * 🔹 Browser kya samajhta hai?
 *
 * Browser directly samajhta hai:
 * - HTML
 * - CSS
 * - Plain JavaScript
 *
 * Browser directly samajh NHI paata:
 * - node_modules folder
 * - React code
 * - JSX
 * - import / export statements
 *
 *
 * 🔹 Browser ko node_modules kyun samajh nahi aata?
 *
 * - node_modules ek server-side concept hai
 * - Browser ke paas file-system access nahi hota
 * - Browser sirf wahi JS execute karta hai
 *   jo usko explicitly diya jaata hai
 *
 *
 * 🔹 Isliye browser React ko bhi directly nahi samajhta
 *
 * - React npm se install hota hai
 * - React code node_modules ke andar hota hai
 * - Browser ko nahi pata hota:
 *   • react kya hai
 *   • react-dom kya hai
 *
 *
 * 🔹 Example: axios vs react
 *
 * axios:
 * - axios library client side aur server side dono jagah chal sakti hai
 * - Browser axios ke bundled output ko samajh leta hai
 *
 * react:
 * - React sirf UI ke liye design ki gayi library hai
 * - JSX aur modern JS use karti hai
 * - Browser JSX ko samajh nahi paata
 *
 *
 * 🔹 Toh yahan kaam aata hai Parcel
 *
 * Parcel ek bundler hai jo:
 * - React code ko read karta hai
 * - JSX ko JavaScript mein convert karta hai (Babel ke through)
 * - node_modules ko resolve karta hai
 * - Sab files ko bundle bana deta hai
 *
 *
 * 🔹 Parcel React ko kya banata hai?
 *
 * Parcel React code ko:
 * - Browser-readable JavaScript mein convert karta hai
 * - Ek optimized bundle file banata hai
 *
 * Is bundle ko browser easily samajh leta hai
 *
 *
 * 🔹 Flow (important)
 *
 * React + JSX + node_modules
 *        ↓
 * Parcel (bundler + Babel)
 *        ↓
 * Plain JavaScript bundle
 *        ↓
 * Browser
 *
 *
 * 🔑 One-line Revision
 *
 * Browser React ya node_modules ko nahi samajhta,
 * isliye Parcel React code ko browser-friendly JavaScript
 * mein convert karke bundle banata hai.
 */
