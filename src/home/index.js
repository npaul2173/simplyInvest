import React, { useEffect } from "react";
import { InfoBox } from "../common/components/InfoBox";
import { StatsContainer } from "../common/components/StatsContainer";
import "./index.styles.css";
export const Home = () => {
  const newsArray = new Array(3).fill({});
  const announcements = new Array(7).fill({});
  // Use effect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="homeContainer">
      <div className="homeFirstContainer">
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

      {/* Stats */}
      <div className="statsSectionWrapper">
        <StatsContainer statTitle="Participants" statNumber="9500+" />
        <StatsContainer statTitle="Courses" statNumber="20+" />
        <StatsContainer statTitle="Trainers" statNumber="13+" />
        <StatsContainer statTitle="Visitors" statNumber="175+" />
      </div>
    </div>
  );
};
