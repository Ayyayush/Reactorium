/**
 * React Fragments (Beginner Hinglish – DETAIL MEIN)
 *
 * ------------------------------------------------------------
 * What are React Fragments?
 * ------------------------------------------------------------
 * React Fragment ek special wrapper hota hai
 * jo multiple JSX elements ko group karta hai
 * WITHOUT extra HTML node add kiye.
 *
 * Simple words:
 * 👉 Fragment = invisible wrapper
 *
 * ------------------------------------------------------------
 * Problem kya hoti hai (WITHOUT Fragment)?
 * ------------------------------------------------------------
 *
 * React rule:
 * ❌ Ek component sirf EK parent element return kar sakta hai
 *
 * Galat code:
 *
 * return (
 *   <h1>Hello</h1>
 *   <p>World</p>
 * );
 *
 * Ye error dega ❌
 *
 * ------------------------------------------------------------
 * Traditional solution (but not ideal)
 * ------------------------------------------------------------
 *
 * return (
 *   <div>
 *     <h1>Hello</h1>
 *     <p>World</p>
 *   </div>
 * );
 *
 * ❌ Extra <div> DOM mein add ho jaata hai
 * ❌ Layout / CSS bigad sakta hai
 *
 * ------------------------------------------------------------
 * Why use React Fragments?
 * ------------------------------------------------------------
 *
 * ✔ Extra div add nahi hota
 * ✔ Clean DOM structure
 * ✔ Better CSS & layout control
 * ✔ Performance slightly better
 *
 * ------------------------------------------------------------
 * Syntax of React Fragments
 * ------------------------------------------------------------
 *
 * 1️⃣ Full syntax
 *
 * <React.Fragment>
 *   <h1>Hello</h1>
 *   <p>World</p>
 * </React.Fragment>
 *
 * ------------------------------------------------------------
 * 2️⃣ Short syntax (MOST USED)
 *
 * <>
 *   <h1>Hello</h1>
 *   <p>World</p>
 * </>
 *
 * 👉 Ye empty tags hi Fragment hote hain
 *
 * ------------------------------------------------------------
 * VERY BASIC DEMO CODE
 * ------------------------------------------------------------
 */

import React from "react";

const FragmentDemo = () => {
  return (
    <>
      {/* Multiple elements without extra div */}
      <h1>Hello</h1>
      <p>I am using React Fragment</p>
    </>
  );
};

export default FragmentDemo;

/**
 * ------------------------------------------------------------
 * DOM OUTPUT (IMPORTANT)
 * ------------------------------------------------------------
 *
 * ❌ Without Fragment:
 *
 * <div>
 *   <h1>Hello</h1>
 *   <p>World</p>
 * </div>
 *
 * ------------------------------------------------------------
 * ✅ With Fragment:
 *
 * <h1>Hello</h1>
 * <p>World</p>
 *
 * (No extra wrapper)
 *
 * ------------------------------------------------------------
 * When SHOULD you use Fragment?
 * ------------------------------------------------------------
 *
 * ✔ When you don’t want extra div
 * ✔ When layout / CSS break ho raha ho
 * ✔ When returning table rows (<tr>)
 *
 * ------------------------------------------------------------
 * Fragment with key (Advanced hint)
 * ------------------------------------------------------------
 *
 * <React.Fragment key={id}>
 *   ...
 * </React.Fragment>
 *
 * (Mostly used in lists)
 *
 * ------------------------------------------------------------
 * One-line Interview Answer
 * ------------------------------------------------------------
 *
 * React Fragments allow grouping of multiple elements
 * without adding extra nodes to the DOM.
 */

