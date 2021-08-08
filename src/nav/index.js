import "./index.styles.css";
import Logo from "../assets/svgs/LOGO.svg";
import NavBackground from "../assets/svgs/NavLowerbackgroung.svg";
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

      <a href="#" class="active">
        <span className="navSpan">Home</span>
      </a>
      <a href="#">
        <span className="navSpan">About us</span>
      </a>
      <a href="#">
        <span className="navSpan">Our Services</span>
      </a>
      <a href="#">
        <span className="navSpan">Parivartan</span>
      </a>
      <a href="#">
        <span className="navSpan">Learning centre</span>
      </a>
      <a href="#">
        <span className="navSpan">Invest online</span>
      </a>

      <div className="navBackgroundContainer">
        <img className="navBackground" src={NavBackground} alt="simplyInvest" />
      </div>
    </div>
  );
};
