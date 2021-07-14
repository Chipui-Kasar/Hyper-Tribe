import React from "react";
import "./KeyResources.css";
function KeyResources(props) {
  return (
    <>
      <div className="col-md-4">
        <div className="whiteBox">
          <div className="whiteBox__heading">{props.title}</div>
          <a href="#" className="viewAll">
            View All
          </a>
          <div className="KeyResourcesInfo">
            <ul>
              <li>
                <a href="#">Donec id dui felis. Nullam cursus erat</a>
              </li>
              <li>
                <a href="#">Curabitur a sem at neque iaculis</a>
              </li>
              <li>
                <a href="#">Pellentesque molestie dolor</a>
              </li>
              <li>
                <a href="#">Suspendisse eu scelerisque lacus</a>
              </li>
              <li>
                <a href="#">Donec id dui felis. Nullam cursus erat</a>
              </li>
              <li>
                <a href="#">Curabitur a sem at neque iaculis</a>
              </li>
              <li>
                <a href="#">Pellentesque molestie dolor</a>
              </li>
              <li>
                <a href="#">Suspendisse eu scelerisque lacus</a>
              </li>
              <li>
                <a href="#">Donec id dui felis. Nullam cursus erat</a>
              </li>
              <li>
                <a href="#">Curabitur a sem at neque iaculis</a>
              </li>
              <li>
                <a href="#">Pellentesque molestie dolor</a>
              </li>
              <li>
                <a href="#">Suspendisse eu scelerisque lacus</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default KeyResources;
