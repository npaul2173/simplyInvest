import "./index.styles.css";
import Logo from "../assets/svgs/LOGO.svg";
export const NavBar = () => {
  return (
    <div class="sidenav">
      <div class="header_bar">
        <img class="logo_img" src={Logo} alt="simplyInvest" />
        <header>Simply invest</header>
      </div>

      <div class="regis_bar">
        <span class="regis_text">
          AMFI - registered mutual fund distributer
        </span>
      </div>

      <a style={{ fontFamily: "Roboto Condensed" }} href="#" class="active">
        <span>Home</span>
      </a>
      <a href="#">
        <span>About us</span>
      </a>
      <a href="#">
        <span>Our Services</span>
      </a>
      <a href="#">
        <span>Parivartan</span>
      </a>
      <a href="#">
        <span>Learning centre</span>
      </a>
      <a href="#">
        <span>Invest online</span>
      </a>
    </div>
  );
};
