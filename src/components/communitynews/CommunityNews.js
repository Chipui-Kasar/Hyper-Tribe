import React from "react";
import "./CommunityNews.css";
import communityNews from "../../images/CommunityNews.png";
import Data from "../../Data/CommunityNews.json";
import JData from "../../Data/JSONDATA.json";
import { Link } from "react-router-dom";

function CommunityNews(props) {
  return (
    <>
      <div className="col-md-7">
        <div className="whiteBox CommunityNewsSliderBox">
          <div className="whiteBox__heading">{props.title}</div>
          <Link to="/communitynews" className="viewAll">
            View All
          </Link>
          <div className="CommunityNewsSlider">
            <div
              id="CommunityNewsSlider"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#CommunityNewsSlider"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#CommunityNewsSlider" data-slide-to="1"></li>
                <li data-target="#CommunityNewsSlider" data-slide-to="2"></li>
                <li data-target="#CommunityNewsSlider" data-slide-to="3"></li>
              </ol>
              <div className="carousel-inner">
                {JData.CommunityNews.firstSlide.map((data, key) => {
                  return (
                    <div className="item active" key={key}>
                      <div
                        className="CommunityNewsSlider__img"
                        style={{ background: `url(${communityNews})` }}
                      ></div>
                      <h3 className="heading">{data.title}</h3>
                      <div className="dateTimeBox">
                        <div className="dateInfo">{data.date}</div>
                        <div className="timeInfo">{data.time}</div>
                      </div>
                      <p>{data.description}</p>
                    </div>
                  );
                })}
                {Data.secondSlide.map((data, key) => {
                  return (
                    <div className="item" key={key}>
                      <div
                        className="CommunityNewsSlider__img"
                        style={{ background: `url(${communityNews})` }}
                      ></div>
                      <h3 className="heading">{data.title}</h3>
                      <div className="dateTimeBox">
                        <div className="dateInfo">{data.date}</div>
                        <div className="timeInfo">{data.time}</div>
                      </div>
                      <p>{data.description}</p>
                    </div>
                  );
                })}
                {Data.thirdSlide.map((data, key) => {
                  return (
                    <div className="item" key={key}>
                      <div
                        className="CommunityNewsSlider__img"
                        style={{ background: `url(${communityNews})` }}
                      ></div>
                      <h3 className="heading">{data.title}</h3>
                      <div className="dateTimeBox">
                        <div className="dateInfo">{data.date}</div>
                        <div className="timeInfo">{data.time}</div>
                      </div>
                      <p>{data.description}</p>
                    </div>
                  );
                })}
                {Data.forthSlide.map((data, key) => {
                  return (
                    <div className="item" key={key}>
                      <div
                        className="CommunityNewsSlider__img"
                        style={{ background: `url(${communityNews})` }}
                      ></div>
                      <h3 className="heading">{data.title}</h3>
                      <div className="dateTimeBox">
                        <div className="dateInfo">{data.date}</div>
                        <div className="timeInfo">{data.time}</div>
                      </div>
                      <p>{data.description}</p>
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

export default CommunityNews;
