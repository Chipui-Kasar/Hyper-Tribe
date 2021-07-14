import React from "react";
import upload from "../../images/upload.png";
import "./StrategyPlan.css";
function StrategyPlan(props) {
  return (
    <>
      <div className="col-md-4">
        <div className="whiteBox">
          <div className="whiteBox__heading">{props.title}</div>
          <div className="StrategyPlan">
            <img src={upload} alt="" />
            <input type="file" id="StrategyPlan" />
            <label htmlFor="StrategyPlan">UPLOAD File</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default StrategyPlan;
