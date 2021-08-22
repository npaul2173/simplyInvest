import "./index.styles.css";
import Logo from "../assets/svgs/LOGO.svg";
import NavBackground from "../assets/svgs/NavLowerbackgroung.svg";
import { NavLink } from "react-router-dom";
import { Routes } from "./routes";
import { CgMenuLeft, CgClose } from "react-icons/cg";
import { useState } from "react";
import clsx from "clsx";

const MenuButton = ({ onClick = () => {}, menuVisible = false }) => {
  return (
    <div onClick={onClick} className="menuButton">
      {menuVisible ? (
        <CgClose className="menuIconStyle" size={30} />
      ) : (
        <CgMenuLeft className="menuIconStyle" size={30} />
      )}
    </div>
  );
};
export const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleSidenav = () => {
    setMenuVisible((prevState) => !prevState);
  };
  console.log({ menuVisible });
  return (
    <>
      {/* app heading */}
      <div className="appHeader">
        <MenuButton onClick={toggleSidenav} menuVisible={menuVisible} />
        <div className="appHeaderContent">
          <img className="logo_img" src={Logo} alt="simplyInvest" />
          <header className="appHeadingTitle">Simply invest</header>
        </div>
      </div>

      {/* Side navigation */}
      <div className={clsx("sidenav", menuVisible ? "expanded" : "collapsed")}>
        <div class="header_bar">
          <img className="logo_img" src={Logo} alt="simplyInvest" />
          <header>Simply invest</header>
        </div>

        <div className="regis_bar">
          <span className="regis_text">
            AMFI - registered mutual fund distributer
          </span>
        </div>

        {Routes.map((prop, key) => {
          return (
            <div onClick={toggleSidenav}>
              <NavLink to={prop.path} key={key}>
                <span className="navSpan">{prop.sidebarName}</span>
              </NavLink>
            </div>
          );
        })}

        <div className="navBackgroundContainer">
          <img
            className="navBackground"
            src={NavBackground}
            alt="simplyInvest"
          />
        </div>
      </div>
    </>
  );
};
