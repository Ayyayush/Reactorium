// Import React so JSX can work
import React from 'react';

/*
 * AppleBasket Component
 * ---------------------
 * This component only DISPLAYS data.
 * It receives data from parent using props.
 */
const AppleBasket = ({ appleCount, basketName }) => {
  return (
    <div className="apple-basket">
      
      {/* Shows number of apples */}
      <h1>
        <span>{appleCount}</span> apples
      </h1>

      {/* Shows basket name */}
      <p>{basketName}</p>
    </div>
  );
};

export default AppleBasket;
