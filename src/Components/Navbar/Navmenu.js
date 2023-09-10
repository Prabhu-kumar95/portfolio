import React from "react";
import { Link } from "react-router-dom";
const NavMenu = () => {
  return (
    <div className="main-nav">
      <div className="Namearea">
        <h1>PRABHU <b style={{color:"grey"}}>KUMAR</b></h1>
      </div>

      <div className="menu-link mobile-menu-link">
        <ul>
          <li>
            <Link to="/">
              <h2>
                <b className="nav">HOME</b>
              </h2>
            </Link>
          </li>
          <li>
            <Link to="/Skills">
              <h2>
                <b className="nav">SKILLS</b>
              </h2>
            </Link>
          </li>
          <li>
            <Link to="/Myproject">
              <h2>
                <b className="nav">MY PROJECT</b>
              </h2>
            </Link>
          </li>
          <li>
            <Link to="/Aboutme">
              <h2>
                <b className="nav">ABOUT ME</b>
              </h2>
            </Link>
          </li>
          <li>
            <Link to="/Contactme">
              <h2>
                <b className="nav">CONTACT ME</b>
              </h2>
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};
export default NavMenu;
