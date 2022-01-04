import React from "react";
import { ContactForm } from "../../contact";
import styles from "./index.module.css";
export const ContactScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        <div className={styles.mapViewContainer}>
          {/* <h2 className={styles.headers}>Contact us</h2> */}
          <h2 className={styles.headers}>Address</h2>

          <div className={styles.addressContainer}>
            P – 329, C.I.T.Road, 1st Floor, Kankurgachi, Behind Ram Krishna
            Samadhi Road P.O., Kolkata – 700 054, WB, India
          </div>

          <iframe
            className={styles.mapView}
            title="MapofSimplyInvest"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14736.098949533562!2d88.3898399!3d22.5781781!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1e3bcf6fc0ac5a79!2sSimply%20Invest!5e0!3m2!1sen!2sin!4v1634647376331!5m2!1sen!2sin"
            width="100%"
            height="400px"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div className={styles.contactsContainer}>
          <ContactForm />
        </div>
      </div>

      <div className={styles.contactDetails}>
        <div>
          <h2 className={styles.headers}>Mail & Website</h2>
          <p>simplyinvest@yahoo.in &nbsp http://simply-invest.in</p>
        </div>
        <div className={styles.sectionWrapper}>
          <h2 className={styles.headers}>Contacts</h2>
          <p>(+91)98310 51920 </p>
        </div>
      </div>
    </div>
  );
};
