import React from "react";
import "./index.styles.css";

export const ContactForm = () => {
  return (
    <div className="contact_form">
      <div className="container">
        <div className="contact_header">
          <span>Get your queries solved here</span>
        </div>
        <form autoComplete={"off"}>
          <input type="text" id="contact_name" name="Name" placeholder="Name" />

          <input
            type="text"
            id="contact_mobile"
            name="Mobile"
            placeholder="Mobile"
          />

          <input type="text" id="email" name="email" placeholder="Email Id" />

          <textarea
            style={{ height: 80 }}
            rows="12"
            cols="60"
            name="text"
            placeholder="Your Message"
          ></textarea>

          {/* <input type="submit" value="Submit" /> */}
          <button className="submitButton">Submit</button>
        </form>
      </div>
    </div>
  );
};
