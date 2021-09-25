import React from "react";
import styles from "./index.module.css";
import { AiOutlineCloudDownload } from "react-icons/ai";

const DOWNLOAD_PDF_URL =
  "http://3.109.69.174:1337/uploads/sibrochure_ee6a195e4a.pdf";

export const DownloadButton = () => {
  return (
    // <div className={styles.container}>
    <a
      rel="noreferrer"
      href={DOWNLOAD_PDF_URL}
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
