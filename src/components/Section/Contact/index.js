import React from "react";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import "./index.css";

class Contact extends React.Component {
  state = {};

  render() {
    return (
      <div className={"contact"}>
        <div className={"contactLeft"}>
          <div className={"contactSocialLink"}>
            <div className={"contactLink"}>
              <FaFacebook size={30} />
            </div>
            <div className={"contactLink"}>
              <FaGithub size={30} />
            </div>
            <div className={"contactLink"}>
              <FaLinkedinIn size={30} />
            </div>
            <div className={"contactLink"}>
              <FaInstagram size={30} />
            </div>
            <div className={"contactLink"}>
              <FaTwitter size={30} />
            </div>
          </div>
        </div>
        <div className={"contactRight"}>
          <div>
            <p className={"contactText"}>Contact Us</p>
            <div className={"contactLine"}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
