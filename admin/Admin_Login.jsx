import React from "react";
import "../admin/AdminCSS/AdminLogin.css";
import { Link } from "react-router-dom";

function AdminLogin() {
  return (
    <div className="LoginContainer">
      <h2>Welcome back</h2>
      <div className="Log-subtitle">
        <p className="LogBtext">
          Today is a new day. It's your day. You shape it. Sign in to start
          managing your projects.
        </p>
      </div>
      <div className="LogInput">
        <div className="LogInputfield">
          <span className="Uname">Username</span>
          <input type="text" className="LogtextInput" />
        </div>
        <div className="LogInputfield">
          <span className="Uname">Password</span>
          <input type="text" className="LogtextInput" />
        </div>
      </div>
      <span>
        <a href="" className="LogFpass">
          Forgot password?
        </a>
      </span>
      <Link to="Admin_panel"><button className="btnAdmin">Log in</button></Link>
    </div>
  );
}

export default AdminLogin;
