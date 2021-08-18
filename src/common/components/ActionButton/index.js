import clsx from "clsx";
import { AiFillCaretRight } from "react-icons/ai";
import "./index.styles.css";

export const ActionButton_1 = () => {
  return (
    <div className={clsx("actionButtonWrapper", "buttonKYCStyle")}>
      <div className="titleWrapper">Track your KYC status</div>
      <div className="actionButtonIconWrapper">
        <AiFillCaretRight className="actionButtonArrowRight" />
      </div>
    </div>
  );
};

export const ActionButton_2 = () => {
  return (
    <div className={clsx("actionButtonWrapper", "buttonFatcaStyle")}>
      <div className="titleWrapper">Submit your FATCA/CRS</div>
      <div className="actionButtonIconWrapper">
        <AiFillCaretRight className="actionButtonArrowRight" />
      </div>
    </div>
  );
};

export const ActionButton_3 = () => {
  return (
    <div className={clsx("actionButtonWrapper", "buttonSupplymentaryStyle")}>
      <div className="titleWrapper">Supplementary KYC</div>
      <div className="actionButtonIconWrapper">
        <AiFillCaretRight className="actionButtonArrowRight" />
      </div>
    </div>
  );
};
