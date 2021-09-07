import React from "react";
import styles from "./index.module.css";
import { AiOutlineCloudDownload } from "react-icons/ai";

export const DownloadButton = () => {
  return (
    // <div className={styles.container}>
    <a
      rel="noreferrer"
      href="https://www.hq.nasa.gov/alsj/a17/A17_FlightPlan.pdf"
      target="_blank"
      download
      className={styles.downloadBtnContainer}
    >
      <AiOutlineCloudDownload className={styles.downloadIcon} />
      <span> Download Brochure</span>
    </a>
    // </div>
  );
};