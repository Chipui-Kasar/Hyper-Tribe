import React from "react";
import "./News.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

function News(props) {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://newsdata.io/api/1/news?apikey=pub_9690904634753207970627642fb208979fa&language=en&country=us,in&domain=mmafighting,sentinel,billboard,techcrunch,cheatsheet`
      )
      .then(response => {
        setData(response.data.results);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div className="col-md-5">
        <div className="whiteBox paddingLR0 p50">
          <div className="whiteBox__heading">{props.title}</div>
          <Link to={`/newspage/${props.filterUser}`} className="viewAll">
            View All
          </Link>
          <div className="newsInfo">
            {data ? (
              data
                .filter(data => {
                  //===============================
                  if (props.filterUser === null) {
                    return data;
                  }

                  if (props.filterUser !== "All") {
                    if (data.source_id === props.filterUser) {
                      return data;
                    } else {
                      return false;
                    }
                  } else {
                    return data;
                  }
                })
                .map((news, key) => {
                  return (
                    <Link
                      to={`/newsitem/${news.title}?params=${key}`}
                      className="newsList"
                      key={key}
                    >
                      <div className="newsList__img">
                        <img src={news.image_url} alt={news.title} />
                      </div>
                      <div className="truncate">
                        <h3>{news.title}</h3>
                      </div>

                      <p className="desc">{news.description}</p>

                      <div className="dateTimeBox">
                        <div className="dateInfo">
                          {moment(news.pubDate).calendar()}
                        </div>
                        <br />

                        <label>
                          Source :<i>{news.source_id}</i>
                        </label>
                      </div>
                    </Link>
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
                <i className="fas fa-spinner fa-pulse fa-3x"></i>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
