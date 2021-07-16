import React from "react";
import "./CommunityNews.css";
import communityNews from "../../images/CommunityNews.png";
import { CommunityNewsData } from "../../AllData";

function CommunityNews(props) {
  return (
    <>
      <div className="col-md-7">
        {CommunityNewsData.map(data => {
          return (
            <div className="whiteBox CommunityNewsSliderBox">
              <div className="whiteBox__heading">{props.title}</div>
              <a href="/communitynews" className="viewAll">
                View All
              </a>
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
                    <li
                      data-target="#CommunityNewsSlider"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#CommunityNewsSlider"
                      data-slide-to="2"
                    ></li>
                    <li
                      data-target="#CommunityNewsSlider"
                      data-slide-to="3"
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="item active">
                      <div
                        className="CommunityNewsSlider__img"
                        style={{ background: `url(${data.src})` }}
                      ></div>
                      <h3 className="heading">{data.heading}</h3>
                      <div className="dateTimeBox">
                        <div className="dateInfo">{data.date}</div>
                        <div className="timeInfo">{data.time}</div>
                      </div>
                      <p>{data.content}</p>
                    </div>
                    <div className="item">
                      <div
                        className="CommunityNewsSlider__img"
                        style={{ background: `url(${data.src})` }}
                      ></div>
                      <h3 className="heading">{data.heading}</h3>
                      <div className="dateTimeBox">
                        <div className="dateInfo">{data.date}</div>
                        <div className="timeInfo">{data.time}</div>
                      </div>
                      <p>{data.content}</p>
                    </div>
                    <div className="item">
                      <div
                        className="CommunityNewsSlider__img"
                        style={{ background: `url(${data.src})` }}
                      ></div>
                      <h3 className="heading">{data.heading}</h3>
                      <div className="dateTimeBox">
                        <div className="dateInfo">{data.date}</div>
                        <div className="timeInfo">{data.time}</div>
                      </div>
                      <p>{data.content}</p>
                    </div>
                    <div className="item">
                      <div
                        className="CommunityNewsSlider__img"
                        style={{ background: `url(${data.src})` }}
                      ></div>
                      <h3 className="heading">{data.heading}</h3>
                      <div className="dateTimeBox">
                        <div className="dateInfo">{data.date}</div>
                        <div className="timeInfo">{data.time}</div>
                      </div>
                      <p>{data.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CommunityNews;
