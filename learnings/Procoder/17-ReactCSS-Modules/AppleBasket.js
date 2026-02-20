import React from "react";

/*
 * AppleBasket Component
 * ---------------------
 * Ye ek CHILD component hai
 * Ye sirf data receive karta hai via props
 * Is component ka kaam sirf UI render karna hai
 */
const AppleBasket = ({ appleCount, basketName }) => {
  return (
    <div className="apple-basket">
      <h1>
        <span>{appleCount}</span> apples
        {/*
         * Ternary Operator
         * Agar appleCount 10 hai → Basket Full show karo
         * Warna → kuch bhi render mat karo
         */}
        {appleCount === 10 ? <span> — Basket Full 🍎</span> : null}
      </h1>

      <p>
        {basketName}
        {appleCount === 10 && " full"}
        {appleCount===0 && "empty"}
        {appleCount===5 && "half full"}
      </p>
    </div>
  );
};

export default AppleBasket;
