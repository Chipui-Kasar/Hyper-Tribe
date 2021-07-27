import React from "react";
import "./News.css";
// import NewsData from "../../Data/JSONDATA.json";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function News(props) {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=81849c4a33644af7934e6530eedb7195"
      )
      .then(response => {
        setData(response.data);
        // console.log(response);
      })
      .catch(errorMessage => {
        console.log("Error", errorMessage);
      });
  }, []);

  return (
    <>
      <div className="col-md-5">
        <div className="whiteBox paddingLR0 p50">
          <div className="whiteBox__heading">{props.title}</div>
          <Link
            to={`/newspage/${props.filterUser}`}
            target="_self"
            className="viewAll"
          >
            View All
          </Link>
          <div className="newsInfo">
            {data ? (
              data.articles
                .filter(data => {
                  if (data.source.name === props.filterUser) {
                    return data;
                  } else {
                    return false;
                  }
                })
                .map((news, key) => {
                  return (
                    <a
                      href={news.url}
                      target="_blank"
                      className="newsList"
                      key={key}
                      rel="noreferrer"
                    >
                      <div className="newsList__img">
                        <img src={news.urlToImage} alt={news.title} />
                      </div>
                      <h3>{news.title}</h3>
                      <div className="dateTimeBox">
                        <div className="dateInfo">{news.publishedAt}</div>
                        <div className="timeInfo"></div>
                        <br />
                        <label>Source: {news.source.name}</label>
                      </div>

                      <p className="desc">
                        Praesent sagittis eu ante vel tincidunt. Integer nulla
                        nibh, fringilla sit amet purus a, lobortis…
                      </p>
                    </a>
                  );
                })
            ) : (
              <p
                style={{
                  textAlign: "center",
                  paddingTop: "20px",
                  fontWeight: 600,
                }}
              >
                Loading......
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
