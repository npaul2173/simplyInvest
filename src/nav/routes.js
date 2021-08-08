import { Home } from "../home";

const AboutUs = () => {
  return <h1>About us</h1>;
};
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
