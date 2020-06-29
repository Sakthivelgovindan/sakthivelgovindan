import React from "react";
import "./index.css";

class Header extends React.Component {
  state = {
    activeTab: "home",
  };
  navigateToComponent = (ele) => {
    let offsetTop = document.getElementById(ele).offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });

    this.setState({ activeTab: ele });
  };
  render() {
    const { activeTab } = this.state;
    console.log(activeTab);
    return (
      <div className={"header"}>
        <div className={"headerLeft"}>
          <ul
            className={"headerMenuList"}
            onClick={() => {
              this.navigateToComponent("home");
            }}
          >
            <li className="headerMenuTitle headerMenuActive">Welcome</li>
          </ul>
        </div>
        <div className={"headerRight"}>
          <ul className={"headerMenuList"}>
            <li
              className={`headerMenuTitle ${
                activeTab === "home" ? "headerMenuActive" : ""
              }`}
              onClick={() => {
                this.navigateToComponent("home");
              }}
            >
              Home
            </li>
            <li
              className={`headerMenuTitle ${
                activeTab === "about" ? "headerMenuActive" : ""
              }`}
              onClick={() => {
                this.navigateToComponent("about");
              }}
            >
              About
            </li>
            <li
              className={`headerMenuTitle ${
                activeTab === "work" ? "headerMenuActive" : ""
              }`}
              onClick={() => {
                this.navigateToComponent("work");
              }}
            >
              Work
            </li>
            <li
              className={`headerMenuTitle ${
                activeTab === "contact" ? "headerMenuActive" : ""
              }`}
              onClick={() => {
                this.navigateToComponent("contact");
              }}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
