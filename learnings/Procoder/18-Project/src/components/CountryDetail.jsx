import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './CountryDetail.css'

export default function CountryDetail() {

  /*
   * =========================================================
   * 1️⃣ Read URL parameter using React Router
   * =========================================================
   *
   * URL example:
   *   /country/India
   *
   * useParams() returns:
   *   { name: "India" }
   */
  const { name } = useParams()

  /*
   * Used for back navigation
   */
  const navigate = useNavigate()

  /*
   * =========================================================
   * 2️⃣ State to store fetched country data
   * =========================================================
   */
  const [countryData, setCountryData] = useState(null)

  /*
   * =========================================================
   * 3️⃣ Fetch data when route param changes
   * =========================================================
   */
  useEffect(() => {

    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        setCountryData({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName || {})[0]?.common,
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          capital: data.capital,
          flag: data.flags.svg,
          tld: data.tld?.join(', '),
          languages: Object.values(data.languages || {}).join(', '),
          currencies: Object.values(data.currencies || {})
            .map((currency) => currency.name)
            .join(', '),
        })
      })
      .catch((err) => {
        console.error("Failed to fetch country details", err)
      })

  }, [name])   // 🔥 dependency is IMPORTANT

  /*
   * =========================================================
   * 4️⃣ Loading state
   * =========================================================
   */
  if (countryData === null) {
    return <p style={{ padding: '20px' }}>Loading...</p>
  }

  /*
   * =========================================================
   * 5️⃣ UI Rendering
   * =========================================================
   */
  return (
    <main>
      <div className="country-details-container">

        {/* Back Button */}
        <button className="back-button" onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </button>

        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />

          <div className="details-text-container">
            <h1>{countryData.name}</h1>

            <div className="details-text">
              <p><b>Native Name:</b> {countryData.nativeName}</p>
              <p><b>Population:</b> {countryData.population.toLocaleString('en-IN')}</p>
              <p><b>Region:</b> {countryData.region}</p>
              <p><b>Sub Region:</b> {countryData.subregion}</p>
              <p><b>Capital:</b> {countryData.capital?.join(', ')}</p>
              <p><b>Top Level Domain:</b> {countryData.tld}</p>
              <p><b>Currencies:</b> {countryData.currencies}</p>
              <p><b>Languages:</b> {countryData.languages}</p>
            </div>

            <div className="border-countries">
              <b>Border Countries:</b>
              {/* (can be implemented later) */}
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}