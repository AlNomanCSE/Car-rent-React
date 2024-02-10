import React from "react";
import "./Hostlayout.modules.css";
import { NavLink, Outlet } from "react-router-dom";
const Hostlayout = () => {
  return (
    <>
      <div className="navigation">
        <ul>
          <li>
            <NavLink
              to="/host"
              end
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/host/income"
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              Income
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/host/cars"
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              Cars
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/host/reviews"
              className={({ isActive }) => (isActive ? "active-link" : null)}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Hostlayout;
