import React from "react";
import { InfoBox } from "../common/components/InfoBox";
import "./index.styles.css";
export const Home = () => {
  const newsArray = new Array(3).fill({});
  const announcements = new Array(7).fill({});
  return (
    <div className="homeContainer">
      <div className="rightContainer">
        <div className="headerTitle">
          <span className="headers">MF News</span>
        </div>

        <div className="infowrapper">
          {newsArray.map(() => {
            return (
              <InfoBox
                dataEntity={{
                  title: "Market manners",
                  description: "link to description",
                }}
              />
            );
          })}
        </div>

        <div className="gapwrapper"></div>

        {/* Expert views section */}
        <div className="headerTitle">
          <span className="headers">Expert views</span>
        </div>

        <div className="infowrapper">
          {newsArray.map(() => {
            return (
              <InfoBox
                dataEntity={{
                  title: "Market manners",
                  description: "link to description",
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="leftContainer">
        <div className="headerTitle">
          <span className="headers">Important announcements</span>
        </div>

        <div className="infowrapper">
          {announcements.map(() => {
            return (
              <InfoBox
                dataEntity={{
                  title: "Market manners",
                  description: "link to description",
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
