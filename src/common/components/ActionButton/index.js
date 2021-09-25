import clsx from "clsx";
import { AiFillCaretRight } from "react-icons/ai";
import "./index.styles.css";

export const ActionButtonKYC = () => {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href="https://www.karvykra.com/UPanSearchGlobalWithPanExempt.aspx"
    >
      <div className={clsx("actionButtonWrapper", "buttonKYCStyle")}>
        <div className="titleWrapper">Track your KYC status</div>
        <div className="actionButtonIconWrapper">
          <AiFillCaretRight className="actionButtonArrowRight" />
        </div>
      </div>
    </a>
  );
};

export const ActionButtonFatca = () => {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href="https://www.camsonline.com/Investors/Service-requests/FATCA&CRS"
    >
      <div className={clsx("actionButtonWrapper", "buttonFatcaStyle")}>
        <div className="titleWrapper">Submit your FATCA/CRS</div>
        <div className="actionButtonIconWrapper">
          <AiFillCaretRight className="actionButtonArrowRight" />
        </div>
      </div>
    </a>
  );
};

export const ActionButtonSupplementary = () => {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href="https://www.pan.utiitsl.com/panaadhaarlink/forms/pan.html/panaadhaar"
    >
      <div className={clsx("actionButtonWrapper", "buttonSupplymentaryStyle")}>
        <div className="titleWrapper">Supplementary KYC</div>
        <div className="actionButtonIconWrapper">
          <AiFillCaretRight className="actionButtonArrowRight" />
        </div>
      </div>
    </a>
  );
};
