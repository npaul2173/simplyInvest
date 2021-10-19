import React from "react";
import "./index.modules.css";
export const ToastMessage = ({ message }) => {
  return (
    <div id="toast">
      <div id="img">Icon</div>
      <div id="desc">A notification message..</div>
    </div>
  );
};
