import React from "react";
import { ActionBarSection } from "../../ActionBarSection";
import { Divider } from "../../common/components/Divider";
import { ContactForm } from "../../contact";
import styles from "./index.module.css";

export const Parivartan = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.headers}>Parivartan</h2>

          <div className={styles.contentContainer}>
            <p>
              Stock Market is an attractive place to make money, but it is
              highly unpredictable & carries high risk also. Even though Markets
              have bounced back significantly from the March lows, portfolio of
              many seasoned & experienced investors are still in loss &
              therefore facing a liquidity crunch in spite of this smart rally.
              If you are among one of them, then Parivartan is the right choice
              for you.
            </p>
            <br />
            <p>
              We have conceptualised a unique concept,{" "}
              <b>first time in India</b>, called - <b>“Parivartan”</b>. It is
              totally safe, transparent & a full-proof solution to{" "}
              <b>convert all your Equity losses into an Assured Profit</b>.
            </p>
          </div>

          <div>
            <h3 className={styles.subHeaderStyles}>How does it work :</h3>

            <div style={{ paddingLeft: 10 }}>
              <ul className={styles.listStyles}>
                <li>
                  <p>
                    Email us the list of all your loss-making Shares / MF in an
                    Excel file.
                  </p>
                </li>
                <li>
                  <p>
                    Sell them through your own broker, after our evaluation.{" "}
                  </p>
                </li>
                <li>
                  <p>
                    We will then construct a new Mutual Fund Portfolio (MFP)
                    from the exact sale proceeds of your sold Shares / MF (No
                    extra money is needed) at a flat fee of 2% of the portfolio
                    value.
                  </p>
                </li>
                <li>
                  <p>
                    After 1 year, we will evaluate the value of the MFP with
                    your sold Shares / MF.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.sectionWrapper}>
            <h3 className={styles.subHeaderStyles}>Unique points :</h3>

            <div>
              <p>
                In case of any loss is found in the MFP, we will fully reimburse
                that without any excuse. If the MFP is unable to generate our
                fees, we will give back that also & last but not the least, we
                won’t be taking anything from the Profits generated from the
                MFP, it will totally be yours only. It is totally a win-win & a
                sure shot solution for you without any hidden meanings or any
                Conditions. All the above assurances are given in writing.
              </p>
            </div>
          </div>

          <div className={styles.sectionWrapper}>
            <h3 className={styles.subHeaderStyles}>Just one criteria :</h3>

            <div>
              <p>
                The minimum value of your Shares should be of Rs.50,000/=,
                spread over 5 Companies. So, If you feel that our two & half
                decade of experience with the above assurance can really turn
                around your portfolio, then let’s give it a try.
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
