import React, { useEffect } from "react";
import "./Cars.modules.css";
import cars from "../server";
import { Link, useSearchParams } from "react-router-dom";
const Cars = () => {
  // const getData = async () => {
  //   const response = await fetch("/api/vans");
  //   const data = await response.json();
  //   console.log(data);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const filterList = typeFilter
    ? cars.filter((car) => car.type.toLowerCase() === typeFilter)
    : cars;

  return (
    <>
      <div className="carpage">
        <div className="heading">
          <h1>Explore our van options</h1>
          <div className="filterDiv">
            {/* Option 1 as paramiters not a common way to use*/}
            {/* <button onClick={() => setSearchParams("type=simple")}>
                          or
            <button onClick={() => setSearchParams("?type=simple")}>
              Simple
            </button>
            <button onClick={() => setSearchParams("type=luxury")}>
              Luxury
            </button>
            <button onClick={() => setSearchParams("type=rugged")}>
              Rugged
            </button>
            <button className="clearbtn" onClick={() => setSearchParams("")}>
              Clear filters
            </button> */}
            {/* Option 2  as object common way to use*/}
            <button onClick={() => setSearchParams({ type: "simple" })}>
              Simple
            </button>
            <button onClick={() => setSearchParams({ type: "luxury" })}>
              Luxury
            </button>
            <button onClick={() => setSearchParams({ type: "rugged" })}>
              Rugged
            </button>
            <button className="clearbtn" onClick={() => setSearchParams({})}>
              Clear filters
            </button>
          </div>
        </div>
        <div className="displayCars">
          {filterList.map((car, index) => (
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
