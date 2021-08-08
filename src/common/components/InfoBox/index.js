import React from "react";
import "./index.styles.css";
import { AiFillCaretRight } from "react-icons/ai";

const InfoBoxInitials = {
  title: "News market",
  description: "https://economictimes.indiatimes.com/markets/sto....",
};

// AiFillCaretRight
export const InfoBox = ({ dataEntity = { ...InfoBoxInitials } }) => {
  return (
    <div className="infoBox">
      <div className="infoContent">
        <div className="datawrapper">
          <h3 className="infoTitle">{dataEntity.title}</h3>
          <h5 className="infoDescription">{dataEntity.description}</h5>
        </div>
        <AiFillCaretRight className="moreIcon" />
      </div>
    </div>
  );
};
