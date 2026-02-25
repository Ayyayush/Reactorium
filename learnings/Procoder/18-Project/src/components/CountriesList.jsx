import { useEffect, useState } from 'react'
import CountryCard from './CountriesCard'

export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetch(
      'https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital'
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCountriesData(data)
        } else {
          setCountriesData([])
        }
      })
      .catch(() => {
        setCountriesData([])
      })

    const intervalId = setInterval(() => {
      console.log('CountriesList is mounted')
    }, 1000)

    return () => {
      clearInterval(intervalId)
      console.log('CountriesList unmounted')
    }
  }, [])

  useEffect(() => {
    console.log('Count changed:', count)
  }, [count])

  const filteredCountries = countriesData.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
     
      <div className="countries-container">
        {filteredCountries.map((country) => (
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