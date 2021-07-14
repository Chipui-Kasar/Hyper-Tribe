import React from "react";
import "./Task.css";
function Task(props) {
  return (
    <>
      <div className="col-md-4">
        <div className="whiteBox paddingLR0 p50">
          <div className="whiteBox__heading">{props.title}</div>
          <a href="#" className="viewAll">
            View All
          </a>
          <div className="testInfo">
            <a href="#" className="taskList">
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
            <a href="#" className="taskList">
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
            <a href="#" className="taskList">
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
            <a href="#" className="taskList">
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

export default Task;
