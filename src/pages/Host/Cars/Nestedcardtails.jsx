import React from "react";
import { useOutletContext } from "react-router-dom";

const Nestedcardtails = () => {
  const { car } = useOutletContext();
  console.log(car);
  return (
    <div className="details" style={{ padding: " 1rem 5rem" }}>
      <span>
        <h1>Name:</h1>
        <p style={{ opacity: ".5" }}>{car.name}</p>
      </span>
      <span>
        <h2>Catagory:</h2>
        <p style={{ opacity: ".5" }}>{car.type}</p>
      </span>
      <span>
        <h3>Description:</h3>
        <p style={{ opacity: ".5" }}>{car.description}</p>
      </span>
      <span>
        <h4>Visibility:</h4>
        <p style={{ opacity: ".5" }}>Public</p>
      </span>
    </div>
  );
};

export default Nestedcardtails;
