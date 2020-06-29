import React from "react";
import { FaLinkedin } from "react-icons/fa";
import profilePic from "./../../../assets/png/profile2.png";
import { dynamicProfileImages } from "./../../../utils";
import "./index.css";

class About extends React.Component {
  render() {
    return (
      <div className={"about"} id={this.props.id}>
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
            <a
              href="https://www.linkedin.com/in/sakthivel-govindan/"
              target="_blank"
            >
              <FaLinkedin
                size={25}
                color="#3f50b4"
                className={"aboutLinkedIn"}
              />
            </a>
          </div>
        </div>
        <div className={"aboutRight"}>
          <div className={"aboutDetails"}>
            <p className={"aboutText"}>About</p>
            <div className={"aboutLine"}></div>
            <p className={"aboutDescription"}>
              Hi, I'm Sakthivel Govindan. I started my career as a "Full Stack
              Developer" in DesignQube. Passionate coding enthusiast.
              An effective Logical thinker with Interpersonal, Analytical, and
              problem-solving abilities. I started my development journey in
              2015 from Information Technology Department, K.S.Rangasamy College
              of Technology, Namakkal.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
