import React, { useEffect } from "react";
import { APP_URLS } from "../api/endpoints";
import { InfoBox } from "../common/components/InfoBox";
import "./index.styles.css";

export const ANNOUNCEMENTS_TYPE = {
  IMPORTANT: "IMPORTANT",
  MF: "MF",
  EXPERT: "EXPERT",
};
export const Home = () => {
  const [announceMents, setAnnoucements] = React.useState({
    mfData: [],
    impData: [],
    expData: [],
  });

  // Use effect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(APP_URLS.ANNOUNCEMENTS)
      .then((response) => response.json())
      .then((responseJson) => {
        const mfData = responseJson.filter(
          (item) => item.announcement_type === ANNOUNCEMENTS_TYPE.MF
        );
        const impData = responseJson.filter(
          (item) => item.announcement_type === ANNOUNCEMENTS_TYPE.IMPORTANT
        );
        const expData = responseJson.filter(
          (item) => item.announcement_type === ANNOUNCEMENTS_TYPE.EXPERT
        );
        setAnnoucements({ mfData, impData, expData });
      });
  }, []);

  console.log({ announceMents });
  return (
    <div className="homeContainer">
      <div className="homeFirstContainer">
        <div className="rightContainer">
          <div className="headerTitle">
            <span className="headers">MF News</span>
          </div>

          <div className="infowrapper">
            {announceMents.mfData.map((item, index) => {
              return (
                <InfoBox
                  key={item.announcement_id}
                  dataEntity={{
                    title: item.title,
                    description: item.description_link,
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
            {announceMents.expData.map((item, index) => {
              return (
                <InfoBox
                  key={item.announcement_id}
                  dataEntity={{
                    title: item.title,
                    description: item.description_link,
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
            {announceMents.impData.map((item, index) => {
              return (
                <InfoBox
                  key={item.announcement_id}
                  dataEntity={{
                    title: item.title,
                    description: item.description_link,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
