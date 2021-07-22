import React from "react";
import HeaderPage from "../HeaderPage/HeaderPage";

// import { NewsData } from "../../AllData";
import News from "../../Data/JSONDATA.json";
import "../../components/news/News.css";

function NewsPage(props) {
  return (
    <>
      <HeaderPage />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="whiteBox paddingLR0 p50">
              <div className="whiteBox__heading">NEWS</div>

              <div className="newsInfo">
                {News.news
                  .filter(data => {
                    if (props.match.params.id === data.permission) {
                      return data;
                    }
                    if (props.match.params.id === data.id) {
                      return data;
                    }
                    if (props.match.params.id === data.All) {
                      return data;
                    }
                  })
                  .map((data, key) => {
                    return (
                      <div key={key.id}>
                        <a href="#" className="newsList">
                          <div className="newsList__img">
                            <img src={data.img} alt={data.alt} />
                          </div>
                          <h3>{data.title}</h3>
                          <div className="dateTimeBox">
                            <div className="dateInfo">{data.date}</div>
                            <div className="timeInfo">{data.time}</div>
                          </div>
                          <p>{data.description}</p>
                        </a>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsPage;
