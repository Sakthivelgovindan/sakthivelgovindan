import React from "react";
import { dynamicHomeImages } from "./../../../utils";
import "./index.css";

const quotes = [
  "while ( ! ( succeed = try() ) );",
  "Experiment. Fail. Learn. Repeat.",
  'SELECT * FROM "World" WHERE "Someone" like % You %',
  'echo "Happy to see you once again!"',
  "! false ? learn(); : try();",
];

class Home extends React.Component {
  render() {
    return (
      <div className={"home"} id={this.props.id}>
        <div className={"homeLeft"}>
          <div className={"homeText"}>
            <p>{quotes[Math.floor(Math.random() * 5) + 0]}</p>
          </div>
          <div className={"homeLine"}></div>
        </div>
        <div className={"homeRight"}>
          <img
            src={dynamicHomeImages[Math.floor(Math.random() * 8) + 0]}
            className={"homeImage"}
          />
        </div>
      </div>
    );
  }
}

export default Home;
