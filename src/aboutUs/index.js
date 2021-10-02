import React, { useEffect } from "react";
import "./index.styles.css";
export const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="aboutusContainer">
      <h2 className="headers">About us</h2>
      <div className="aboutusContent">
        We are one of the transparent, dynamic and un-biased professional Mutual
        Fund Distributor firm based out of Kolkata offering personalized
        services in a wide range of investment products like Mutual Funds,
        General Insurance, Tax Saving Schemes, Company Fixed Deposits, Tax
        Savings instruments, Capital Gains Bonds and a unique scheme called
        “Parivartan”. Having started our operations in 2011 from Kolkata, our
        clients are now spread across the length & breadth of the country and
        also in Middle East, Singapore and USA. We operate as a boutique based
        on a SOHO (small office, home office) model.Our office is comprised of
        dedicated resources in services, operations & experienced relationship
        managers. Our entire team is backed with complete knowledge of the
        products, constant innovation in service & by usage of latest technology
        in the Customer service department. Each of our two founding partners
        have more than two and a half decades of experience in the financial
        domain, which includes personal finance, capital market, accounting,
        taxation and mutual fund. We are also in Corporate Training on Soft
        skills, Behavioural. Sales, Financial Planning and functional training
        on Personal Finance.
      </div>

      <div className="ourvaluesContainer">
        <h2 className="headers">Our values</h2>
        <div className="aboutusContent">
          We are one of the transparent, dynamic and un-biased professional
          Mutual Fund Distributor firm based out of Kolkata offering
          personalized services in a wide range of investment products like
          Mutual Funds, General Insurance, Tax Saving Schemes, Company Fixed
          Deposits, Tax Savings instruments, Capital Gains Bonds and a unique
          scheme called “Parivartan”. Having started our operations in 2011 from
          Kolkata, our clients are now spread across the length & breadth of the
          country and also in Middle East, Singapore and USA. We operate as a
          boutique based on a SOHO (small office, home office) model.Our office
          is comprised of dedicated resources in services, operations &
          experienced relationship managers. Our entire team is backed with
          complete knowledge of the products, constant innovation in service &
          by usage of latest technology in the Customer service department. Each
          of our two founding partners have more than two and a half decades of
          experience in the financial domain, which includes personal finance,
          capital market, accounting, taxation and mutual fund. We are also in
          Corporate Training on Soft skills, Behavioural. Sales, Financial
          Planning and functional training on Personal Finance.
        </div>
      </div>
    </div>
  );
};
