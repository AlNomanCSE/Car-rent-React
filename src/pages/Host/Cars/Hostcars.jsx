import React from "react";
import cars from "./server.js";
import "./Hostcars.modules.css";
const Hostcars = () => {
  return (
    <>
      <div className="displaysize">
        <div className="hostcartag">
          <h1>Your Listed Cars</h1>
        </div>
        <div className="hostcards">
          {cars.map((car, index) => (
            <div className="hcard" key={index}>
              <div
                className="hcardimage"
                style={{ backgroundImage: `url(${car.imageUrl})` }}
              ></div>

              <div className="hcardtext">
                <div className="hcarname">{car.name}</div>
                <div className="">
                  ${car.price} <p>/day</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Hostcars;
