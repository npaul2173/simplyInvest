import clsx from "clsx";
import { AiFillCaretRight } from "react-icons/ai";
import "./index.styles.css";

export const ActionButtonKYC = () => {
  return (
    <div className={clsx("actionButtonWrapper", "buttonKYCStyle")}>
      <div className="titleWrapper">Track your KYC status</div>
      <div className="actionButtonIconWrapper">
        <AiFillCaretRight className="actionButtonArrowRight" />
      </div>
    </div>
  );
};

export const ActionButtonFatca = () => {
  return (
    <div className={clsx("actionButtonWrapper", "buttonFatcaStyle")}>
      <div className="titleWrapper">Submit your FATCA/CRS</div>
      <div className="actionButtonIconWrapper">
        <AiFillCaretRight className="actionButtonArrowRight" />
      </div>
    </div>
  );
};

export const ActionButtonSupplementary = () => {
  return (
    <div className={clsx("actionButtonWrapper", "buttonSupplymentaryStyle")}>
      <div className="titleWrapper">Supplementary KYC</div>
      <div className="actionButtonIconWrapper">
        <AiFillCaretRight className="actionButtonArrowRight" />
      </div>
    </div>
  );
};
