import React from "react";
import communityNews from "../../images/CommunityNews.png";
import HeaderPage from "../HeaderPage/HeaderPage";
import "./CommunityPage.css";
import { CommunityNewsData } from "../../Data/AllData";

function CommunityNewsPage() {
  return (
    <>
      <HeaderPage />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {CommunityNewsData.map(data => {
              return (
                <div className="whiteBox CommunityNewsSliderBox">
                  <div className="whiteBox__heading">{data.title}</div>
                  <div className="CommunityNewsSlider">
                    <div id="CommunityNewsSlider">
                      <div className="">
                        <div className="contents">
                          <div
                            className="CommunityNewsSlider__img"
                            style={{
                              background: `url(${data.src})`,
                              backgroundSize: "cover",
                            }}
                          ></div>
                          <h3 className="heading">{data.heading}</h3>
                          <div className="dateTimeBox">
                            <div className="dateInfo">{data.date}</div>
                            <div className="timeInfo">{data.time}</div>
                          </div>
                          <p style={{ marginBottom: "50px" }}>{data.content}</p>
                          <hr
                            style={{
                              borderColor: "grey",
                            }}
                          />
                        </div>
                        <div className="contents">
                          <div
                            className="CommunityNewsSlider__img"
                            style={{
                              background: `url(${data.src})`,
                              backgroundSize: "cover",
                            }}
                          ></div>
                          <h3 className="heading">{data.heading}</h3>
                          <div className="dateTimeBox">
                            <div className="dateInfo">{data.date}</div>
                            <div className="timeInfo">{data.time}</div>
                          </div>
                          <p style={{ marginBottom: "50px" }}>{data.content}</p>
                          <hr
                            style={{
                              borderColor: "grey",
                            }}
                          />
                        </div>
                        <div className="contents">
                          <div
                            className="CommunityNewsSlider__img"
                            style={{
                              background: `url(${data.src})`,
                              backgroundSize: "cover",
                            }}
                          ></div>
                          <h3 className="heading">{data.heading}</h3>
                          <div className="dateTimeBox">
                            <div className="dateInfo">{data.date}</div>
                            <div className="timeInfo">{data.time}</div>
                          </div>
                          <p style={{ marginBottom: "50px" }}>{data.content}</p>
                          <hr
                            style={{
                              borderColor: "grey",
                            }}
                          />
                        </div>
                        <div className="contents">
                          <div
                            className="CommunityNewsSlider__img"
                            style={{
                              background: `url(${data.src})`,
                              backgroundSize: "cover",
                            }}
                          ></div>
                          <h3 className="heading">{data.heading}</h3>
                          <div className="dateTimeBox">
                            <div className="dateInfo">{data.date}</div>
                            <div className="timeInfo">{data.time}</div>
                          </div>
                          <p style={{ marginBottom: "50px" }}>{data.content}</p>
                          <hr
                            style={{
                              borderColor: "grey",
                            }}
                          />
                        </div>
                      </div>
                    </div>
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

export default CommunityNewsPage;
