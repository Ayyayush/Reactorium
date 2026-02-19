// Declarative Programming
// We describe WHAT UI should look like, not HOW to update DOM

import Button from './Button'

import LeftArrow from '../assets/images/left-arrow.png'
import RightArrow from '../assets/images/right-arrow.png'
import AppleBasket from './AppleBasket'
import './AppleCounter.css'

import { useState } from 'react'

// Here we focus on the concept of passing data to CHILD components using props
const AppleCounter = () => {

  const totalAppleCount = 10

  const [rightAppleCount, setRightAppleCount] = useState(0)
  const [leftAppleCount, setLeftAppleCount] = useState(
    totalAppleCount - rightAppleCount
  )

  const leftClickHandler = () => {
    if (rightAppleCount > 0) {
      setRightAppleCount(rightAppleCount - 1)
      setLeftAppleCount(leftAppleCount + 1)
    }
  }

  const rightClickHandler = () => {
    if (leftAppleCount > 0) {
      setRightAppleCount(rightAppleCount + 1)
      setLeftAppleCount(leftAppleCount - 1)
    }
  }

  return (
    <>
      <section>

        {/* Passing data as props to child component */}
        <AppleBasket
          appleCount={leftAppleCount}
          basketName="Basket 1"
        />

        {/* Passing function + image as props to Button */}
        <Button
          clickHandler={leftClickHandler}
          imageUrl={LeftArrow}
          buttonName="Left Arrow"
        />

        {/* Same Button component reused with different props */}
        <Button
          clickHandler={rightClickHandler}
          imageUrl={RightArrow}
          buttonName="Right Arrow"
        />

        {/* Same child component with different prop values */}
        <AppleBasket
          appleCount={rightAppleCount}
          basketName="Basket 2"
        />

      </section>
    </>
  )
}

export default AppleCounter
