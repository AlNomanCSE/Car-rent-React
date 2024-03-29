import React, { useEffect } from "react";
import "./Cars.modules.css";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";

const Cars = () => {
  // const getData = async () => {
  //   const response = await fetch("/api/vans");
  //   const data = await response.json();
  //   console.log(data);
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  const cars = useLoaderData();
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
            <button
              onClick={() => setSearchParams({ type: "simple" })}
              className={typeFilter === "simple" ? "selected" : null}
            >
              Simple
            </button>
            <button
              onClick={() => setSearchParams({ type: "luxury" })}
              className={typeFilter === "luxury" ? "selected" : null}
            >
              Luxury
            </button>
            <button
              onClick={() => setSearchParams({ type: "rugged" })}
              className={typeFilter === "rugged" ? "selected" : null}
            >
              Rugged
            </button>
            {typeFilter ? (
              <button className="clearbtn" onClick={() => setSearchParams({})}>
                Clear filters
              </button>
            ) : null}
          </div>
        </div>
        <div className="displayCars">
          {filterList.map((car, index) => (
            <div className="card" key={index}>
              <div
                className="image"
                style={{ backgroundImage: `url(${car.imageUrl})` }}
              ></div>
              <Link
                to={car.id}
                state={{
                  search: `?${searchParams.toString()}`,
                  type: typeFilter,
                }}
              >
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
