// Import Button component
import Button from "./Button";

// Import arrow images
import LeftArrow from '../assets/images/left-arrow.png';
import RightArrow from '../assets/images/right-arrow.png';

// Import AppleBasket component
import AppleBasket from "./AppleBasket";

// Import CSS file
import './AppleCounter.css';

/*
 * AppleCounter Component
 * ----------------------
 * This is the main container for baskets and buttons.
 * It arranges all child components.
 */
const AppleCounter = () => {
  return (
    <section>

      {/* Basket 1 with 10 apples */}
      <AppleBasket appleCount={10} basketName="Basket 1" />

      {/* Button with left arrow image */}
      <Button imageUrl={LeftArrow} />

      {/* Button with right arrow image */}
      <Button imageUrl={RightArrow} />

      {/* Basket 2 with 0 apples */}
      <AppleBasket appleCount={0} basketName="Basket 2" />

    </section>
  );
};

export default AppleCounter;
