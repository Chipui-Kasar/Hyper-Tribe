import React from "react";
import "./News.css";
import { NewsData } from "../../AllData";

function News(props) {
  return (
    <>
      <div className="col-md-5">
        <div className="whiteBox paddingLR0 p50">
          <div className="whiteBox__heading">{props.title}</div>
          <a href="/newspage" className="viewAll">
            View All
          </a>
          {NewsData.map(data => {
            return (
              <div className="newsInfo">
                <a href="#" className="newsList">
                  <div className="newsList__img">
                    <img src={data.src} />
                  </div>
                  <h3>{data.heading}</h3>
                  <div className="dateTimeBox">
                    <div className="dateInfo">{data.date}</div>
                    <div className="timeInfo">{data.time}</div>
                  </div>
                  <p className="desc">
                    Praesent sagittis eu ante vel tincidunt. Integer nulla nibh,
                    fringilla sit amet purus a, lobortis…
                  </p>
                </a>
                <a href="#" className="newsList">
                  <div className="newsList__img">
                    <img src={data.src1} />
                  </div>
                  <h3>{data.heading}</h3>
                  <div className="dateTimeBox">
                    <div className="dateInfo">{data.date}</div>
                    <div className="timeInfo">{data.time}</div>
                  </div>
                  <p className="desc">
                    Praesent sagittis eu ante vel tincidunt. Integer nulla nibh,
                    fringilla sit amet purus a, lobortis…
                  </p>
                </a>
                <a href="#" className="newsList">
                  <div className="newsList__img">
                    <img src={data.src} />
                  </div>
                  <h3>{data.heading}</h3>
                  <div className="dateTimeBox">
                    <div className="dateInfo">{data.date}</div>
                    <div className="timeInfo">{data.time}</div>
                  </div>
                  <p className="desc">
                    Praesent sagittis eu ante vel tincidunt. Integer nulla nibh,
                    fringilla sit amet purus a, lobortis…
                  </p>
                </a>
                <a href="#" className="newsList">
                  <div className="newsList__img">
                    <img src={data.src1} />
                  </div>
                  <h3>{data.heading}</h3>
                  <div className="dateTimeBox">
                    <div className="dateInfo">{data.date}</div>
                    <div className="timeInfo">{data.time}</div>
                  </div>
                  <p className="desc">
                    Praesent sagittis eu ante vel tincidunt. Integer nulla nibh,
                    fringilla sit amet purus a, lobortis…
                  </p>
                </a>
                <a href="#" className="newsList">
                  <div className="newsList__img">
                    <img src={data.src} />
                  </div>
                  <h3>{data.heading}</h3>
                  <div className="dateTimeBox">
                    <div className="dateInfo">{data.date}</div>
                    <div className="timeInfo">{data.time}</div>
                  </div>
                  <p className="desc">
                    Praesent sagittis eu ante vel tincidunt. Integer nulla nibh,
                    fringilla sit amet purus a, lobortis…
                  </p>
                </a>
                <a href="#" className="newsList">
                  <div className="newsList__img">
                    <img src={data.src1} />
                  </div>
                  <h3>{data.heading}</h3>
                  <div className="dateTimeBox">
                    <div className="dateInfo">{data.date}</div>
                    <div className="timeInfo">{data.time}</div>
                  </div>
                  <p className="desc">
                    Praesent sagittis eu ante vel tincidunt. Integer nulla nibh,
                    fringilla sit amet purus a, lobortis…
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default News;
