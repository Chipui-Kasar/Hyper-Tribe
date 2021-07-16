import React from "react";
import HeaderPage from "../HeaderPage/HeaderPage";

import { Data } from "../../AllData";
import "../../components/news/News.css";

function NewsPage() {
  return (
    <>
      <HeaderPage />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {Data.map(data => {
              return (
                <div className="whiteBox paddingLR0 p50">
                  <div className="whiteBox__heading">{data.title}</div>
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
                      <p>
                        lorem ipsum dolor sit amet, consectetur adip lorem ipsum
                        dolor sit amet, consectetur adip lorem ipsum dolor sit
                        amet, consectetur adip lorem ipsum dolor sit amet,
                        consectetur adip lorem ipsum dolor sit amet, consectetur
                        adip lorem ipsum dolor sit amet, consectetur adip lorem
                        ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                        sit amet, consectetur adip lorem ipsum dolor sit amet,
                        consectetur adip lorem ipsum dolor sit amet, consectetur
                        adip lorem ipsum dolor sit amet, consectetur adip lorem
                        ipsum dolor sit amet, consectetur adip
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
                      {/* <p className="desc">
                    Praesent sagittis eu ante vel tincidunt. Integer nulla nibh,
                    fringilla sit amet purus a, lobortis…
                  </p> */}
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
                      {/* <p className="desc">
                    Praesent sagittis eu ante vel tincidunt. Integer nulla nibh,
                    fringilla sit amet purus a, lobortis…
                  </p> */}
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
                      {/* <p className="desc">
                    Praesent sagittis eu ante vel tincidunt. Integer nulla nibh,
                    fringilla sit amet purus a, lobortis…
                  </p> */}
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
                      {/* <p className="desc">
                    Praesent sagittis eu ante vel tincidunt. Integer nulla nibh,
                    fringilla sit amet purus a, lobortis…
                  </p> */}
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
                      {/* <p className="desc">
                    Praesent sagittis eu ante vel tincidunt. Integer nulla nibh,
                    fringilla sit amet purus a, lobortis…
                  </p> */}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsPage;
