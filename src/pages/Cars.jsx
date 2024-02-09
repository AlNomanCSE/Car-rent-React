import React, { useEffect } from "react";
import "./Cars.modules.css";
import cars from "../server";
const Cars = () => {
  return (
    <>
      <div className="carpage">
        <div className="heading">
          <h1>
            <h3>Explore our van options</h3>
          </h1>
          <div className="filterDiv">
            <button>Simple</button>
            <button>Luxury</button>
            <button>Rugged</button>
            <button className="clearbtn">Clear filters</button>
          </div>
        </div>
        <div className="displayCars">
          {cars.map((car) => (
            <div className="card">
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
              <div className="type">
                <button>{car.type}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cars;
