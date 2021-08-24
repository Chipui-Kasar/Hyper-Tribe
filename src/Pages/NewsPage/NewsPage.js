import React from "react";
import HeaderPage from "../HeaderPage/HeaderPage";
import { useState, useEffect } from "react";
import axios from "axios";
// import { NewsData } from "../../AllData";
import "./NewsPage.css";
import { Link } from "react-router-dom";
function NewsPage(props) {
  const [data, setData] = useState("");
  const [page, setPage] = useState(0); //initial page

  useEffect(() => {
    fetch(
      `https://newsdata.io/api/1/news?apikey=pub_934d2e1f46f4c5a81004674c78ed660d2b4&language=en&country=us,in&page=${page}`
    )
      .then(res => res.json())
      .then(json => {
        setData([...data, ...json.results]);
        console.log(json);
      })

      .catch(error => {
        console.error(error);
      });
  }, [page]);

  const scrollToEnd = () => {
    setPage(page + 1);
  };
  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };
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
              <div className="whiteBox__heading">News</div>
              <div className="pageInfo">
                {data ? (
                  data
                    .filter(data => {
                      if (props.match.params.id === "All") {
                        return data;
                      }
                      if (props.match.params.id === "") {
                        return data;
                      }
                      if (props.match.params.id === data.source_id) {
                        return data;
                      }
                    })

                    .map((data, key) => {
                      return (
                        <div key={key.id}>
                          <Link
                            to={`/newsitem/${data.title}`}
                            className="newsList"
                            key={key}
                          >
                            <div className="newsList__img">
                              <img src={data.image_url} alt={data.title} />
                            </div>
                            <div className="truncate">
                              <h3>{data.title}</h3>
                            </div>

                            <p className="desc">{data.description}</p>
                            <div className="dateTimeBox">
                              <div className="dateInfo">{data.pubDate}</div>
                            </div>
                            <b>
                              Source :<i>{data.source_id}</i>
                            </b>
                          </Link>
                        </div>
                      );
                    })
                ) : (
                  <p className="spinner">
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

export default NewsPage;
