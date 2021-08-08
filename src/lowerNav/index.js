import React from "react";
import "./index.styles.css";

export const LowerNav = () => {
  return (
    <div className="lowernav">
      <div className="loweNavcontainer">
        <a href="#" class="active">
          SIP
        </a>
        <a href="#">Associates</a>
        <a href="#">Disclaimer </a>
        <a href="#">Join us</a>
        <a href="#">Contact us</a>
      </div>
      <div className="infoConatiner"></div>
    </div>
  );
};
