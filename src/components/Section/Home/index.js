import React from "react";
import "./index.css";

import imageSvg from "./../../../assets/svg/image1.svg";

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
          <img src={imageSvg} />,
        </div>
      </div>
    );
  }
}

export default Home;
