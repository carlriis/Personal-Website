import React from "react";

import "./css/Contact.css";

const emailIcon = require("../media/email-icon.svg");
const phoneIcon = require("../media/phone-icon.svg");

export default () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="text-container">
        <p>
          Let’s talk! You are welcome to contact my using the following ways:
        </p>
      </div>
      <div className="contact-options">
        <div className="contact-container">
          <img src={emailIcon} alt="email icon" />{" "}
          <a href="mailto: carl.aagot.riis@gmail.com">
            carl.aagot.riis@gmail.com
          </a>
        </div>
        <br />
        <div className="contact-container">
          <img src={phoneIcon} alt="phone icon" />{" "}
          <a href="tel:42407415">42407415</a>
        </div>
      </div>
    </div>
  );
};
