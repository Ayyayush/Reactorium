import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'

export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Runs only once when component mounts (empty dependency array)

   
    // Fetch all countries data from REST Countries API
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())                     // Convert response to JSON
      .then((data) => {
        setCountriesData(data)                       // Store API data in state
      })

    // Create an interval that runs every 1 second
    const intervalId = setInterval(() => {
      console.log('running countriesList component')
    }, 1000)

    // Cleanup function: runs when component unmounts
    return () => {
      clearInterval(intervalId)                      // Clear interval to prevent memory leak
    }
  }, [])

  useEffect(() => {
    // Runs every time `count` state changes
    console.log('hiii')
  }, [count])

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <div className="countries-container">
        {countriesData
          .filter((country) =>
            country.name.common.toLowerCase().includes(query)
          )
          .map((country) => (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}
            />
          ))}
      </div>
    </>
  )
}