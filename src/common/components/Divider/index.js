import React from "react";
import styles from "./index.module.css";

export const Divider = ({ spacing = 20, width }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        className={styles.divider}
        style={{ marginTop: spacing, marginBottom: spacing, width }}
      ></div>
    </div>
  );
};
