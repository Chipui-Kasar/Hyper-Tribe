import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Banner.css";
import { useLocation } from "react-router-dom";

function Banner(props) {
  const [selectUser, setselectUser] = useState("");
  const [data, setData] = useState("");

  let location = useLocation(); //For returning the same value when click on goback from newspage
  console.log(location);

  const handleChange = event => {
    props.onUserSelect(event.target.value);
    setselectUser(event.target.value);

    // alert(user);
  };

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=81849c4a33644af7934e6530eedb7195"
      )
      .then(response => {
        //Filtering out the duplicate name from the list of JSON
        var list = response.data.articles.filter(
          (name, i) =>
            response.data.articles.findIndex(
              a => a.source.name === name.source.name
            ) === i
        );
        setData(list);
        console.log(list);
      })
      .catch(errorMessage => {
        console.log("Error", errorMessage);
      });
    //For returning the same value when click on goback from newspage
    let value = location.search.replace("?source=", "");
    console.log(value);
    setselectUser(value);
    props.onUserSelect(value);
    //For returning the same value when click on goback from newspage
  }, []);

  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="profileInfo">
            <p>{props.greet}</p>
            <h2>
              <select value={selectUser} onChange={handleChange}>
                {data
                  ? data.map((name, key) => {
                      return <option key={key}>{name.source.name}</option>;
                    })
                  : []}
              </select>
            </h2>
            <p>
              <h3 className="time">Time : {props.time}</h3>
              <p>{props.date}</p>

              {/* <label>Time: {props.time}</label>
              <label style={{ marginLeft: "40px" }}>Date: {props.date}</label> */}
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
