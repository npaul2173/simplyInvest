import {
  ActionButtonFatca,
  ActionButtonKYC,
  ActionButtonSupplementary,
} from "../common/components/ActionButton";
import "./index.styles.css";

export const ActionBarSection = () => {
  return (
    <div className="actionBarWrapper">
      <ActionButtonKYC />
      <ActionButtonFatca />
      <ActionButtonSupplementary />
    </div>
  );
};
