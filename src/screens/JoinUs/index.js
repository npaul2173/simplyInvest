import React, { useEffect } from "react";
import { ActionBarSection } from "../../ActionBarSection";
import { Divider } from "../../common/components/Divider";
import { ContactForm } from "../../contact";
import styles from "./index.module.css";

export const JoinUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div style={{ overflowY: "auto" }}>
        <h2 className={styles.headers}>Join Us</h2>

        <div className={styles.subContanet}>
          <div className={styles.contentNoColumns}>
            With a vision to be a role model in HR practices, we believe in
            helping our employees grow knowledge, which will exploit their true
            potential in order to succeed in life.
            <br />
            <br /> If you think that you have the passion, zeal to perform & in
            need of work then do forward your updated resume (in .doc format),
            recent pass-port size colour scanned photograph & expected salary at{" "}
            <b>simplyinvest@yahoo.in</b> by mentioning{" "}
            <b>“Career – Your name”</b> in the subject line. We
            <br />
            <br />
            will surely get in touch with you at the earliest with the right
            opportunity for you.
          </div>
        </div>
      </div>

      <div className={styles.contactsContainer}>
        <ContactForm />
        <Divider spacing={40} width={"50%"} />
        <ActionBarSection />
      </div>
    </div>
  );
};
