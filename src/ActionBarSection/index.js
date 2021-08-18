import {
  FATCAButton,
  KYCButton,
  SupplementaryButton,
} from "../common/components/ActionButton";
import "./index.styles.css";

export const ActionBarSection = () => {
  return (
    <div className="actionBarWrapper">
      <KYCButton />
      <FATCAButton />
      <SupplementaryButton />
    </div>
  );
};
