import React from "react";
import "./index.styles.css";

export const LowerNav = () => {
  return (
    <div className="lowernav">
      <div className="loweNavcontainer">
        <a href="#" class="active">
          <span className="lowerNavSpan">SIP</span>
        </a>
        <a href="#">
          <span className="lowerNavSpan">Associates</span>
        </a>
        <a href="#">
          <span className="lowerNavSpan">Disclaimer</span>
        </a>
        <a href="#">
          <span className="lowerNavSpan">Join us</span>
        </a>
        <a href="#">
          <span className="lowerNavSpan">Contact us</span>
        </a>
      </div>
      <div className="infoConatiner">
        {/* <h1>Header footer section</h1> */}
      </div>
    </div>
  );
};
