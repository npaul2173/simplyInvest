import clsx from "clsx";
import React, { useEffect } from "react";
import { ActionBarSection } from "../../ActionBarSection";
import { Divider } from "../../common/components/Divider";
import { ContactForm } from "../../contact";
import styles from "./index.module.css";

export const OurServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.headers}>Our Services</h2>

          <h3 className={styles.subHeaderStyles}>Mutual Fund</h3>

          <p>
            <b>
              We are registered MFD and work with all leading Indian Asset
              Management Companies which are loosely known as Mutual Funds.
              Mutual Fund is a professionally managed collective investment
              vehicle, governed by SEBI, that enables a collective group of
              individuals to:
            </b>
          </p>

          <div style={{ paddingLeft: 10 }}>
            <ul className={styles.listStyles}>
              <li>
                <p>
                  Pool their investible surplus funds and collectively invest in
                  instruments / assets for a common investment objective
                </p>
              </li>
              <li>
                <p>
                  Optimize the knowledge and experience of a Fund Manager, a
                  capacity that individually they may not have.
                </p>
              </li>
              <li>
                <p>
                  Benefit from the economies of scale which size enables and is
                  not available on an individual basis.
                </p>
              </li>
              <li>
                <p>
                  After 1 year, we will evaluate the value of the MFP with your
                  sold Shares / MF.
                </p>
              </li>
            </ul>
          </div>

          <div className={styles.secondContainer}>
            <div
              style={{ paddingRight: 20 }}
              className={clsx(styles.sectionWrapper, styles.secondSubContainer)}
            >
              <h3 className={styles.subHeaderStyles}>Financial Planning </h3>

              <div>
                <p>
                  Our experienced financial experts will design a personalized
                  Mutual Fund Portfolio after understanding your financial
                  situation, risk profiling, taxation and recommend the Schemes
                  which can help you fulfil your financial Goals. <br />
                  <br />
                  We will keep reviewing & rebalance it periodically, so that
                  your portfolio is on the track of achieving your Goals. <br />
                  <br />
                  There are NO CHARGES for this Service.
                </p>
              </div>
            </div>

            <div
              className={clsx(styles.sectionWrapper, styles.secondSubContainer)}
            >
              <h3 className={styles.subHeaderStyles}>
                Review my existing portfolio
              </h3>

              <div>
                <p>
                  This is a unique service for existing Mutual Fund Investors,
                  in which our experts will review your current Mutual Fund
                  Portfolio, point out the non-performing Schemes and help you
                  in building a new portfolio without adding a single penny.
                  <br />
                  <br />
                  There are again NO CHARGES for this Service.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.sectionWrapper}>
            <h3 className={styles.subHeaderStyles}>Right Ninesh</h3>

            <p>
              This unique Professional service in Stock Markets is for all those
              people who believes in the Stock Market & require guidance to
              invest on regular basis. Under this service we will assist you to
              identify the opportunities to build your stock portfolio. <br />
              <br />
              We won’t handle your securities or funds but we provide pure
              guidance to build your stock portfolio. Our focus will be on
              wealth creation in the long run (`&gt;`2 years). <br />
              <br />
              We will only recommend after in-depth research & conviction. So,
              our calls will be few, but will have solid potential. Calls will
              be from BSE, NSE, IPO, SME & Mutual Funds universe. We don’t
              believe in Speculation, so NO Inter-day/Intra-day, BTST & F&O
              calls will be given.
            </p>
            <div style={{ paddingLeft: 10, marginTop: 10 }}>
              <ul className={styles.listStyles}>
                <li>
                  <p>Identify under-valued & undiscovered investment ideas.</p>
                </li>

                <li>
                  <p>Proper entry, hold and timely exit guidance.</p>
                </li>

                <li>
                  <p>
                    Profit maximisation suggestions with Loss protection. We
                    will reimburse you a minimum of 10% returns (1 yr. avg. FD
                    rate x 2yrs) in case the average returns from all our
                    recommendations doesn’t fetch you 10% even after 2 years.
                    Except in case of Black Swan events, War, Natural
                    disasters).
                  </p>
                </li>
                <li>
                  <p>No handling of your Funds / Securities.</p>
                </li>
                <li>
                  <p>Constant 1-on-1 interaction on WhatsApp.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.sectionWrapper}>
            <h3 className={styles.subHeaderStyles}>NRI Services</h3>

            <p>
              India is a dream destination to invest. Not just because a
              much-publicized report has predicted that the Indian economy will
              become one of the world's largest by year 2050 - which is anyway
              too far out to invest for. <br />
              <br />
              We offer a convenient and hassle-free way of Investing in the
              Indian Securities Market to NRIs who wish to participate in the
              Indian Growth story. We guide our clients at every step of their
              investment needs so that they have complete peace of mind about
              their investments in India.
              <br />
              <br />
              Our capability to analyze relevant information in market trends,
              relevant data and the best-in-class investment products plays an
              important role in making a right decision. With a long experience
              of capital markets we facilitate an excellent investment
              experience.
            </p>
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
