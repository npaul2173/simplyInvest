import "./App.css";
import { ContactForm } from "../contact/";
import { NavBar } from "../nav";
const App = () => {
  return (
    <div>
      <NavBar />
      <div className="main">
        <div className="containerMain">
          <div className="box1">
            <div className="shadow1">
              <div className="content">Box-shadowed element</div>
            </div>
          </div>

          <div className="box3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
