import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Banner.css";
import { useHistory, useLocation } from "react-router-dom";

function Banner(props) {
  const [selectUser, setselectUser] = useState("All");
  const [data, setData] = useState("");
  const [inputSearch, setinputSearch] = useState("");

  // let location = useLocation(); //For returning the same value when click on goback from newspage
  // console.log(location);
  const history = useHistory();
  const location = useLocation();

  const handleChange = event => {
    console.log(event.target.value);
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
  // const https = require("https");
  // // const SUBSCRIPTION_KEY = process.env["a959d86e28694aa2be8a1b1c47d20205"];
  // const SUBSCRIPTION_KEY = process.env["eaeb9ed2-2919-40f6-8c98-324e2178a021"];
  // // if (!SUBSCRIPTION_KEY) {
  // //   throw new Error("AZURE_SUBSCRIPTION_KEY is not set.");
  // // }

  // useEffect(query => {
  //   https.get(
  //     {
  //       hostname: "api.cognitive.microsoft.com",
  //       path: "/bing/v7.0/search?q=" + encodeURIComponent(query),
  //       headers: { "Ocp-Apim-Subscription-Key": SUBSCRIPTION_KEY },
  //     },
  //     res => {
  //       let body = "";
  //       res.on("data", part => (body += part));
  //       res.on("end", () => {
  //         for (var header in res.headers) {
  //           if (
  //             header.startsWith("bingapis-") ||
  //             header.startsWith("x-msedge-")
  //           ) {
  //             console.log(header + ": " + res.headers[header]);
  //           }
  //         }
  //         console.log("\nJSON Response:\n");
  //         console.dir(JSON.parse(body), { colors: false, depth: null });
  //       });
  //       res.on("error", e => {
  //         console.log("Error: " + e.message);
  //         throw e;
  //       });
  //     }
  //   );
  // });

  useEffect(() => {
    var axios = require("axios").default;

    var options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news/",
      params: { textFormat: "Raw", safeSearch: "Off" },
      headers: {
        "x-bingapis-sdk": "true",
        "x-rapidapi-key": "98e7daf158mshc0af65e35f7176ep17a534jsn354044d71b21",
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        var list = response.data.value.filter(
          (name, i) =>
            response.data.value.findIndex(a => a.name === name.name) === i
        );
        setData(list);
        console.log(list);
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });

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
  }, []);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=81849c4a33644af7934e6530eedb7195`
  //     )
  //     .then(response => {
  //       //Filtering out the duplicate name from the list of JSON
  //       var list = response.data.articles.filter(
  //         (name, i) =>
  //           response.data.articles.findIndex(
  //             a => a.source.name === name.source.name
  //           ) === i
  //       );
  //       setData(list);
  //       console.log(list);
  //     })
  //     .catch(errorMessage => {
  //       console.log("Error", errorMessage);
  //     });

  //   //For returning the same value when clicking on goback from newspage
  //   // let value = location.search.replace("?source=", "");
  //   // console.log(value);
  //   // setselectUser(value);
  //   // props.onUserSelect(value);

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
  //   //For returning the same value when clicking on goback from newspage
  // }, []);

  //Search fitlter funtion
  const searching = event => {
    setinputSearch(event.target.value);
  };

  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="profileInfo">
            <p>{props.greet}</p>
            <h2>
              <select value={selectUser} onChange={handleChange}>
                <option key="0">All</option>;
                {data
                  ? data.map((name, key) => {
                      return (
                        <>
                          <option key={key + 1}>{name.name}</option>
                        </>
                      );
                    })
                  : []}
              </select>
            </h2>
            <p>
              <h3 className="time">Time : {props.time}</h3>
              <p>{props.date}</p>
            </p>
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
