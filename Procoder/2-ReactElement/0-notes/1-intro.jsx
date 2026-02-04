/**
 * React ko import karne ke multiple tareeke hote hain
 *
 * 1️⃣ CDN Link
 * - CDN link ke 2 parts hote hain:
 *   • React
 *   • ReactDOM
 *
 * 2️⃣ React
 * - React ek core JavaScript library hai
 * - Ye UI elements / components create karta hai
 * - React platform independent hota hai
 *   • Browser → ReactJS
 *   • Mobile  → React Native
 * - React sirf elements / objects banata hai
 * - React khud browser pe kuch render nahi karta
 *
 * 3️⃣ ReactDOM
 * - ReactDOM browser-specific library hai
 * - Ye React ke banaye hue elements ko DOM ke andar render karta hai
 * - React Native mein ReactDOM use nahi hota
 *   • Wahan react-native apna renderer deta hai
 *
 * 4️⃣ Flow (Working)
 *   React    → UI elements / objects create karta hai
 *   ReactDOM → un objects ko browser DOM mein render karta hai
 *
 * 5️⃣ Important Points
 * - react aur react-dom dono alag-alag libraries hain
 * - React import karne se React object milta hai
 * - ReactDOM import karne se ReactDOM object milta hai
 *
 * 6️⃣ Under the Hood
 * - React pure JavaScript mein likhi hui library hai
 * - Koi magic nahi hota
 * - Sab kuch JS objects & functions hote hain
 * - Core React library zyada heavy nahi hoti
 *
 * 🔑 One-line Revision:
 * React UI banata hai, ReactDOM us UI ko browser mein dikhata hai
 */


/**
 * JSX Element
 *
 * JSX ek HTML-like syntax hai jo React UI describe karta hai
 * Lekin internally ye JavaScript object ban jata hai
 *
 * ⚠️ JSX HTML nahi hai
 * ✅ JSX React.createElement() mein convert hota hai
 */


// Simple JSX element
<h1>Hello React</h1>
// Behind the scenes (JSX convert ho jata hai)
React.createElement(
    "h1",
    null,
    "Hello React"
);


/**
 * why do we have $$typeof: symbol in react
 */