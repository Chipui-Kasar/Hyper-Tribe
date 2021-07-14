import React from "react";
import "./CommunityNews.css";
import communityNews from "../../images/CommunityNews.png";

function CommunityNews(props) {
  return (
    <>
      <div className="col-md-7">
        <div className="whiteBox CommunityNewsSliderBox">
          <div className="whiteBox__heading">{props.title}</div>
          <a href="#" className="viewAll">
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
                <li data-target="#CommunityNewsSlider" data-slide-to="1"></li>
                <li data-target="#CommunityNewsSlider" data-slide-to="2"></li>
                <li data-target="#CommunityNewsSlider" data-slide-to="3"></li>
              </ol>
              <div className="carousel-inner">
                <div className="item active">
                  <div
                    className="CommunityNewsSlider__img"
                    style={{ background: `url(${communityNews})` }}
                  ></div>
                  <h3 className="heading">
                    Praesent sagittis eu ante vel tincidunt. Integer nulla nibh,
                    fringilla sit amet purus a, lobortis eleifend quam.
                  </h3>
                  <div className="dateTimeBox">
                    <div className="dateInfo">06 Sep 2019</div>
                    <div className="timeInfo">06 Sep 2019</div>
                  </div>
                  <p>
                    Praesent vitae nisi at urna imperdiet cursus quis a sem.
                    Quisque semper dui et lorem faucibus, sed varius mi
                    sagittis. Sed bibendum nulla placerat pharetra vehicula.
                    Curabitur dolor est, sagittis a diam ut, consectetur dapibus
                    nunc.
                  </p>
                </div>
                <div className="item">
                  <div
                    className="CommunityNewsSlider__img"
                    style={{ background: `url(${communityNews})` }}
                  ></div>
                  <h3 className="heading">
                    Praesent sagittis eu ante vel tincidunt. Integer nulla nibh,
                    fringilla sit amet purus a, lobortis eleifend quam.
                  </h3>
                  <div className="dateTimeBox">
                    <div className="dateInfo">06 Sep 2019</div>
                    <div className="timeInfo">06 Sep 2019</div>
                  </div>
                  <p>
                    Praesent vitae nisi at urna imperdiet cursus quis a sem.
                    Quisque semper dui et lorem faucibus, sed varius mi
                    sagittis. Sed bibendum nulla placerat pharetra vehicula.
                    Curabitur dolor est, sagittis a diam ut, consectetur dapibus
                    nunc.
                  </p>
                </div>
                <div className="item">
                  <div
                    className="CommunityNewsSlider__img"
                    style={{ background: `url(${communityNews})` }}
                  ></div>
                  <h3 className="heading">
                    Praesent sagittis eu ante vel tincidunt. Integer nulla nibh,
                    fringilla sit amet purus a, lobortis eleifend quam.
                  </h3>
                  <div className="dateTimeBox">
                    <div className="dateInfo">06 Sep 2019</div>
                    <div className="timeInfo">06 Sep 2019</div>
                  </div>
                  <p>
                    Praesent vitae nisi at urna imperdiet cursus quis a sem.
                    Quisque semper dui et lorem faucibus, sed varius mi
                    sagittis. Sed bibendum nulla placerat pharetra vehicula.
                    Curabitur dolor est, sagittis a diam ut, consectetur dapibus
                    nunc.
                  </p>
                </div>
                <div className="item">
                  <div
                    className="CommunityNewsSlider__img"
                    style={{ background: `url(${communityNews})` }}
                  ></div>
                  <h3 className="heading">
                    Praesent sagittis eu ante vel tincidunt. Integer nulla nibh,
                    fringilla sit amet purus a, lobortis eleifend quam.
                  </h3>
                  <div className="dateTimeBox">
                    <div className="dateInfo">06 Sep 2019</div>
                    <div className="timeInfo">06 Sep 2019</div>
                  </div>
                  <p>
                    Praesent vitae nisi at urna imperdiet cursus quis a sem.
                    Quisque semper dui et lorem faucibus, sed varius mi
                    sagittis. Sed bibendum nulla placerat pharetra vehicula.
                    Curabitur dolor est, sagittis a diam ut, consectetur dapibus
                    nunc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommunityNews;
