import React from "react";
import { useOutletContext } from "react-router-dom";

const Nestedcardprice = () => {
  const { car } = useOutletContext();
  return (
    <div className="priceDiv" style={{ padding: "2rem", width: "40rem" }}>
      <span>
        <h1>Price:</h1>
        <p>{car.price}</p>
      </span>
    </div>
  );
};

export default Nestedcardprice;
