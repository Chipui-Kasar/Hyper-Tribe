import React from "react";
import "./Contact.css";
function Contact(props) {
  return (
    <>
      <div className="col-md-4">
        <div className="whiteBox">
          <div className="whiteBox__heading">{props.title}</div>
          <div className="contactForm">
            <form action="">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="E mail" />
              <input type="text" placeholder="Mobile Number" />
              <textarea name="" id="" placeholder="Message"></textarea>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
