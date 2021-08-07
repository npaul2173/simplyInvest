import "./index.styles.css";
import Logo from "../assets/svgs/Logo.svg";
export const NavBar = () => {
  return (
    <div class="sidenav">
      <div class="header_bar">
        {/* <img class="logo_img" src='../assets/svgs/' alt="simplyInvest" /> */}
        <Logo />
        <header>Simply invest</header>
      </div>

      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
  );
};
