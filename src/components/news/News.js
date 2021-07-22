import React from "react";
import "./News.css";
import NewsData from "../../Data/JSONDATA.json";

function News(props) {
  // console.log(props.data);
  return (
    <>
      <div className="col-md-5">
        <div className="whiteBox paddingLR0 p50">
          <div className="whiteBox__heading">{props.title}</div>
          <a
            href={`/newspage/${props.filterUser}`}
            target="_blank"
            className="viewAll"
          >
            View All
          </a>
          <div className="newsInfo">
            {props.data
              .filter((data, key) => {
                if (data.permission === props.filterUser) {
                  return data;
                }
                // if (data.id === key) {
                //   return data;
                // }
                if (data.All === props.filterUser) {
                  return data;
                }
              })
              .map((data, key) => {
                return (
                  <a href={`#`} className="newsList" key={key}>
                    <div className="newsList__img">
                      <img src={data.img} />
                    </div>
                    <h3>{data.title}</h3>
                    <div className="dateTimeBox">
                      <div className="dateInfo">{data.date}</div>
                      <div className="timeInfo">{data.time}</div>
                      <label>Posted by: {data.permission}</label>
                    </div>

                    <p className="desc">
                      Praesent sagittis eu ante vel tincidunt. Integer nulla
                      nibh, fringilla sit amet purus a, lobortis…
                    </p>
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
