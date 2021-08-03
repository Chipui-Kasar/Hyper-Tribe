import React from "react";
import HeaderPage from "../HeaderPage/HeaderPage";
import { useState, useEffect } from "react";
import axios from "axios";
// import { NewsData } from "../../AllData";

import "../../components/news/News.css";
import { Link } from "react-router-dom";
function NewsPage(props) {
  const [data, setData] = useState("");

  useEffect(() => {
    var axios = require("axios").default;

    var options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news",
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
        setData(response.data.value);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <>
      <HeaderPage />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Link to={`/?source=${props.match.params.id}`}>
              <button className="btn btn-success">Go back</button>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="whiteBox paddingLR0 p50">
              <div className="whiteBox__heading">NEWS</div>

              <div className="newsInfo">
                {data
                  ? data
                      .filter(data => {
                        if (props.match.params.id === "All") {
                          return data;
                        }
                        if (props.match.params.id === "") {
                          return data;
                        }
                        if (props.match.params.id === data.name) {
                          return data;
                        }
                      })
                      .map((data, key) => {
                        return (
                          <div key={key.id}>
                            <a
                              href={data.url}
                              target="_blank"
                              className="newsList"
                              rel="noreferrer"
                            >
                              <div className="newsList__img">
                                <img src={data.image.thumbnail.contentUrl} />
                              </div>
                              <h3>{data.name}</h3>
                              <div className="dateTimeBox">
                                <div className="dateInfo">
                                  {data.datePublished}
                                </div>
                              </div>

                              <p>{data.description}</p>
                              <b>Source:{data.provider.name}</b>
                            </a>
                          </div>
                        );
                      })
                  : "Loading"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsPage;
