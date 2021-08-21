import "./App.css";
import React from "react";
// import { ContactForm } from "../contact/";
import { NavBar } from "../nav";
// import { LowerNav } from "../lowerNav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LowerRoutes, Routes } from "../nav/routes";
import { ContactForm } from "../contact";
import { LowerNav } from "../lowerNav";
import { FloatingButtons } from "../floatingButtons";
import { ActionBarSection } from "../ActionBarSection";

const App = () => {
  return (
    <BrowserRouter>
      <div className="mainWrapper">
        <NavBar />
        <div className="contentWrapper">
          <div className="box1">
            <Switch>
              {Routes.map((route) => (
                <Route exact path={route.path} key={route.path}>
                  <route.component />
                </Route>
              ))}
              {LowerRoutes.map((route) => (
                <Route exact path={route.path} key={route.path}>
                  <route.component />
                </Route>
              ))}
            </Switch>
          </div>

          <div className="contactWrapper">
            <div className="contactAppWrapper">
              <ContactForm />
            </div>
            <div className="actionAppWrapper">
              <ActionBarSection />
            </div>
          </div>
        </div>
      </div>
      <LowerNav />
      <FloatingButtons />
    </BrowserRouter>
  );
};

export default App;
