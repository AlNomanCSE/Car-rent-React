import React, { useEffect } from "react";
import "./Cars.modules.css";
import cars from "../server";
import { Link } from "react-router-dom";
const Cars = () => {
  // const getData = async () => {
  //   const response = await fetch("/api/vans");
  //   const data = await response.json();
  //   console.log(data);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <div className="carpage">
        <div className="heading">
          <h1>Explore our van options</h1>
          <div className="filterDiv">
            <button>Simple</button>
            <button>Luxury</button>
            <button>Rugged</button>
            <button className="clearbtn">Clear filters</button>
          </div>
        </div>
        <div className="displayCars">
          {cars.map((car, index) => (
            <div className="card" key={index}>
              <div
                className="image"
                style={{ backgroundImage: `url(${car.imageUrl})` }}
              ></div>
              <Link to={`/cars/${car.id}`}>
                <div className="nameNbill">
                  <div className="name">{car.name}</div>
                  <div className="bill">
                    ${car.price} <p className="perday">/day</p>
                  </div>
                </div>
                <div className="type">
                  <button>{car.type}</button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cars;
