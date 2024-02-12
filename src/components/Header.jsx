import React from "react";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import "./Header.modules.css";
const Header = () => {
  return (
    <div className="navigationbar">
      <div className="logo">
        <Link to="/">#CARLIFE</Link>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink to="/host">Host</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/cars">Cars</NavLink>
          </li>
          <li>
            <NavLink to="/login" style={{ fontSize: "1.5rem" }}>
              <CgProfile />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
