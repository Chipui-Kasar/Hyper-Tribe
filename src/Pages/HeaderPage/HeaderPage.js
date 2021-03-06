import React from "react";
import logo from "../../images/logo.png";
import profile from "../../images/profileImg.png";
import "./HeaderPage.css";
import { Link } from "react-router-dom";

function HeaderPage() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="col-md-3">
            <Link className="logo" to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="col-md-6">
            <div className="searchBox">
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="profilerinfo">
              <div
                className="profileImg"
                style={{ background: `url(${profile})` }}
              ></div>

              <div className="profileName">Aayansh</div>
              <div className="profileDes">Managing Director</div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderPage;
