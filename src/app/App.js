import "./App.css";
import React from "react";
// import { ContactForm } from "../contact/";
import { NavBar } from "../nav";
// import { LowerNav } from "../lowerNav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Routes } from "../nav/routes";
import { ContactForm } from "../contact";
import { LowerNav } from "../lowerNav";
import { FloatingButtons } from "../floatingButtons";

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
            </Switch>

            <LowerNav />
          </div>

          <div className="contactWrapper">
            <ContactForm />
          </div>

          <FloatingButtons />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
