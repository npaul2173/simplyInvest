import "./App.css";
import React, { useEffect } from "react";
import { NavBar } from "../nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LowerRoutes, Routes } from "../nav/routes";
import { ContactForm } from "../contact";
import { LowerNav } from "../lowerNav";
import { FloatingButtons } from "../floatingButtons";
import { ActionBarSection } from "../ActionBarSection";
import { ToastMessage } from "../common/components/Toast";
import { APP_URLS } from "../api/endpoints";

const App = () => {
  useEffect(() => {
    fetch(APP_URLS.GET_MACHINE_DATA).then(async (response) => {
      const responseJson = await response.json();
      console.log({ responseJson });
    });
  }, []);

  useEffect(() => {
    const data = localStorage.getItem("user");
    localStorage.setItem("user", "12.erwe32");

    console.log({ data });
  }, []);
  return (
    <BrowserRouter>
      <div className="mainWrapper">
        <ToastMessage />
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
