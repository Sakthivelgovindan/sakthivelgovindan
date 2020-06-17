import React from "react";
import "./index.css";

class Header extends React.Component {
  render() {
    return (
      <div className={"header"}>
        <div className={"headerLeft"}>Sakthivel Govindan</div>
        <div className={"headerRight"}>
          <ul className={"headerMenuList"}>
            <li className="headerMenuTitle headerMenuActive">Home</li>
            <li className={"headerMenuTitle"}>About</li>
            <li className={"headerMenuTitle"}>Work</li>
            <li className={"headerMenuTitle"}>Contact</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
