import React from "react";
import "./Cardtails.modules.css";
import cars from "../server";
import { useParams } from "react-router-dom";
const Cardetails = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <div className="cardetails">
      {cars.map((car) =>
        car.id == params.id ? (
          <div className="showCard" key={car.id}>
            <div
              className="image"
              style={{ backgroundImage: `url(${car.imageUrl})` }}
            ></div>
            <div className="nameNbill">
              <div className="name">{car.name}</div>
              <div className="bill">
                ${car.price} <p className="perday">/day</p>
              </div>
            </div>
            <div className="cardsDetals">
              <p>{car.description}</p>
            </div>
            <div className="type">
              <button>{car.name}</button>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default Cardetails;
