import React from "react";
import { NavLink } from "react-router-dom";

const Errorpage = () => {
  return (
    <div
      style={{
        height: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>404 Not Found Page</h1>
      <NavLink>
        <button
          style={{
            height: "3rem",
            width: "10rem",
            backgroundColor: "chocolate",
            border: "none",
            margin: "2rem",
            borderRadius: "5px",
            color: "#fff",
            cursor: "pointer",
            transition: "all .3s",
            fontWeight: "700",
          }}
          onMouseEnter={(e) => (e.target.style.scale = "1.1")}
          onMouseLeave={(e) => (e.target.style.scale = "1")}
        >
          Back to Previous page
        </button>
      </NavLink>
    </div>
  );
};

export default Errorpage;
