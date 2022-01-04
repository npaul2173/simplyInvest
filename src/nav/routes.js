import { AboutUs } from "../screens/aboutUs";
import { Associates } from "../screens/Associates";
import { Career } from "../screens/career";
import { ContactScreen } from "../screens/contactPage";
import { Disclaimer } from "../screens/Disclaimer";
import { Home } from "../screens/home";
import { InvestOnline } from "../screens/InvestOnline";
import { JoinUs } from "../screens/JoinUs";
import { LearningCenter } from "../screens/LearningCentre";
import { OurServices } from "../screens/OurServices";
import { Parivartan } from "../screens/Parivartan";
import { Sip } from "../screens/Sip";

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
    path: "/careeer_with_us",
    sidebarName: "Career with us",
    component: Career,
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
    component: ContactScreen,
  },
];

export const Routes = [
  {
    path: "/",
    sidebarName: "Home",
    component: Home,
    exact: true,
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
