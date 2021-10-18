import React, { useEffect } from "react";
import { APP_URLS } from "../api/endpoints";
import { InfoBox } from "../common/components/InfoBox";
import "./index.styles.css";

const arrayThree = new Array(3).fill({});
export const ANNOUNCEMENTS_TYPE = {
  IMPORTANT: "IMPORTANT",
  MF: "MF",
  EXPERT: "EXPERT",
};

const Skeleton = () => {
  return (
    <div className="prod--wrapper">
      <div className="prod--col prod--details">
        <div className="prod--row prod--name">
          <span
            id="productName"
            className="prod--name-text skeleton-loader"
          ></span>
        </div>
      </div>
    </div>
  );
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

  return (
    <div className="homeContainer">
      <div className="homeFirstContainer">
        <div className="rightContainer">
          <div className="headerTitle">
            <span className="headers">MF News</span>
          </div>

          {announceMents.mfData.length !== 0 ? (
            <div className="infowrapper">
              {announceMents.mfData.map((item, index) => {
                return (
                  <InfoBox
                    key={index.toString()}
                    dataEntity={{
                      title: item.title,
                      description: item.description_link,
                    }}
                  />
                );
              })}
            </div>
          ) : (
            <div className="skeletonContainer">
              {arrayThree.map(() => (
                <Skeleton />
              ))}
            </div>
          )}

          <div className="gapwrapper"></div>

          <div className="headerTitle">
            <span className="headers">Expert views</span>
          </div>

          <div className="infowrapper">
            {announceMents.expData.map((item, index) => {
              return (
                <InfoBox
                  key={index.toString()}
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
            <span className="headers">Important Announcements</span>
          </div>

          <div className="infowrapper">
            {announceMents.impData.map((item, index) => {
              return (
                <InfoBox
                  key={index.toString()}
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
