import React from "react";
import { useState } from "react";
import "./Banner.css";

function Banner(props) {
  const [selectUser, setselectUser] = useState("");

  const user = ["All", "Chipui", "Suba", "Anish"];

  const handleChange = event => {
    props.onUserSelect(event.target.value);
    setselectUser(event.target.value);
    // alert(user);
  };

  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="profileInfo">
            <p>{props.greet}</p>
            <h2>
              <select value={selectUser} onChange={handleChange}>
                {user.map((name, key) => {
                  return <option key={key}>{name}</option>;
                })}
              </select>
            </h2>
            <p>
              <label>Time: {props.time}</label>
              <label style={{ marginLeft: "40px" }}>Date: {props.date}</label>
            </p>
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
