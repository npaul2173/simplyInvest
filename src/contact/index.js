import React from "react";
import { APP_URLS } from "../api/endpoints";
import "./index.styles.css";

export const ContactForm = () => {
  const [name, setName] = React.useState("");
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [emailID, setEmailID] = React.useState("");
  const [description, setDescription] = React.useState("");

  const saveContact = () => {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const launch_toast = () => {
      var x = document.getElementById("toast");
      var divText = document.getElementById("desc");
      console.log(divText.innerHTML);
      divText.innerHTML = "Message has been sent";
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
    };
    launch_toast();
    // console.log({ name, mobileNumber, emailID, description });
    // fetch(APP_URLS.SAVE_CONTACT, {
    //   method: "POST",
    //   body: `Name=${name}&Mobile=${mobileNumber}&Email=${emailID}&Description=${description}`,
    //   headers: headersList,
    // })
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (data) {
    //     console.log(data);
    //   });
  };

  return (
    <div className="contact_form">
      <div className="container">
        <div className="contact_header">
          <span>Get your queries solved here</span>
        </div>
        <form autoComplete={"off"}>
          <input
            type="text"
            id="contact_name"
            name="Name"
            placeholder="Name"
            onInput={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            id="contact_mobile"
            name="Mobile"
            placeholder="Mobile"
            onInput={(e) => setMobileNumber(e.target.value)}
          />

          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email Id"
            onInput={(e) => setEmailID(e.target.value)}
          />

          <textarea
            style={{ height: 80 }}
            rows="12"
            cols="60"
            name="text"
            placeholder="Your Message"
            onInput={(e) => setDescription(e.target.value)}
          />

          {/* <input type="submit" value="Submit" /> */}
          <div className="submitButton" onClick={saveContact}>
            Submit
          </div>
        </form>
      </div>
    </div>
  );
};
