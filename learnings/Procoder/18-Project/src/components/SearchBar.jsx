import React from 'react'

export default function SearchBar({ setQuery }) {

  /*
   * =========================================================
   * SearchBar DOES NOT have its own state
   * =========================================================
   *
   * - It receives setQuery from App
   * - It does NOT store query itself
   *
   * Its only responsibility:
   * - Capture user input
   * - Inform App about input change
   */

  return (
    <div className="search-container">
      <i className="fa-solid fa-magnifying-glass"></i>

      <input
        type="text"
        placeholder="Search for a country..."

        /*
         * =====================================================
         * onChange WORKFLOW (MOST IMPORTANT PART)
         * =====================================================
         *
         * 1️⃣ User types a character
         * 2️⃣ onChange event fires
         * 3️⃣ e.target.value gives input text
         * 4️⃣ setQuery(value) is called
         * 5️⃣ App state updates
         * 6️⃣ App component RE-RUNS
         * 7️⃣ filter logic runs again
         * 8️⃣ UI updates automatically
         */
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  )
}

/**
 * how setQuery willl work here 
 * aman lo use stae array ein qury="" tha
 * setQuery(e.targt.value kiya toh ye toh ek fucntion hai ye chlega 
 * aur jaake query mein filtredcotunties ka data query pe rakh dega    right ?)
 */