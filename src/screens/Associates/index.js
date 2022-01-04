import clsx from "clsx";
import React, { useEffect } from "react";
import { ActionBarSection } from "../../ActionBarSection";
import { Divider } from "../../common/components/Divider";
import { ContactForm } from "../../contact";
import styles from "./index.module.css";

export const Affiliates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const wd = window.screen.availHeight;
    const hd = window.screen.availWidth;

    console.log({ wd, hd });
  }, []);

  return (
    <div className={styles.container}>
      <div style={{ overflowY: "auto" }}>
        <h2 className={styles.headers}>Affiliates</h2>

        <div className={styles.subContanet}>
          <div className={styles.headerContainer}>
            <p className={styles.subHeaderStyle}>Value You</p>
          </div>
          <div className={styles.contentNoColumns}>
            It is a learning solutions company focused on competency building
            through On-line / Off-line Trainings on Communication Skills,
            Personality Development, Investor Awareness, Stock Market, Capital
            Market, Mutual Funds, Banking, Insurance, Financial Literacy & Soft
            Skills to Companies, Banks, Management Institutes and various
            divisions of Indian Armed Forces. Their approach to learning
            combines conceptual clarity with practical application. All of their
            training programs are tailor-made based on functional competency &
            mapping it with the functions & specific job roles of the
            participants.
          </div>

          <div className={styles.contentNoColumns}>
            <b>Farha Zeba</b> is the Founder of Value You. She is an MBA,
            Certified Soft Skills Trainer, Level 1 - NSE Certified Market
            Professional (NCMP), Finance & Marketing personnel with 15 years of
            Banking & AMC experience. A dynamic finance professional having
            pleasant personality, good communicator with persuasive skills, is
            now proving her competency in the Training & Education field.
            <br />
            <br /> She is also spearheading the movement of educating the masses
            (especially Women) on Skill development & Financial Literacy for BMA
            (Bombay Management Association), CMA, Union Bank of India, DRDO,
            Command Hospital, CRPF, CISF, Indian Army, Barrackpore Army
            Hospital, Ichapore Rifle Factory, SAIL, National Insurance, CMRI
            Hospitals, Haldia Petrochemicals, Wipro Infotech, HHI, The Astor,
            IISWBM, Jadavpur University & Terna Group to name a few. They have
            trained more than 5000+ people in 175+ sessions till date. They can
            be reached at <b>valueyou6@gmail.com</b> and further details can be
            accessed at
            <b>www.valueyou.in</b>
          </div>
        </div>

        <div className={styles.subContanet}>
          <div className={styles.headerTwoContainer}>
            <p className={styles.subHeaderStyle}>Sport It Down</p>
          </div>
          <div className={styles.contentNoColumns}>
            It is a Sports Digital content platform to share & promote the
            inspiring stories of budding & emerging Sports person combining with
            the amazing sports facts to engage the Sports enthusiasts of the
            World. They also make creatives, videos, manage Social Media
            accounts of different Companies & provide consultancy services of
            various Sporting events. They are the most competitive affiliate
            programs in the market backed by authenticated & content with a fun
            element attached to it. They believe in Quality over Quantity. Their
            You Tube video : https://youtu.be/oMsoIyXP9PI is already viral. They
            are present on all the Social Media platforms like You Tube
            (https://www.youtube.com/c/SportItDown), Instagram
            (https://www.instagram.com/sportitdown/), Linkedin
            (https://www.linkedin.com/company/sport-it-down) & Facebook
            (https://www.facebook.com/sportitdown) and covers nearly all the
            Sports across the world.
          </div>

          <div className={styles.contentNoColumns}>
            It is the brain-child of <b>Mr. Vedant Garg</b>, a Sports Management
            Professional & started on April, 2020 and as on date they have
            covered more than 120 Athletes across the Globe & have growing fan
            following of 5000+ in just over a year’s time. They can be reached
            at vedantgarg777@gmail.com
            <b>www.valueyou.in</b>
          </div>
        </div>

        <div className={styles.subContanet}>
          <div className={styles.headerThreeContainer}>
            <p className={styles.subHeaderStyle}>Gruham</p>
          </div>
          <div className={styles.contentNoColumns}>
            <b>Gruham</b> (Home-made) is an ultimate online destination, where
            you can get all: ; the freshly grinded, genuine Herbs & Spices,
            premium quality of dry fruits, nuts and exotic range of Snacks &
            Cookies at reasonable prices. It is an entrepreneurial initiative of
            stay-at-home mother <b>Shweta</b>, MBA, to re-instill the roots of
            pure & un-adulterated ingredients in this urbanized society. She
            tied with self-help group of women in her Rajasthan villages &
            empowered them by opening doors to a big market. Determined to make
            a mark, they already have a dedicated customer base of 500+ in just
            6 months of her launch. They can either be contacted at{" "}
            <b>99114 21271</b> or at https://www.facebook.com/gruhamhomemade
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
