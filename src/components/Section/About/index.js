import React from "react";
import { FaLinkedin } from "react-icons/fa";
import profilePic from "./../../../assets/png/profile2.png";
import { dynamicProfileImages } from "./../../../utils";
import "./index.css";

class About extends React.Component {
  render() {
    return (
      <div className={"about"}>
        <div className={"aboutLeft"}>
          <div className={"aboutImage"}>
            <img
              src={dynamicProfileImages[Math.round(Math.random())]}
              className={"profileImage"}
            />
          </div>
          <div className={"aboutNameDetails"}>
            <p className={"aboutName"}>SAKTHIVEL GOVINDAN</p>
            <p className={"aboutRole"}>FULL STACK DEVELOPER</p>
            <FaLinkedin size={25} color="#3f50b4" className={"aboutLinkedIn"} />
          </div>
        </div>
        <div className={"aboutRight"}>
          <div className={"aboutDetails"}>
            <p className={"aboutText"}>About</p>
            <div className={"aboutLine"}></div>
            <p className={"aboutDescription"}>
              Mohan brings you two decades of In-depth experience in IT Design,
              Implementation and Automation. He is a Master in Cloud, DevOps and
              infrastructure Design with recognized expertise in all industrial
              verticals viz. Banking, Retail, Telecom, E-commerce, Hardware,
              Defence.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
