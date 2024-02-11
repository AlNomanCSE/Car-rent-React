import React from "react";
import { useOutletContext } from "react-router-dom";

const Nestedcardprice = () => {
  const { car } = useOutletContext();
  return (
    <div className="priceDiv" style={{ padding: " 1rem 5rem" }}>
      <span>
        <h1>Price:</h1>
        <p style={{ opacity: ".7" }}>{car.price}</p>
      </span>
    </div>
  );
};

export default Nestedcardprice;
