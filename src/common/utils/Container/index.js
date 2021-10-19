import React, { Component, useEffect } from "react";
import { APP_URLS } from "../../../api/endpoints";

export const AppContainer = ({ children }) => {
  const getMachineInfo = () => {
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
          body: `ip_address=34343`,
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
  };

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData === null) {
      getMachineInfo();
    }
  }, []);

  return <>{children}</>;
};
