import clsx from "clsx";
import React, { useEffect } from "react";
import { ActionBarSection } from "../../ActionBarSection";
import { Divider } from "../../common/components/Divider";
import { ContactForm } from "../../contact";
import styles from "./index.module.css";

export const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.headers}>About Us</h2>

          <div className={styles.contentContainer}>
            <p>
              We are one of the transparent, dynamic and un-biased professional
              Mutual Fund Distributor firm based out of Kolkata offering
              personalized services in a wide range of investment products like
              Mutual Funds, General Insurance, Tax Saving Schemes, Company Fixed
              Deposits, Tax Savings instruments, Capital Gains Bonds and a
              unique scheme called “Parivartan”.
            </p>
            <br />
            <br />
            <p>
              Having started our operations in 2011 from Kolkata, our clients
              are now spread across the length & breadth of the country and also
              in Middle East, Singapore and USA. We operate as a boutique based
              on a SOHO (small office, home office) model.
            </p>

            <p>
              Our office is comprised of dedicated resources in services,
              operations & experienced relationship managers. Our entire team is
              backed with complete knowledge of the products, constant
              innovation in service & by usage of latest technology in the
              Customer service department. <br /> <br />
              Each of our two founding partners have more than two and a half
              decades of experience in the financial domain, which includes
              personal finance, capital market, accounting, taxation and mutual
              fund. We are also in Corporate Training on Soft skills,
              Behavioural. Sales, Financial Planning and functional training on
              Personal Finance.
            </p>
          </div>

          <div className={styles.secondContainer}>
            <div
              className={clsx(
                styles.sectionWrapper,
                styles.secondSubContainer,
                styles.firstSubcont
              )}
            >
              <h3 className={styles.subHeaderStyles}>Our Motto </h3>

              <div>
                <p>
                  Our motto is to create, enhance, and protect the Wealth of our
                  esteemed Clients i.e. Client's Interest First. We believe in
                  honest, prompt and courteous service. Our focus is to become
                  the most trusted and reliable distributor in the Financial
                  Services sector helping our clients to achieve their financial
                  goals. We follow ethical and transparent business policies and
                  practices. We are also committed to become the best employer
                  in terms of social upliftment.
                </p>
              </div>
            </div>

            <div
              className={clsx(styles.sectionWrapper, styles.secondSubContainer)}
            >
              <h3 className={styles.subHeaderStyles}>Our Mission</h3>

              <div>
                <p>
                  One of the great Scholar had once said – “It is best to be
                  initiated into a mantra by a Guru, who will invest it with his
                  own pranic energy” – This is precisely, what we believe in.
                  Our Mission is to empower our clients to arrive at informed
                  decisions in their personal financial journey by providing
                  plain, simple, straight forward and to the point guidance i.e.
                  Open and Honest Communication and thereby to become ,
                  <i>“The Most Trusted Mutual Fund Distributor”</i>.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.sectionWrapper}>
            <h3 className={styles.subHeaderStyles}>Our Vision</h3>

            <div style={{ paddingLeft: 20 }}>
              <ul className={styles.listStyles}>
                <li>
                  <p>To help the investors in creating wealth.</p>
                </li>
                <li>
                  <p>To forge relationship for Lifetime</p>
                </li>
                <li>
                  <p>
                    To create a society of Informed & Enlightened Investors.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.sectionWrapper}>
            <h3 className={styles.subHeaderStyles}>CSR</h3>

            <div className={styles.contentContainer}>
              <p>
                We believe that businesses exist to sub-serve larger societal
                goals. Therefore, their contribution is best measured by the
                value they create for the society at large, giving beyond
                traditional P&L statements. We believe that our corporate
                strategy which embraces societal development as an integral part
                of our mission of wealth creation for our stakeholders ensures
                the long-term sustainability of our business enterprise.
              </p>
              <p>
                We undertake CSR activities in every part of the business e.g.
                Re-use & Re-cycling of paper, going extra mile in our HR section
                to employ poor & needy persons. We active conduct Investor
                Awareness Programmes and frequently conduct classes to spread
                the Financial Literacy for all the sections of our Society at
                large.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contactsContainer}>
          <ContactForm />
          <Divider spacing={40} width={"50%"} />
          <ActionBarSection />
        </div>
      </div>
    </div>
  );
};
