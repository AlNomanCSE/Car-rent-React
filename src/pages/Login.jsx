import "./Login.modules.css";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Login = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="form">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <form action="" className="formDiv">
        {action === "Login" ? (
          <></>
        ) : (
          <div className="inputs name">
            <FaUser />
            <input type="text" className="input" placeholder="Name" />
          </div>
        )}

        <div className="inputs email">
          <MdEmail />
          <input type="email" className="input" placeholder="Email" />
        </div>
        <div className="inputs password">
          <RiLockPasswordFill />
          <input type="password" className="input" placeholder="Password" />
        </div>
        {action === "Sign Up" ? (
          <></>
        ) : (
          <div className="forget-Password">
            Forgotten password? <span> Click Here!</span>
          </div>
        )}
        <div className="submit-Container">
          <button
            className={action === "Sign Up" ? "bgColor btn" : "btn"}
            onClick={(e) => {
              e.preventDefault();
              setAction("Sign Up");
            }}
          >
            Sign Up
          </button>

          <button
            className={action === "Login" ? "bgColor btn" : "btn"}
            onClick={(e) => {
              e.preventDefault();
              setAction("Login");
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
