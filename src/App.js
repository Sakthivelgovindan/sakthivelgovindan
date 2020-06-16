import React from "react";
import Header from "./components/Header";
import Home from "./components/Section/Home";
import Work from "./components/Section/Work";
import Contact from "./components/Section/Contact";
import About from "./components/Section/About";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Home />
        <About />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
