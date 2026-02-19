import LeftArrow from '../assets/images/left-arrow.png'
import RightArrow from '../assets/images/right-arrow.png'
import AppleBasket from './AppleBasket'
import Button from './Button'

import './AppleCounter.css'
import { useState } from 'react'

/*
 * AppleCounter Component
 * ----------------------
 * Ye PARENT component hai
 * Ye state manage karta hai
 * Aur data + functions children ko props ke through deta hai
 */
const AppleCounter = () => {

  const totalAppleCount = 10

  // State for baskets
  const [rightAppleCount, setRightAppleCount] = useState(0)
  const [leftAppleCount, setLeftAppleCount] = useState(
    totalAppleCount - rightAppleCount
  )

  // Left arrow click handler
  const leftClickHandler = () => {
    if (rightAppleCount > 0) {
      setRightAppleCount(rightAppleCount - 1)
      setLeftAppleCount(leftAppleCount + 1)
    }
  }

  // Right arrow click handler
  const rightClickHandler = () => {
    if (leftAppleCount > 0) {
      setRightAppleCount(rightAppleCount + 1)
      setLeftAppleCount(leftAppleCount - 1)
    }
  }

  return (
    <section>

      {/* Passing state as props to child */}
      <AppleBasket
        appleCount={leftAppleCount}
        basketName="Basket 1"
      />

      {/* children passed between Button tags */}
      <Button clickHandler={leftClickHandler} imageUrl={LeftArrow}>
        Left Arrow
      </Button>

      {/* children passed explicitly as prop (LESS COMMON) */}
      <Button
        clickHandler={rightClickHandler}
        imageUrl={RightArrow}
        children="Right Arrow"
      />

      {/* Passing different props to same child component */}
      <AppleBasket
        appleCount={rightAppleCount}
        basketName="Basket 2"
      />

    </section>
  )
}

export default AppleCounter
