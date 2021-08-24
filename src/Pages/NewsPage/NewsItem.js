import React from "react";
import HeaderPage from "../HeaderPage/HeaderPage";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../components/news/News.css";
import "./NewsItem.css";
// import { NewsData } from "../../AllData";

import { Link } from "react-router-dom";

function NewsItem(props) {
  const [data, setData] = useState("");
  const [index, setIndex] = useState(data.indexOf(props.match.params.id));

  console.log(index);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://newsdata.io/api/1/news?apikey=pub_934d2e1f46f4c5a81004674c78ed660d2b4&language=en&country=us,in`
  //     )
  //     .then(res => {
  //       setData(res.data.results);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);
  useEffect(() => {
    fetch(
      `https://newsdata.io/api/1/news?apikey=pub_934d2e1f46f4c5a81004674c78ed660d2b4&language=en&country=us,in`
    )
      .then(res => res.json())
      .then(json => {
        setData([...data, ...json.results]);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const nextClick = () => {
    setIndex((index + 1) % data.length);
  };

  const previousClick = () => {
    setIndex((index - 1 + data.length * data.length) % data.length);
  };

  const item = data[index];
  return (
    <>
      <HeaderPage />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Link to={`/newspage/All`}>
              <button className="btn btn-success">Back</button>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="whiteBox paddingLR0 p50">
              <div className="whiteBox__heading">NEWS</div>

              <div className="button-container">
                <div className="frame">
                  <div className="buttons" onClick={previousClick}>
                    <i className="fa fa-backward"></i>
                  </div>
                  <div className="buttons" onClick={nextClick}>
                    <i className="fas fa-forward"></i>
                  </div>
                </div>
              </div>

              <div className="newsInfo">
                {data ? (
                  data
                    .filter(data => {
                      if (props.match.params.id === data.title) {
                        return data;
                      }
                      if (props.match.params.id === data.source_id) {
                        return data;
                      }
                    })
                    .map(item => {
                      return (
                        <div>
                          <a
                            href={item.url}
                            target="_blank"
                            className="newsList"
                            rel="noreferrer"
                          >
                            <div className="newsList__img">
                              <img src={item.image_url} alt={item.title} />
                            </div>
                            <div>
                              <h2>{item.title}</h2>
                            </div>
                            <p>{item.content}</p>
                            <p>{item.description}</p>
                            <div className="dateTimeBox">
                              <div className="dateInfo">{item.pubDate}</div>
                            </div>
                            <b>
                              Source :<i>{item.source_id}</i>
                            </b>
                            <br />
                            Position : {index + 1}
                          </a>
                        </div>
                      );
                    })
                ) : (
                  <p className="spinner text-center">
                    <i className="fas fa-spinner fa-pulse fa-3x"></i>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NewsItem;
