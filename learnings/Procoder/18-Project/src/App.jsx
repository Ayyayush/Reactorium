import Header from './components/Header'
import SearchBar from './components/SearchBar'
import SelectMenu from './components/SelectMenu'
import CountriesList from './components/CountriesList'
import countriesData from './countriesData'
import { useState } from 'react'
import './App.css'

const App = () => {

  /*
   * =========================================================
   * 1️⃣ STATE CREATION (OWNER = App component)
   * =========================================================
   *
   * - query stores whatever the user types in search input
   * - setQuery is a function that updates query
   *
   * IMPORTANT:
   * - This state lives in App because:
   *   SearchBar needs to UPDATE it
   *   CountriesList needs to USE it
   *
   * This is called "lifting state up"
   */
  const [query, setQuery] = useState("")

  /*
   * =========================================================
   * 2️⃣ FILTER LOGIC (PURE JAVASCRIPT)
   * =========================================================
   *
   * - filter() loops over ALL countries
   * - includes() returns true / false for EACH country
   *
   * VERY IMPORTANT MENTAL MODEL:
   * - Boolean is NOT stored anywhere
   * - Boolean is used ONLY to decide:
   *     true  → keep country
   *     false → remove country
   *
   * Final result:
   * - filteredCountries is a NEW ARRAY
   * - It contains ONLY matching country objects
   */
  const filteredCountries = countriesData.filter((country) =>
    country.name.common
      .toLowerCase()
      .includes(query.toLowerCase())
  )

  /*
   * =========================================================
   * 3️⃣ JSX RETURN (UI DERIVED FROM STATE)
   * =========================================================
   *
   * - App re-runs every time query changes
   * - JSX is recalculated on every re-run
   * - React updates only the changed DOM
   */
  return (
    <>
      <Header />

      <main>
        <div className="search-filter-container">

          {/*
           * Passing setQuery DOWN to SearchBar
           *
           * Meaning:
           * - App owns the state
           * - SearchBar is allowed to update it
           *
           * Data flow:
           * App  → passes function → SearchBar
           */}
          <SearchBar setQuery={setQuery} />

          <SelectMenu />
        </div>

        {/*
         * Passing filteredCountries DOWN to CountriesList
         *
         * Meaning:
         * - CountriesList does NOT know about search
         * - It only renders whatever data it receives
         */}
        <CountriesList countries={filteredCountries} />
      </main>
    </>
  )
}

export default App