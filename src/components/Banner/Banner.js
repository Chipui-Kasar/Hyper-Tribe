import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Banner.css";
import { useHistory, useLocation } from "react-router-dom";

function Banner(props) {
  const [selectUser, setselectUser] = useState("All");
  const [data, setData] = useState([]);
  const [inputSearch, setinputSearch] = useState("");

  // let location = useLocation(); //For returning the same value when click on goback from newspage
  // console.log(location);
  const history = useHistory();
  const location = useLocation();

  const handleChange = event => {
    //console.log(event.target.value); //selected source
    props.onUserSelect(event.target.value);
    setselectUser(event.target.value);
    setinputSearch("");

    //Replacing the url link with the new selected value
    const { value } = event?.target;
    const params = new URLSearchParams({ source: value });
    history.replace({
      pathname: location.pathname,
      search: params.toString(),
    });

    // alert(user);
  };

  // useEffect(() => {
  //   var axios = require("axios").default;

  //   var options = {
  //     method: "GET",
  //     url: "https://bing-news-search1.p.rapidapi.com/news/",
  //     params: { textFormat: "Raw", safeSearch: "Off" },
  //     headers: {
  //       "x-bingapis-sdk": "true",
  //       "x-rapidapi-key": "98e7daf158mshc0af65e35f7176ep17a534jsn354044d71b21",
  //       "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       var list = response.data.value.filter(
  //         (name, i) =>
  //           response.data.value.findIndex(a => a.name === name.name) === i
  //       );
  //       setData(list);
  //       console.log(list);
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });

  //   let queryParams = new URLSearchParams(window.location.search);
  //   let value = queryParams.get("source");
  //   //Assigning null with All
  //   if (value == null) {
  //     value = "All";
  //   }
  //   //=======================
  //   setselectUser(value);
  //   props.onUserSelect(value);
  //   console.log(value);
  // }, []);

  useEffect(() => {
    //pub_867ab41db95ca4cb7da6110869b90ff70a3
    //pub_9624eeaf246ade8243281ba907274e97895
    //pub_9690904634753207970627642fb208979fa
    //  ,edexlive,thenewsminute
    //https://newsdata.io/api/1/news?apikey=YOUR_API_KEY&domain=ctvnews_london
    axios
      .get(
        `https://newsdata.io/api/1/news?apikey=pub_9690904634753207970627642fb208979fa&language=en&country=us,in&domain=mmafighting,billboard,techcrunch,sentinel,cheatsheet`
      )
      .then(response => {
        //Filtering out the duplicate name from the list of JSON
        var list = response.data.results.filter(
          (name, i) =>
            response.data.results.findIndex(
              a => a.source_id === name.source_id
            ) === i
        );
        setData(list);
        console.log(list);
      })
      .catch(errorMessage => {
        console.log("Error", errorMessage);
      });

    //For returning the same value when clicking on goback from newspage
    // let value = location.search.replace("?source=", "");
    // console.log(value);
    // setselectUser(value);
    // props.onUserSelect(value);

    let queryParams = new URLSearchParams(window.location.search);
    let value = queryParams.get("source");
    //Assigning null with All
    if (value == null) {
      value = "All";
    }
    //=======================
    setselectUser(value);
    props.onUserSelect(value);
    console.log(value);
    //For returning the same value when clicking on goback from newspage
  }, [props, setData]);

  //Search fitlter funtion
  const searching = event => {
    setinputSearch(event.target.value);
  };

  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="profileInfo">
            <p className="greet bannerColor">{props.greet}</p>
            <h2>
              <select value={selectUser} onChange={handleChange}>
                <option key="0">All</option>;
                {data.map((name, key) => {
                  return (
                    <>
                      <option key={key + 1}>{name.source_id}</option>
                    </>
                  );
                })}
              </select>
            </h2>
            <div className="bannerColor">
              <h3 className="time">Time : {props.time}</h3>
              <p>{props.date}</p>
            </div>
          </div>
          <div className="searchBox">
            <input
              type="text"
              value={inputSearch}
              onChange={searching}
              placeholder="Search"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
