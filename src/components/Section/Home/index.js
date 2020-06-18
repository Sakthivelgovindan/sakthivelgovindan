import React from "react";
import { dynamicHomeImages } from "./../../../utils";

import "./index.css";

class Home extends React.Component {
  render() {
    return (
      <div className={"home"}>
        <div className={"homeLeft"}>
          <div className={"homeText"}>
            <p>Become a full stack developer</p>
          </div>
          <div className={"homeLine"}></div>
        </div>
        <div className={"homeRight"}>
          <img
            src={dynamicHomeImages[Math.floor(Math.random() * 6) + 0]}
            className={"homeImage"}
          />
        </div>
      </div>
    );
  }
}

export default Home;
