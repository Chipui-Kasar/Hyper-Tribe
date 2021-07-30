import React from "react";
import "./News.css";
import { Link } from "react-router-dom";

function News(props) {
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
            {props.data ? (
              props.data.articles
                .filter(data => {
                  if (props.filterUser === null) {
                    return data;
                  }
                  if (props.filterUser !== "All") {
                    if (data.source.name === props.filterUser) {
                      return data;
                    }
                  } else {
                    return data;
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
