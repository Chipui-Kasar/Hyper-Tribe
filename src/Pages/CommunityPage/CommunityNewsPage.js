import React from "react";
import communityNews from "../../images/CommunityNews.png";
import HeaderPage from "../HeaderPage/HeaderPage";
import "./CommunityPage.css";
function CommunityNewsPage() {
  return (
    <>
      <HeaderPage />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="whiteBox CommunityNewsSliderBox">
              <div className="whiteBox__heading">Community News</div>
              <div className="CommunityNewsSlider">
                <div id="CommunityNewsSlider">
                  <div className="">
                    <div className="contents">
                      <div
                        className="CommunityNewsSlider__img"
                        style={{
                          background: `url(${communityNews})`,
                        }}
                      ></div>
                      <h3 className="heading">
                        Praesent sagittis eu ante vel tincidunt. Integer nulla
                        nibh, fringilla sit amet purus a, lobortis eleifend
                        quam.
                      </h3>
                      <div className="dateTimeBox">
                        <div className="dateInfo">06 Sep 2019</div>
                        <div className="timeInfo">06 Sep 2019</div>
                      </div>
                      <p style={{ marginBottom: "50px" }}>
                        Praesent vitae nisi at urna imperdiet cursus quis a sem.
                        Quisque semper dui et lorem faucibus, sed varius mi
                        sagittis. Sed bibendum nulla placerat pharetra vehicula.
                        Curabitur dolor est, sagittis a diam ut, consectetur
                        dapibus nunc.
                      </p>
                      <hr
                        style={{
                          borderColor: "grey",
                        }}
                      />
                    </div>
                    <div className="contents">
                      <div
                        className="CommunityNewsSlider__img"
                        style={{ background: `url(${communityNews})` }}
                      ></div>
                      <h3 className="heading">
                        Praesent sagittis eu ante vel tincidunt. Integer nulla
                        nibh, fringilla sit amet purus a, lobortis eleifend
                        quam.
                      </h3>
                      <div className="dateTimeBox">
                        <div className="dateInfo">06 Sep 2019</div>
                        <div className="timeInfo">06 Sep 2019</div>
                      </div>
                      <p>
                        Praesent vitae nisi at urna imperdiet cursus quis a sem.
                        Quisque semper dui et lorem faucibus, sed varius mi
                        sagittis. Sed bibendum nulla placerat pharetra vehicula.
                        Curabitur dolor est, sagittis a diam ut, consectetur
                        dapibus nunc.
                      </p>
                      <hr
                        style={{
                          borderColor: "grey",
                        }}
                      />
                    </div>
                    <div className="contents">
                      <div
                        className="CommunityNewsSlider__img"
                        style={{ background: `url(${communityNews})` }}
                      ></div>
                      <h3 className="heading">
                        Praesent sagittis eu ante vel tincidunt. Integer nulla
                        nibh, fringilla sit amet purus a, lobortis eleifend
                        quam.
                      </h3>
                      <div className="dateTimeBox">
                        <div className="dateInfo">06 Sep 2019</div>
                        <div className="timeInfo">06 Sep 2019</div>
                      </div>
                      <p>
                        Praesent vitae nisi at urna imperdiet cursus quis a sem.
                        Quisque semper dui et lorem faucibus, sed varius mi
                        sagittis. Sed bibendum nulla placerat pharetra vehicula.
                        Curabitur dolor est, sagittis a diam ut, consectetur
                        dapibus nunc.
                      </p>
                      <hr
                        style={{
                          borderColor: "grey",
                        }}
                      />
                    </div>
                    <div className="contents">
                      <div
                        className="CommunityNewsSlider__img"
                        style={{ background: `url(${communityNews})` }}
                      ></div>
                      <h3 className="heading">
                        Praesent sagittis eu ante vel tincidunt. Integer nulla
                        nibh, fringilla sit amet purus a, lobortis eleifend
                        quam.
                      </h3>
                      <div className="dateTimeBox">
                        <div className="dateInfo">06 Sep 2019</div>
                        <div className="timeInfo">06 Sep 2019</div>
                      </div>
                      <p>
                        Praesent vitae nisi at urna imperdiet cursus quis a sem.
                        Quisque semper dui et lorem faucibus, sed varius mi
                        sagittis. Sed bibendum nulla placerat pharetra vehicula.
                        Curabitur dolor est, sagittis a diam ut, consectetur
                        dapibus nunc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommunityNewsPage;
