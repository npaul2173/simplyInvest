import React, { useEffect } from "react";
import { ActionBarSection } from "../../ActionBarSection";
import { Divider } from "../../common/components/Divider";
import { ContactForm } from "../../contact";
import styles from "./index.module.css";

export const Sip = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.headers}>SIP</h2>
        <div className={styles.content}>
          <p>
            A Systematic Investment Plan (or better known as SIP) is based on
            the simple strategy of investing a fixed amount on a fixed date of
            every month, for a long time to achieve long-term financial goals
            (like your child’s education, their marriage, buying house or
            retirement) Your money is automatically debited from your bank
            account every month.
          </p>
          <br />
          <br />
          <p>
            When you invest using a SIP, you don’t need to worry about timing
            your investment at all. There is a popular saying – drop by drop
            fills the bucket. A SIP also works on the same principal, just like
            a RD with a Bank.
          </p>
          <br />
          <br />{" "}
          <p>
            <b>Advantages</b>: Convenience, Rupee Cost Averaging, Power of
            Compounding, 2x returns than RD, brings financial discipline,
            pocket-friendly, No Timing the market, Easy to invest
          </p>
          <br />
          <br />
          <p>
            <b>Most Important</b> - Don't put any random time period in SIP. Tag
            each SIP with your Life's Goal. All you need to do is use your due
            diligence while selecting the fund as per your investment horizon,
            and maintain regularity in paying the required amount every month.
            Yes, the process of investing in SIP is as simple as that.
          </p>
          <br />
          <br />
        </div>
        <p>For more understanding, click on the link below :</p>
      </div>

      <div className={styles.contactsContainer}>
        <ContactForm />
        <Divider spacing={40} width={"50%"} />
        <ActionBarSection />
      </div>
    </div>
  );
};
