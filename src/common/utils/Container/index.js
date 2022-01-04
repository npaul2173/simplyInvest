import React, { useEffect } from "react";
import { APP_URLS } from "../../../api/endpoints";

export const AppContext = React.createContext();
const ANNOUNCEMENTS_TYPE = {
  IMPORTANT: "IMPORTANT",
  MF: "MF",
  EXPERT: "EXPERT",
};

export const AppContainer = ({ children }) => {
  const [loader, setLoader] = React.useState(true);
  const [announceMents, setAnnoucements] = React.useState({
    mfData: [],
    impData: [],
    expData: [],
  });

  useEffect(() => {
    try {
      fetch(APP_URLS?.ANNOUNCEMENTS)
        .then((response) => response.json())
        .then((responseJson) => {
          setLoader(false);
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
    } catch (error) {
      console.log("Best error ever", error);
    }
  }, []);

  const getMachineInfo = () => {
    try {
      fetch(APP_URLS.GET_MACHINE_DATA).then(async (response) => {
        const responseJson = await response.json();
        // console.log(responseJson.IPv4);

        let headersList = {
          Accept: "*/*",
          "Content-Type": "application/x-www-form-urlencoded",
        };

        try {
          fetch(APP_URLS.ADD_VISITOR, {
            method: "POST",
            body: `ip_address=${responseJson.IPv4}`,
            headers: headersList,
          }).then(async (response) => {
            localStorage.setItem("user", responseJson.IPv4);
            // const serverResposne = await response.json();
            // console.log({ serverResposne });
          });
          // .catch((error) => console.log("Error", error));
        } catch (error) {
          // console.log({ error });
        }
      });
    } catch (error) {}
  };

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData === null) {
      getMachineInfo();
    }
  }, []);

  return (
    <>
      <AppContext.Provider
        value={{ announceMents, announceMentsLoader: loader }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};
