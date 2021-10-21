import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import Logo from "../assets/svgs/LOGO.svg";
import NavBackground from "../assets/svgs/NavLowerbackgroung.svg";
import { NavLink } from "react-router-dom";
import { Routes } from "./routes";
import { CgMenuLeft, CgClose } from "react-icons/cg";
import clsx from "clsx";
import { DownloadButton } from "../common/components/DownloadButton";
import { StatsContainer } from "../common/components/StatsContainer";
import { AiFillCaretRight } from "react-icons/ai";
import { matchPath } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { APP_URLS } from "../api/endpoints";

const MenuButton = ({ onClick = () => {}, menuVisible = false }) => {
  return (
    <div onClick={onClick} className={styles.menuButton}>
      {menuVisible ? (
        <CgClose className={styles.menuIconStyle} size={30} />
      ) : (
        <CgMenuLeft className={styles.menuIconStyle} size={30} />
      )}
    </div>
  );
};
export const NavBar = () => {
  const location = useLocation();
  const [VisitorCount, setVisitorCount] = useState(null);
  const [hoverRoute, setHoverRoute] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleSidenav = () => {
    setMenuVisible((prevState) => !prevState);
  };

  useEffect(() => {
    fetch(APP_URLS.VISITOR_COUNT).then(async (response) => {
      const responseJson = await response.json();
      setVisitorCount(responseJson);
    });
  }, []);
  return (
    <>
      {/* app heading */}
      <div className={styles.appHeader}>
        <MenuButton onClick={toggleSidenav} menuVisible={menuVisible} />
        <div className={styles.appHeaderContent}>
          <img className={styles.logo_img} src={Logo} alt="simplyInvest" />
          <header className={styles.appHeadingTitle}>Simply invest</header>
        </div>
      </div>

      {/* Side navigation */}
      <div
        className={clsx(
          styles.sidenav,
          menuVisible ? styles.expanded : styles.collapsed
        )}
      >
        <div className={styles.header_bar}>
          <img className={styles.logo_img} src={Logo} alt="simplyInvest" />
          <header>Simply invest</header>
        </div>

        <div className={styles.regis_bar}>
          <p className={styles.regis_text}>
            AMFI -registered mutual fund distributer
          </p>
        </div>

        {Routes.map((prop, key) => {
          const isParentActive = !!(
            prop.path &&
            matchPath(location.pathname, { path: prop.path, exact: prop.path })
          );

          return (
            <div key={key.toString()} onClick={toggleSidenav}>
              <NavLink
                onMouseEnter={() => setHoverRoute(key)}
                onMouseLeave={() => setHoverRoute("")}
                to={prop.path}
                key={key}
                style={{
                  justifyContent: "space-between",
                  display: "flex",
                  height: 50,
                  alignItems: "center",
                  paddingRight: 20,
                }}
                className={isParentActive ? styles.selectedRoute : ""}
              >
                <span className={styles.navSpan}>{prop.sidebarName}</span>
                <AiFillCaretRight
                  className={
                    hoverRoute === key || isParentActive
                      ? styles.selectedIconArrow
                      : styles.selectedIconArrowHidden
                  }
                  size={20}
                />
              </NavLink>
            </div>
          );
        })}
        <div className={styles.visitsCount}>
          {VisitorCount !== 0 && (
            <StatsContainer
              statTitle="No of visitors"
              statNumber={VisitorCount}
            />
          )}
        </div>
        <div className={styles.navBackgroundContainer}>
          <img
            className={styles.navBackground}
            src={NavBackground}
            alt="simplyInvest"
          />
        </div>
      </div>

      <div className={styles.downloadButtonPlacer}>
        <DownloadButton />
      </div>
    </>
  );
};
