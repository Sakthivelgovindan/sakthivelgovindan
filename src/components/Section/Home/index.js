import React from "react";
import "./index.css";

class Home extends React.Component {
  render() {
    return (
      <div className={"home"}>
        <div className={"homeLeft"}>Home Left</div>
        <div className={"homeRight"}>Home Right</div>
      </div>
    );
  }
}

export default Home;
