import React from "react";
import { shuffle } from "./../../../utils";
import "./index.css";

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: [
        "HTML",
        "CSS",
        "Javascript",
        "JQuery",
        "React JS",
        "Node JS",
        "React Native",
        "MongoDB",
        "Hasura",
        "API",
        "MySQL",
        "GraphQL",
      ],
    };
  }

  render() {
    const { language } = this.state;
    const shuffleLanguage = shuffle(language);

    return (
      <div className={"work"} id={this.props.id}>
        <div className={"workLeft"}>
          <p className={"workExperience"}>Work experience</p>
          <div className={"workLine"}></div>
        </div>
        <div className={"workRight"}>
          <div className={"languageDiv"}>
            {shuffleLanguage.map((language, index) => {
              return (
                <p key={"language" + index} className={"languageName"}>
                  {language}
                </p>
              );
            })}
            <p className={"languageName"}>IoT ( learning )</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
