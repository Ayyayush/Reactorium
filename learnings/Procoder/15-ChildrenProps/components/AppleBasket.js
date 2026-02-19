import React from 'react'

/*
 * AppleBasket Component
 * ---------------------
 * Ye ek CHILD component hai
 * Ye sirf data receive karta hai via props
 */
const AppleBasket = ({ appleCount, basketName }) => {
  return (
    <div className="apple-basket">
      <h1>
        <span>{appleCount}</span> apples
      </h1>
      <p>{basketName}</p>
    </div>
  )
}

export default AppleBasket
