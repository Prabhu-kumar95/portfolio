import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavMenu from "./Components/Navbar/Navmenu"
import Home from "./Pages/Home"
import AboutMe from "./Pages/About Me";
import ContactMe from "./Pages/Contact Me";
import Skills from "./Pages/Skills";
import Myproject from './Pages/MyProjects';
import Footer from "./FooterComponent/Footer";
import React, { useState } from "react";
import "./style.css";


const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container0">
        <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
      </div>
     
      <NavMenu />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/Skills" Component={Skills} />
        <Route exact path="/Myproject" Component={Myproject} />
        <Route exact path="/Aboutme" Component={AboutMe} />
        <Route exact path="/Contactme" Component={ContactMe} />
      </Routes>
      <Footer/>
      
    </div>
  );
};

export default App;
