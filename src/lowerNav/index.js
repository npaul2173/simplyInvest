import React from "react";
import "./index.styles.css";

export const LowerNav = () => {
  return (
    <div className="lowernav">
      <div className="loweNavcontainer">
        <a href="/sip" class="active">
          SIP
        </a>
        <a href="/associates">Associates</a>
        <a href="/disclaimer">Disclaimer </a>
        <a href="/joinUs">Join us</a>
        <a href="/contactUs">Contact us</a>
      </div>
      <div className="infoConatiner"></div>
    </div>
  );
};
