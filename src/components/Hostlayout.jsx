import React from "react";
import "./Hostlayout.modules.css";
import { NavLink, Outlet } from "react-router-dom";
const Hostlayout = () => {
  return (
    <>
      <div className="navigation">
        <ul>
          <li>
            <NavLink to="/host">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/host/income">Income</NavLink>
          </li>
          <li>
            <NavLink to="/host/reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Outlet/>
    </>
  );
};

export default Hostlayout;
