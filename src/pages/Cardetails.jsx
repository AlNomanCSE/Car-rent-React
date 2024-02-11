import React from "react";
import "./Cardtails.modules.css";
import { CgArrowLongLeft } from "react-icons/cg";
import {
  NavLink,
  useLoaderData,
  useLocation,
  useParams,
} from "react-router-dom";
const Cardetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const cars = useLoaderData();
  console.log(location);
  const search = location.state?.search || "";
  const type = location.state?.type || "all";
  return (
    <>
      <div
        style={{ padding: "1rem 5rem", display: "flex", fontSize: "1.2rem" }}
      >
        <NavLink
          to={`..${search}`}
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
            Back to {type} Cars
          </div>
        </NavLink>
      </div>
      <div className="cardetails">
        {cars.map((car) =>
          car.id == id ? (
            <div className="showCard" key={car.id}>
              <div
                className="image"
                style={{ backgroundImage: `url(${car.imageUrl})` }}
              ></div>
              <div className="nameNbill" style={{ margin: "1rem 0 1rem 0 " }}>
                <div className="name">{car.name}</div>
                <div className="bill">
                  ${car.price} <p className="perday">/day</p>
                </div>
              </div>
              <div className="cardsDetals" style={{ margin: "0 0 1rem 0 " }}>
                <p>{car.description}</p>
              </div>
              <div className="type">
                <button>{car.type}</button>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </>
  );
};

export default Cardetails;
