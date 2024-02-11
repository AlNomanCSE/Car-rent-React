import React from "react";
import { useOutletContext } from "react-router-dom";

const NestedcardPhoto = () => {
  const { car } = useOutletContext();
  return (
    <div className="priceDiv" style={{ padding: " 1rem 5rem", width: "40rem" }}>
      <img
        src={car.imageUrl}
        style={{ height: "10rem", width: "15rem", borderRadius: "5px" }}
      ></img>
    </div>
  );
};

export default NestedcardPhoto;
