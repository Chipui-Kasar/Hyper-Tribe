import React from "react";
import logo from "../../images/logo.png";
import profile from "../../images/profileImg.png";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <Link className="logo" to="/">
            <img src={logo} alt="" />
          </Link>
          <Link to="/?profile" className="profilerinfo">
            <div
              className="profileImg"
              style={{ background: `url(${profile})` }}
            ></div>
            <div className="profileName">Aayansh</div>
            <div className="profileDes">Managing Director</div>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
