import "./index.styles.css";
import Logo from "../assets/svgs/LOGO.svg";
import NavBackground from "../assets/svgs/NavLowerbackgroung.svg";
import { useHistory } from "react-router-dom";
export const NavBar = () => {
  const history = useHistory();

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

      <a onClick={() => history?.push("/home")} href="/home">
        <span className="navSpan">Home</span>
      </a>
      <a onClick={() => history?.push("/aboutUs")} href="/home">
        <span className="navSpan">About us</span>
      </a>
      <a onClick={() => history?.push("/ourServices")} href="/home">
        <span className="navSpan">Our Services</span>
      </a>
      <a onClick={() => history?.push("/parivartan")} href="/home">
        <span className="navSpan">Parivartan</span>
      </a>
      <a onClick={() => history?.push("/learningCenter")} href="/home">
        <span className="navSpan">Learning centre</span>
      </a>
      <a onClick={() => history?.push("/investOnline")} href="/home">
        <span className="navSpan">Invest online</span>
      </a>

      <div className="navBackgroundContainer">
        <img className="navBackground" src={NavBackground} alt="simplyInvest" />
      </div>
    </div>
  );
};
