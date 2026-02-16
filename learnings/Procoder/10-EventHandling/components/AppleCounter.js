// Import Button component
import Button from "./Button";

// Import arrow images
import LeftArrow from "../assets/images/left-arrow.png";
import RightArrow from "../assets/images/right-arrow.png";

// Import AppleBasket component
import AppleBasket from "./AppleBasket";

// Import CSS
import "./AppleCounter.css";

/*
 * AppleCounter Component
 * ----------------------
 * This component DEFINES the click logic
 * and PASSES it to Button as props.
 */
const AppleCounter = () => {

  // Total apples (fixed for now)
  const totalAppleCount = 10;

  // Normal variables (NOT state)
  let leftAppleCount = 10;
  let rightAppleCount = 0;

  // Runs when LEFT arrow button is clicked
  const leftClickHandler = () => {
    console.log("Left button clicked");

    // This logic runs, but UI will NOT update
    rightAppleCount--;
    leftAppleCount++;

    console.log("Left:", leftAppleCount, "Right:", rightAppleCount);
  };

  // Runs when RIGHT arrow button is clicked
  const rightClickHandler = () => {
    console.log("Right button clicked");

    rightAppleCount++;
    leftAppleCount--;

    console.log("Left:", leftAppleCount, "Right:", rightAppleCount);
  };

  return (
    <section>

      {/* Basket 1 (static display for now) */}
      <AppleBasket appleCount={10} basketName="Basket 1" />

      {/* Left arrow button */}
      <Button
        imageUrl={LeftArrow}
        clickHandler={leftClickHandler}
      />

      {/* Right arrow button */}
      <Button
        imageUrl={RightArrow}
        clickHandler={rightClickHandler}
      />

      {/* Basket 2 (static display for now) */}
      <AppleBasket appleCount={0} basketName="Basket 2" />

    </section>
  );
};

export default AppleCounter;
