import React, { useContext, useEffect } from "react";
import { ActionBarSection } from "../../ActionBarSection";

import { InfoBox } from "../../common/components/InfoBox";
import { AppContext } from "../../common/utils/Container";
import { ContactForm } from "../../contact";
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
  const appContextValues = useContext(AppContext);
  const { announceMents, announceMentsLoader } = { ...appContextValues };

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

          {!announceMentsLoader ? (
            <div className="infowrapper">
              {announceMents.mfData
                .map((item, index) => {
                  return (
                    <InfoBox
                      key={index.toString()}
                      dataEntity={{
                        title: item.title,
                        description: item.description_link,
                      }}
                    />
                  );
                })
                .reverse()}
            </div>
          ) : (
            <div className="skeletonContainer">
              {arrayThree.map((_, index) => (
                <Skeleton key={index} />
              ))}
            </div>
          )}

          <div className="gapwrapper"></div>

          <div className="headerTitle">
            <span className="headers">Expert views</span>
          </div>
          {!announceMentsLoader ? (
            <div className="infowrapper">
              {announceMents.expData
                .map((item, index) => {
                  return (
                    <InfoBox
                      key={index.toString()}
                      dataEntity={{
                        title: item.title,
                        description: item.description_link,
                      }}
                    />
                  );
                })
                .reverse()}
            </div>
          ) : (
            <div className="skeletonContainer">
              {arrayThree.map(() => (
                <Skeleton />
              ))}
            </div>
          )}
        </div>

        <div className="leftContainer">
          <div className="headerTitle">
            <span className="headers">Important Announcements</span>
          </div>

          {!announceMentsLoader ? (
            <div className="infowrapper">
              {announceMents.impData
                .map((item, index) => {
                  return (
                    <InfoBox
                      key={index.toString()}
                      dataEntity={{
                        title: item.title,
                        description: item.description_link,
                      }}
                    />
                  );
                })
                .reverse()}
            </div>
          ) : (
            <div className="skeletonContainer">
              {arrayThree.map(() => (
                <Skeleton />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={StyleSheet.sideSection}>
        <ContactForm />
        <ActionBarSection />
      </div>
    </div>
  );
};
