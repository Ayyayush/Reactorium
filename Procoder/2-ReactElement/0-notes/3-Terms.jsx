/* =========================
   REACT TERMINOLOGIES (JS)
   ========================= */

// React
// → JavaScript library jo UI build karne ke kaam aati hai

// ReactDOM
// → React ke banaye hue elements ko browser ke DOM mein render karta hai

// Component
// → UI ka reusable piece (usually ek function jo JSX return karta hai)

// JSX
// → HTML-jaisa syntax jo React UI describe karta hai
// → Internally React.createElement mein convert hota hai

// JSX Element
// → JSX ka ek single UI node (e.g. <h1>Hello</h1>)

// React.createElement
// → Core React function jo UI ke liye JavaScript object banata hai

// Render
// → React element ko browser screen par dikhana

// Root
// → Main DOM container jahan React app inject hoti hai (#root)

// createRoot
// → React 18 ka API jo root container create karta hai

// Embed
// → Kisi cheez ko kisi aur cheez ke andar fit / include kar dena
// → e.g. React UI ko HTML div ke andar dikhana

// Props
// → Parent se child component ko data pass karne ka tareeka
// → Read-only hota hai

// State
// → Component ka internal data jo change ho sakta hai
// → State change hone par UI re-render hoti hai

// Re-render
// → State ya props change hone par UI ka dobara update hona

// Virtual DOM
// → Real DOM ka lightweight copy jahan React pehle changes calculate karta hai

// Diffing
// → Virtual DOM aur Real DOM ke beech differences nikalna

// Reconciliation
// → Minimum changes real DOM mein apply karna

// Fragment
// → Extra div ke bina multiple elements ko wrap karna (<> </>)

// Hook
// → Special React functions jo state & lifecycle features dete hain

// useState
// → Hook jo component ke andar state manage karta hai

// useEffect
// → Side effects handle karta hai (API call, timer, event listeners)

// Controlled Component
// → Input jiska data React state control karta hai

// Uncontrolled Component
// → Input jiska data DOM khud manage karta hai

// StrictMode
// → Development tool jo potential issues highlight karta hai

// SPA (Single Page Application)
// → Page reload ke bina content update hona

// render  → screen pe dikhana
// embed   → andar fit karna
// props   → bahar se aaya data
// state   → andar ka data
// JSX     → HTML jaisa JS syntax
