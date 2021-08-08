import "./App.css";
import React from "react";
import { ContactForm } from "../contact/";
import { NavBar } from "../nav";
import { LowerNav } from "../lowerNav";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="main">
          <div className="containerMain">
            <div className="box1">
              {/* <div className="shadow1">
                <div className="content">Box-shadowed element</div>
              </div>
              <div className="shadow1">
                <div className="content">Box-shadowed element</div>
              </div>
              <div className="shadow1">
                <div className="content">Box-shadowed element</div>
              </div>
              <div className="shadow1">
                <div className="content">Box-shadowed element</div>
              </div> */}
            </div>

            <div className="box3">
              <ContactForm />
            </div>
          </div>
        </div>

        <LowerNav />
      </BrowserRouter>
    </div>
  );
};

export default App;
