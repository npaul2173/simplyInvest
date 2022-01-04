import React, { useEffect } from "react";
import { ActionBarSection } from "../../ActionBarSection";
import { Divider } from "../../common/components/Divider";
import { ContactForm } from "../../contact";
import styles from "./index.module.css";

export const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.headers}>Career with us</h2>
        <div className={styles.content}>
          At Simply Invest, we build people who create value, who believe that
          the future belongs to those who are able to create it. Which is why we
          value integrity, creativity, passion, a 'will do' attitude and above
          all else, the will and determination to succeed.
          <br />
          <br /> We leverage human capital for competitiveness by nurturing
          knowledge, entrepreneurship and creativity. We believe it is these
          strengths that will help us successfully compete in a globalised
          environment and complex financial world. We stimulate the drive to be
          the best and take immense pride in being Indian.
          <br />
          <br /> We keep our people intellectually stimulated and give them the
          freedom to take their own decisions and the responsibility to make
          Simply Invest grow through innovation and experimentation.
          <br />
          <br /> Our focus is on relentless value addition to enhance
          competencies. We believe professional growth invests the
          responsibility of both the individual and the organisation.
          <div className={styles.breakPoint}>
            <br />
            <br />
          </div>
          {"    "}
          Simply Invest is an equal opportunities employer. We do not
          discriminate on grounds of Age, Gender, Caste, Creed, Ethnicity,
          Economic or Disability. We recognize that having a work force that
          broadly reflects the composition of the local society in which we
          operate. We thus use diversity as a competitive differentiator, both
          in employment and in customer markets. We stimulate the drive to be
          the best and take immense pride in being Indian.
          <br />
          <br /> With a vision to be a role model in HR practices, we believe in
          helping our employees grow knowledge, which will exploit their true
          potential in order to succeed in life. If you think that you have the
          passion, zeal to perform & in need of work then do forward your
          updated resume (in .doc format), recent pass-port size colour scanned
          photograph & expected salary at simplyinvest@yahoo.in by mentioning
          “Career – Your name” in the subject line.
          <br />
          <br /> We will surely get in touch with you at the earliest with the
          right opportunity for you.
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
