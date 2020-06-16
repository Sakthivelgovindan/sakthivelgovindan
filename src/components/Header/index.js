import React from "react";
import "./index.css";

class Header extends React.Component {
  render() {
    return (
      <div className={"header"}>
        <div className={"headerLeft"}>Left</div>
        <div className={"headerRight"}>Right</div>
      </div>
    );
  }
}

export default Header;
