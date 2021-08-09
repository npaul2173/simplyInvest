import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { LowerRoutes } from "../nav/routes";
import "./index.styles.css";

export const LowerNav = () => {
  return (
    <div className="lowernav">
      <div className="loweNavcontainer">
        {LowerRoutes.map((prop, key) => {
          return (
            <NavLink to={prop.path} key={key}>
              <span className="navSpan">{prop.sidebarName}</span>
            </NavLink>
          );
        })}

        {/* <a href="/sip" class="active">
          SIP
        </a>
        <a href="/associates">Associates</a>
        <a href="/disclaimer">Disclaimer </a>
        <a href="/joinUs">Join us</a>
        <a href="/contactUs">Contact us</a> */}
      </div>
      <div className="infoConatiner">
        <h4>ARN - 81455, EUIN - E028088</h4>
        <h4>Copyright</h4>
      </div>
    </div>
  );
};
