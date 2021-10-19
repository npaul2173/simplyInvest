import React from "react";
import "./index.modules.css";
import { BsCheck } from "react-icons/bs";

export const ToastMessage = ({ message }) => {
  return (
    <div id="toast">
      <div id="img">
        <BsCheck style={{ fontSize: 30 }} />
      </div>
      <div id="desc">A notification message..</div>
    </div>
  );
};
