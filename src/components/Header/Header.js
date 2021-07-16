import React from "react";
import logo from "../../images/logo.png";
import profile from "../../images/profileImg.png";
import "./Header.css";
function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <a className="logo" href="/">
            <img src={logo} alt="" />
          </a>
          <div className="profilerinfo">
            <div
              className="profileImg"
              style={{ background: `url(${profile})` }}
            ></div>
            <div className="profileName">Aayansh</div>
            <div className="profileDes">Managing Director</div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
