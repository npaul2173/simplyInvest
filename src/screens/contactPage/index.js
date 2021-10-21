import React from "react";
import styles from "./index.module.css";
export const ContactScreen = () => {
  return (
    <div>
      <h1>Contact us</h1>

      {/* <div className={styles.mapView}> */}
      <iframe
        className={styles.mapView}
        title="MapofSimplyInvest"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14736.098949533562!2d88.3898399!3d22.5781781!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1e3bcf6fc0ac5a79!2sSimply%20Invest!5e0!3m2!1sen!2sin!4v1634647376331!5m2!1sen!2sin"
        width="100%"
        height="450px"
        allowFullScreen
        loading="lazy"
      ></iframe>
      {/* </div> */}
    </div>
  );
};
