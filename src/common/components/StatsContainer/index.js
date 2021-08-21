import "./index.styles.css";

// Stats Container
export const StatsContainer = ({ statNumber = "0", statTitle = "title" }) => {
  return (
    <div className="statsWrapper">
      <div className="statContainer">{statNumber}</div>
      <div className="statTitle">{statTitle}</div>
    </div>
  );
};
