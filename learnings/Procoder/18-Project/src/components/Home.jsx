/**
 * =========================================================
 * Home Component – Conditional Rendering & Unmounting
 * =========================================================
 *
 * This component demonstrates:
 * 1️⃣ useState for search query
 * 2️⃣ Passing state updater to child component
 * 3️⃣ Conditional rendering
 * 4️⃣ Component unmounting in React
 *
 * ---------------------------------------------------------
 * Imports
 * ---------------------------------------------------------
 *
 * - useState      → React hook to store state
 * - SearchBar     → Child component that updates query
 * - SelectMenu    → UI component (region filter)
 * - CountriesList → Component that renders countries
 */

import { useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'

export default function Home() {

  /*
   * =========================================================
   * 1️⃣ State Creation
   * =========================================================
   *
   * - query stores the text typed by the user
   * - setQuery updates the query state
   *
   * Initial state:
   *   query = ""
   */
  const [query, setQuery] = useState('')

  /*
   * =========================================================
   * 2️⃣ JSX Return
   * =========================================================
   *
   * - Home is a PAGE component
   * - It controls whether CountriesList is shown or not
   */
  return (
    <main>

      {/* Search & Filter UI */}
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>

      {/*
       * =====================================================
       * 3️⃣ Conditional Rendering
       * =====================================================
       *
       * Condition:
       *   query === "unmount"
       *
       * - If condition is TRUE:
       *     → render empty string ""
       *     → CountriesList is NOT rendered
       *
       * - If condition is FALSE:
       *     → render <CountriesList />
       *     → CountriesList is mounted
       *
       * This is a classic example of conditional rendering.
       */}

      {query === 'unmount' ? '' : <CountriesList query={query} />}

      {/*
       * =====================================================
       * 4️⃣ What does "Unmount" mean here?
       * =====================================================
       *
       * - When query becomes "unmount"
       * - React removes CountriesList from the DOM
       * - CountriesList component is UNMOUNTED
       *
       * Important:
       * - Component function is NOT running anymore
       * - Any useEffect cleanup inside CountriesList
       *   would run at this time
       */}

    </main>
  )
}

/*
 * =========================================================
 * MENTAL MODEL (VERY IMPORTANT)
 * =========================================================
 *
 * Initial load:
 *   query = ""
 *   → CountriesList is rendered
 *
 * User types "india":
 *   query = "india"
 *   → CountriesList is rendered
 *
 * User types "unmount":
 *   query = "unmount"
 *   → CountriesList is REMOVED from DOM
 *
 * ---------------------------------------------------------
 * This proves:
 * - Rendering in React is STATE-DRIVEN
 * - Components appear and disappear based on state
 * =========================================================
 */