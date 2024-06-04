import React from "react";
import InfocusLogo from "../Images/Ellipse.png";
import CicsLogo from "../Images/CICS.png";
import Avatar from "../Images/Avatar.png";
import "../AdminCSS/HeaderAdmin.css";


const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <img src={InfocusLogo} alt="" className="InfocusLogo" />
        <img src={CicsLogo} alt="" className="CicsLogo" />
        <div className="AvatarAdmin">
          <span className="headerWtext">Welcome, Admin</span>
          <img src={Avatar} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
