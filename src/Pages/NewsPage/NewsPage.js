import React from "react";
import HeaderPage from "../HeaderPage/HeaderPage";
import { useState, useEffect } from "react";
import axios from "axios";
// import { NewsData } from "../../AllData";

import "../../components/news/News.css";
import { Link } from "react-router-dom";
function NewsPage(props) {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=81849c4a33644af7934e6530eedb7195"
      )
      .then(response => {
        setData(response.data);
        console.log(response);
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
                  ? data.articles
                      .filter(data => {
                        if (props.match.params.id === data.source.name) {
                          return data;
                        }
                        if (props.match.params.id === data.All) {
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
                                <img src={data.urlToImage} />
                              </div>
                              <h3>{data.title}</h3>
                              <div className="dateTimeBox">
                                <div className="dateInfo">
                                  {data.publishedAt}
                                </div>
                              </div>
                              <p>{data.description}</p>
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
