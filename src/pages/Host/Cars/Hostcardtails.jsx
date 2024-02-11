import React from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { CgArrowLongLeft } from "react-icons/cg";
import "./Hostcardtails.modules.css";
import cars from "./server";

const Hostcardtails = () => {
  const { id } = useParams();

  return (
    <>
      <div
        style={{ padding: "1rem 5rem", display: "flex", fontSize: "1.2rem" }}
      >
        <NavLink
          to=".."
          relative="path"
          style={{ textDecoration: "none", padding: "2rem", color: "black" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CgArrowLongLeft />
            Back to all Cars
          </div>
        </NavLink>
      </div>
      <div className="hostcarddesign">
        {cars.map((car) =>
          car.id == id ? (
            <div key={id} className="mainDiv">
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
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: "500",
                      textTransform: "capitalize",
                    }}
                  >
                    {car.type}
                  </div>
                  <div style={{ fontSize: "", fontWeight: "" }}>{car.name}</div>
                  <div style={{ fontSize: "", fontWeight: "500" }}>
                    ${car.price}/day
                  </div>
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
