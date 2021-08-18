import {
  ActionButton_1,
  ActionButton_2,
  ActionButton_3,
} from "../common/components/ActionButton";
import "./index.styles.css";

export const ActionBarSection = () => {
  return (
    <div className="actionBarWrapper">
      <ActionButton_1 />
      <ActionButton_2 />
      <ActionButton_3 />
    </div>
  );
};
