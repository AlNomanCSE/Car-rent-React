import React from "react";
import { useOutletContext } from "react-router-dom";

const Nestedcardtails = () => {
  const { car } = useOutletContext();
  console.log(car);
  return (
    <div className="details" style={{ padding: "2rem", width: "40rem" }}>
      <span>
        <h1>Name:</h1>
        <p>{car.name}</p>
      </span>
      <span>
        <h2>Catagory:</h2>
        <p>{car.type}</p>
      </span>
      <span>
        <h3>Description:</h3>
        <p>{car.description}</p>
      </span>
      <span>
        <h4>Visibility:</h4>
        <p>Public</p>
      </span>
    </div>
  );
};

export default Nestedcardtails;
