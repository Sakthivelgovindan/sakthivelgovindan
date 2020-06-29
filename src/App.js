import React from "react";
import Header from "./components/Header";
import Home from "./components/Section/Home";
import Work from "./components/Section/Work";
import Contact from "./components/Section/Contact";
import About from "./components/Section/About";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="parentId">
        <Home id="home" />
        <About id="about" />
        <Work id="work" />
        <Contact id="contact" />
      </div>
    </div>
  );
}

export default App;
