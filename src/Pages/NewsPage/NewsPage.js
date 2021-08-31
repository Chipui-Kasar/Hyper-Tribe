import React from "react";
import HeaderPage from "../HeaderPage/HeaderPage";
import { useState, useEffect } from "react";
// import { NewsData } from "../../AllData";
import "./NewsPage.css";
import { Link } from "react-router-dom";
import moment from "moment";

function NewsPage(props) {
  const [data, setData] = useState("");
  const [page, setPage] = useState(0); //initial page
  const [loading, setLoading] = useState(false); //

  useEffect(() => {
    fetch(
      `https://newsdata.io/api/1/news?apikey=pub_9690904634753207970627642fb208979fa&language=en&country=us,in&page=${page}&domain=mmafighting,sentinel,billboard,techcrunch,cheatsheet`
    )
      .then(res => res.json())
      .then(json => {
        setData([...data, ...json.results]);
        console.log(json);
      })
      .catch(err => {
        console.error(err);
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
      setLoading(true);
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
                  data.length > 0 &&
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
                      if (props.match.params.id === "All") {
                        return (
                          <div key={key}>
                            <Link
                              to={`/newsitem/${data.title}?params=${key}`}
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
                                <div className="dateInfo">
                                  {moment(data.pubDate).calendar()}
                                </div>
                              </div>
                              <b>
                                Source :<i>{data.source_id}</i>
                              </b>
                            </Link>
                          </div>
                        );
                      } else {
                        return (
                          <div key={key}>
                            <Link
                              to={`/newsitem/${data.source_id}`}
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
                                <div className="dateInfo">
                                  {moment(data.pubDate).calendar()}
                                </div>
                              </div>
                              <b>
                                Source :<i>{data.source_id}</i>
                              </b>
                            </Link>
                          </div>
                        );
                      }
                    })
                ) : (
                  <p className="spinner">
                    <i className="fas fa-spinner fa-pulse fa-3x"></i>
                  </p>
                )}
                {loading && (
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
