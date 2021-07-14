import React from "react";
import "./Notification.css";
function Notification() {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="whiteBox notificationBox">
          <div className="whiteBox__heading">Notifications</div>
          <div className="notificationsInfo">
            <p className="desc">
              Aenean maximus volutpat ipsum, quis lacinia felis ullamcorper ac.
              Ut non vehicula mi, at suscipit orci. Etiam laoreet nunc est, a
              rhoncus elit dignissim ac.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
