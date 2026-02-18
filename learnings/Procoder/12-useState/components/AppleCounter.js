// Declarative Programming
// We describe WHAT UI should look like, not HOW to update DOM

import Button from './Button'

import LeftArrow from '../assets/images/left-arrow.png'
import RightArrow from '../assets/images/right-arrow.png'
import AppleBasket from './AppleBasket'
import './AppleCounter.css'

import { useState } from 'react'

const AppleCounter = () => {

  const totalAppleCount = 10                    // Fixed total apples

  // State for right basket
  const [rightAppleCount, setRightAppleCount] = useState(0)

  // State for left basket
  // Derived initially from total - right apples
  const [leftAppleCount, setLeftAppleCount] = useState(
    totalAppleCount - rightAppleCount
  )

  // Move apple from right → left
  const leftClickHandler = () => {
    if (rightAppleCount > 0) {                  // Prevent negative count
      setRightAppleCount(rightAppleCount - 1)   // Update right basket
      setLeftAppleCount(leftAppleCount + 1)     // Update left basket
    }
  }

  // Move apple from left → right
  const rightClickHandler = () => {
    if (leftAppleCount > 0) {                   // Prevent negative count
      setRightAppleCount(rightAppleCount + 1)   // Update right basket
      setLeftAppleCount(leftAppleCount - 1)     // Update left basket
    }
  }

  return (
    <>
      <section>

        {/* Left basket UI updates automatically from state */}
        <AppleBasket
          appleCount={leftAppleCount}
          basketName="Basket 1"
        />

        {/* Button receives handler as prop */}
        <Button
          clickHandler={leftClickHandler}
          imageUrl={LeftArrow}
          buttonName="Left Arrow"
        />

        <Button
          clickHandler={rightClickHandler}
          imageUrl={RightArrow}
          buttonName="Right Arrow"
        />

        {/* Right basket UI updates automatically from state */}
        <AppleBasket
          appleCount={rightAppleCount}
          basketName="Basket 2"
        />

      </section>

      {/* Dummy button – clicking this does NOTHING */}
      {/* React does NOT re-render unless state/props change */}
      <p style={{ textAlign: 'center', marginTop: '32px' }}>
        <button onClick={() => {}}>
          Re - Render
        </button>
      </p>
    </>
  )
}

export default AppleCounter

