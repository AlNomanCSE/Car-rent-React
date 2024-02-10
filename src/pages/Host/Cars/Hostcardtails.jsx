import React from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { CgArrowLongLeft } from "react-icons/cg";
import "./Hostcardtails.modules.css";
import cars from "./server";

const Hostcardtails = () => {
  const { id } = useParams();

  return (
    <>
      <div style={{ padding: "2rem" }}>
        <NavLink to=".." relative="path">
          <span>
            <CgArrowLongLeft />
            {`   `} Back to all cars
          </span>
        </NavLink>
      </div>
      <div className="hostcarddesign">
        {cars.map((car) =>
          car.id == id ? (
            <div key={id} className="mainDiv">
              <div></div>
              <div className="firstDiv">
                <img
                  src={car.imageUrl}
                  style={{
                    width: "15rem",
                    height: "10rem",
                    borderRadius: "10px",
                  }}
                />
                <div className="cardTNP">
                  <div className="">{car.type}</div>
                  <div className="">{car.name}</div>
                  <div className="">${car.price}/day</div>
                </div>
              </div>
              <div className="finalnav">
                <NavLink
                  to="."
                  end
                  className={({ isActive }) => (isActive ? "navactive" : "")}
                >
                  Details
                </NavLink>
                <NavLink
                  to="price"
                  className={({ isActive }) => (isActive ? "navactive" : "")}
                >
                  Price
                </NavLink>
                <NavLink
                  to="image"
                  className={({ isActive }) => (isActive ? "navactive" : "")}
                >
                  Image
                </NavLink>
              </div>
              <Outlet context={{ car }} />
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </>
  );
};

export default Hostcardtails;
