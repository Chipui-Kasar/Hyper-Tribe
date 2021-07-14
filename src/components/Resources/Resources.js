import React from "react";
import "./Resources.css";
function Resources(props) {
  return (
    <>
      <div className="col-md-4">
        <div className="whiteBox">
          <div className="whiteBox__heading">{props.title}</div>
          <a href="#" className="viewAll">
            View All
          </a>
          <div className="resources">
            <ul>
              <li className="iconPDF">
                <h3>Curabitur a sem at neque iaculis</h3>
                <p className="desc">
                  Donec id dui felis. Nullam cursus erat at leo
                </p>
                <a href="#">Download</a>
                <p>Upload on : 01/10/2020</p>
              </li>
              <li className="iconXls">
                <h3>Curabitur a sem at neque iaculis</h3>
                <p className="desc">
                  Donec id dui felis. Nullam cursus erat at leo
                </p>
                <a href="#">Download</a>
                <p>Upload on : 01/10/2020</p>
              </li>
              <li className="IconPPT">
                <h3>Curabitur a sem at neque iaculis</h3>
                <p className="desc">
                  Donec id dui felis. Nullam cursus erat at leo
                </p>
                <a href="#">Download</a>
                <p>Upload on : 01/10/2020</p>
              </li>
              <li className="iconPDF">
                <h3>Curabitur a sem at neque iaculis</h3>
                <p className="desc">
                  Donec id dui felis. Nullam cursus erat at leo
                </p>
                <a href="#">Download</a>
                <p>Upload on : 01/10/2020</p>
              </li>
              <li className="iconXls">
                <h3>Curabitur a sem at neque iaculis</h3>
                <p className="desc">
                  Donec id dui felis. Nullam cursus erat at leo
                </p>
                <a href="#">Download</a>
                <p>Upload on : 01/10/2020</p>
              </li>
              <li className="IconPPT">
                <h3>Curabitur a sem at neque iaculis</h3>
                <p className="desc">
                  Donec id dui felis. Nullam cursus erat at leo
                </p>
                <a href="#">Download</a>
                <p>Upload on : 01/10/2020</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resources;
