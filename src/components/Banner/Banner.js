import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="profileInfo">
            <p>Good Morning !!!</p>
            <h2>Aayansh</h2>
            <p>10:34 AM Monday, September 18, 2020</p>
          </div>
          <div className="searchBox">
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
