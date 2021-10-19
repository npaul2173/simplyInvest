import clsx from "clsx";
import React from "react";
import { useLocation } from "react-router-dom";
import { matchPath } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { LowerRoutes } from "../nav/routes";
import "./index.styles.css";

export const LowerNav = () => {
  const location = useLocation();

  return (
    <div className="lowernav">
      <div className="loweNavcontainer">
        {LowerRoutes.map((prop, key) => {
          const isParentActive = !!(
            prop.path &&
            matchPath(location.pathname, { path: prop.path, exact: prop.path })
          );

          return (
            <NavLink
              to={prop.path}
              key={key}
              className={clsx(isParentActive ? "lowerNavSelected" : "")}
            >
              <span className={"navSpan"}>{prop.sidebarName}</span>
            </NavLink>
          );
        })}
      </div>
      <div className="infoConatiner">
        <h4>ARN - 81455, EUIN - E028088</h4>
        <h4>Copyright</h4>
      </div>
    </div>
  );
};
