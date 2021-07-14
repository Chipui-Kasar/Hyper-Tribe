import React from "react";
import "./News.css";
import news from "../../images/news.png";
import news1 from "../../images/news1.png";
function News(props) {
  return (
    <>
      <div className="col-md-5">
        <div className="whiteBox paddingLR0 p50">
          <div className="whiteBox__heading">{props.title}</div>
          <a href="#" className="viewAll">
            View All
          </a>
          <div className="newsInfo">
            <a href="#" className="newsList">
              <div
                className="newsList__img"
                style={{ background: `url(${news})` }}
              ></div>
              <h3>Aenean maximus volutpat ipsum, quis lacinia..</h3>
              <div className="dateTimeBox">
                <div className="dateInfo">06 Sep 2019</div>
                <div className="timeInfo">06 Sep 2019</div>
              </div>
              <p className="desc">
                Praesent sagittis eu ante vel tincidunt. Integer nulla nibh,
                fringilla sit amet purus a, lobortis…
              </p>
            </a>
            <a href="#" className="newsList">
              <div
                className="newsList__img"
                style={{ background: `url(${news1})` }}
              ></div>
              <h3>Aenean maximus volutpat ipsum, quis lacinia..</h3>
              <div className="dateTimeBox">
                <div className="dateInfo">06 Sep 2019</div>
                <div className="timeInfo">06 Sep 2019</div>
              </div>
              <p className="desc">
                Praesent sagittis eu ante vel tincidunt. Integer nulla nibh,
                fringilla sit amet purus a, lobortis…
              </p>
            </a>
            <a href="#" className="newsList">
              <div
                className="newsList__img"
                style={{ background: `url(${news})` }}
              ></div>
              <h3>Aenean maximus volutpat ipsum, quis lacinia..</h3>
              <div className="dateTimeBox">
                <div className="dateInfo">06 Sep 2019</div>
                <div className="timeInfo">06 Sep 2019</div>
              </div>
              <p className="desc">
                Praesent sagittis eu ante vel tincidunt. Integer nulla nibh,
                fringilla sit amet purus a, lobortis…
              </p>
            </a>
            <a href="#" className="newsList">
              <div
                className="newsList__img"
                style={{ background: `url(${news1})` }}
              ></div>
              <h3>Aenean maximus volutpat ipsum, quis lacinia..</h3>
              <div className="dateTimeBox">
                <div className="dateInfo">06 Sep 2019</div>
                <div className="timeInfo">06 Sep 2019</div>
              </div>
              <p className="desc">
                Praesent sagittis eu ante vel tincidunt. Integer nulla nibh,
                fringilla sit amet purus a, lobortis…
              </p>
            </a>
            <a href="#" className="newsList">
              <div
                className="newsList__img"
                style={{ background: `url(${news})` }}
              ></div>
              <h3>Aenean maximus volutpat ipsum, quis lacinia..</h3>
              <div className="dateTimeBox">
                <div className="dateInfo">06 Sep 2019</div>
                <div className="timeInfo">06 Sep 2019</div>
              </div>
              <p className="desc">
                Praesent sagittis eu ante vel tincidunt. Integer nulla nibh,
                fringilla sit amet purus a, lobortis…
              </p>
            </a>
            <a href="#" className="newsList">
              <div
                className="newsList__img"
                style={{ background: `url(${news1})` }}
              ></div>
              <h3>Aenean maximus volutpat ipsum, quis lacinia..</h3>
              <div className="dateTimeBox">
                <div className="dateInfo">06 Sep 2019</div>
                <div className="timeInfo">06 Sep 2019</div>
              </div>
              <p className="desc">
                Praesent sagittis eu ante vel tincidunt. Integer nulla nibh,
                fringilla sit amet purus a, lobortis…
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
