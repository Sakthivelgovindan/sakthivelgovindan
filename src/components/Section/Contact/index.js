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
      <div className={"contact"} id={this.props.id}>
        <div className={"contactMobileRight"}>
          <div>
            <p className={"contactRightText"}>Contact Us</p>
          </div>
        </div>
        <div className={"contactLeft"}>
          <div className={"contactSocialLink"}>
            <a
              href="https://www.facebook.com/profile.php?id=100008524065254"
              target="_blank"
              className={"contactLink"}
            >
              <FaFacebook size={30} className={"contactIcon"} />
            </a>
            <a
              href="https://github.com/Sakthivelgovindan"
              target="_blank"
              className={"contactLink"}
            >
              <FaGithub size={30} className={"contactIcon"} />
            </a>
            <a
              href="https://www.linkedin.com/in/sakthivel-govindan/"
              target="_blank"
              className={"contactLink"}
            >
              <FaLinkedinIn size={30} className={"contactIcon"} />
            </a>
            <a
              href="https://www.instagram.com/sakthivel_pgs/"
              target="_blank"
              className={"contactLink"}
            >
              <FaInstagram size={30} className={"contactIcon"} />
            </a>
            <a
              href="https://twitter.com/sakthi_pgs"
              target="_blank"
              className={"contactLink"}
            >
              <FaTwitter size={30} className={"contactIcon"} />
            </a>
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
