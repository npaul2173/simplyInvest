import "./index.styles.css";
import Logo from "../assets/svgs/LOGO.svg";
import NavBackground from "../assets/svgs/NavLowerbackgroung.svg";
import { NavLink } from "react-router-dom";
import { Routes } from "./routes";
export const NavBar = () => {
  return (
    <div className="sidenav">
      <div class="header_bar">
        <img class="logo_img" src={Logo} alt="simplyInvest" />
        <header>Simply invest</header>
      </div>

      <div class="regis_bar">
        <span class="regis_text">
          AMFI - registered mutual fund distributer
        </span>
      </div>

      {Routes.map((prop, key) => {
        return (
          <NavLink to={prop.path} key={key}>
            <span className="navSpan">{prop.sidebarName}</span>
          </NavLink>
        );
      })}

      <div className="navBackgroundContainer">
        <img className="navBackground" src={NavBackground} alt="simplyInvest" />
      </div>
    </div>
  );
};
