import { AboutUs } from "../aboutUs";
import { Home } from "../home";

const OurServices = () => {
  return <h1>Our Services</h1>;
};

const Parivartan = () => {
  return <h1>Parivartan</h1>;
};

const LearningCenter = () => {
  return <h1>Learning Center</h1>;
};
const InvestOnline = () => {
  return <h1>Invest online</h1>;
};

const Sip = () => {
  return <h1>Sip</h1>;
};

const Associates = () => {
  return <h1>Associates</h1>;
};

const Disclaimer = () => {
  return <h1>Disclaimer</h1>;
};
const JoinUs = () => {
  return <h1>Join Us</h1>;
};
const Contactus = () => {
  return <h1>Contact us</h1>;
};

export const LowerRoutes = [
  {
    path: "/sip",
    sidebarName: "SIP",
    component: Sip,
  },
  {
    path: "/associates",
    sidebarName: "Associates",
    component: Associates,
  },
  {
    path: "/disclaimer",
    sidebarName: "Disclaimer",
    component: Disclaimer,
  },
  {
    path: "/joinUs",
    sidebarName: "Join us",
    component: JoinUs,
  },
  {
    path: "/contactUs",
    sidebarName: "Contact us",
    component: Contactus,
  },
];

export const Routes = [
  {
    path: "/",
    sidebarName: "Home",
    component: Home,
  },
  {
    path: "/aboutUs",
    sidebarName: "About us",
    component: AboutUs,
  },
  {
    path: "/ourServices",
    sidebarName: "Our Services",
    component: OurServices,
  },
  {
    path: "/parivartan",
    sidebarName: "Parivartan",
    component: Parivartan,
  },
  {
    path: "/learningCenter",
    sidebarName: "Learning centre",
    component: LearningCenter,
  },
  {
    path: "/investOnline",
    sidebarName: "Invest online",
    component: InvestOnline,
  },
];
