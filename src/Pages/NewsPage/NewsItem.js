import React from "react";
import HeaderPage from "../HeaderPage/HeaderPage";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../components/news/News.css";
import "./NewsItem.css";
// import { NewsData } from "../../AllData";
import { Link } from "react-router-dom";
import moment from "moment";
import { useHistory, useLocation } from "react-router-dom";

function NewsItem(props) {
  const query = new URLSearchParams(window.location.search);
  const params = query.get("params");
  console.log(params);

  const [data, setData] = useState("");

  const [index, setIndex] = useState(params); //initial page
  const [itemsPerPage] = useState(1); //No. of news at a time

  // const pages = [];
  // for (let i = 1; i <= Math.ceil(data.length / itemsPerPage + 1); i++) {
  //   pages.push(i);
  // }

  console.log(index);
  useEffect(() => {
    axios
      .get(
        `https://newsdata.io/api/1/news?apikey=pub_9690904634753207970627642fb208979fa&language=en&country=us,in&domain=mmafighting,sentinel,billboard,techcrunch,cheatsheet`
      )
      .then(res => {
        setData(res.data.results);
        // var list = res.data.results.filter(data => {
        //   //if the url return title, it sould return all the data
        //   if (props.match.params.id === data.title) {
        //     return data;
        //   }
        //   if (props.match.params.id === data.creator) {
        //     return data;
        //   } else {
        //     return;
        //   }
        // });
        // setData(list);
        // console.log(list);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const indexOfLastItem = index * itemsPerPage + 1;
  const indexofFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexofFirstItem, indexOfLastItem);

  const history = useHistory();

  const nextClick = event => {
    setIndex((index + 1) % data.length);
    // if (
    //   props.match.params.id ===
    //   (currentItems ? currentItems.map(data => data.title) : "")
    // ) {

    // history.push(
    //   `/newsitem/${currentItems ? currentItems.map(data => data.title) : ""}`
    // );

    // } else {
    //   return;
    // }
    history.replace(
      `/newsitem/${currentItems ? currentItems.map(data => data.title) : ""}`
    );

    // var items = [];
    // items.push(data[(index + 1) % data.length]);
    // setData(items);
  };
  const previousClick = () => {
    setIndex((index - 1 + data.length * data.length) % data.length);

    history.push(
      `/newsitem/${currentItems ? currentItems.map(data => data.title) : ""}`
    );
    // var items = [];
    // items.push(data[(index - 1 + data.length * data.length) % data.length]);
    // setData(items);
  };

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
                {currentItems ? (
                  currentItems
                    // .filter(data => {
                    //   if (props.match.params.id === data.title) {
                    //     return data;
                    //   }
                    //   if (props.match.params.id === data.creator) {
                    //     return data;
                    //   } else {
                    //     return;
                    //   }
                    // })
                    .map((item, key) => {
                      return (
                        <div key={key}>
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
                            {/* <iframe
                              type="text/html"
                              src={item.link}
                              width="100%"
                              height="500px"
                              frameBorder="0"
                            ></iframe> */}
                            <div className="dateTimeBox">
                              <div className="dateInfo">
                                {moment(item.pubDate).calendar()}
                              </div>
                            </div>
                            <b>
                              Source :<i>{item.source_id}</i>
                            </b>
                            <br />
                            Position : {index}
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
