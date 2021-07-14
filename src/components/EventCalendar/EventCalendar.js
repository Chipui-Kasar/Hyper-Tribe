import React from "react";
import "./EventCalendar.css";

function EventCalendar(props) {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="whiteBox">
            <div className="whiteBox__heading">{props.title}</div>
            <div className="event-calendar">
              <div className="calendar-box">
                <div id="calendar"></div>
              </div>
              <div className="eventDetails">
                <ul>
                  <li>
                    <div className="eventDateBox">
                      <div className="eventDate">03</div>
                      <div className="eventMonth">Aug</div>
                    </div>
                    <div className="eventName">
                      Pellentesque commodo vitae risus vel fringilla
                    </div>
                    <p className="desc">
                      Curabitur id scelerisque massa. Vestibulum ante ipsum
                      primis in faucibus orci luctus et ultrices
                    </p>
                  </li>
                  <li>
                    <div className="eventDateBox">
                      <div className="eventDate">12</div>
                      <div className="eventMonth">Aug</div>
                    </div>
                    <div className="eventName">
                      Pellentesque commodo vitae risus vel fringilla
                    </div>
                    <p className="desc">
                      Curabitur id scelerisque massa. Vestibulum ante ipsum
                      primis in faucibus orci luctus et ultrices
                    </p>
                  </li>
                  <li>
                    <div className="eventDateBox">
                      <div className="eventDate">03</div>
                      <div className="eventMonth">Sep</div>
                    </div>
                    <div className="eventName">
                      Pellentesque commodo vitae risus vel fringilla
                    </div>
                    <p className="desc">
                      Curabitur id scelerisque massa. Vestibulum ante ipsum
                      primis in faucibus orci luctus et ultrices
                    </p>
                  </li>
                  <li>
                    <div className="eventDateBox">
                      <div className="eventDate">03</div>
                      <div className="eventMonth">Sep</div>
                    </div>
                    <div className="eventName">
                      Pellentesque commodo vitae risus vel fringilla
                    </div>
                    <p className="desc">
                      Curabitur id scelerisque massa. Vestibulum ante ipsum
                      primis in faucibus orci luctus et ultrices
                    </p>
                  </li>
                  <li>
                    <div className="eventDateBox">
                      <div className="eventDate">03</div>
                      <div className="eventMonth">Sep</div>
                    </div>
                    <div className="eventName">
                      Pellentesque commodo vitae risus vel fringilla
                    </div>
                    <p className="desc">
                      Curabitur id scelerisque massa. Vestibulum ante ipsum
                      primis in faucibus orci luctus et ultrices
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCalendar;
