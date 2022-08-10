import { NavLink } from "react-router-dom";
import React, { useState } from "react";
function HomeNav() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div>
      <nav className="navbar-home">
          <h1>Parralax Internet</h1>
        <div className="link-center">
          <ul className={isMobile ? "nav-links-mobile1" : "nav-homepage1-links"}
            onClick={() => setIsMobile(false)}>
            <NavLink to="/" className="nav-homeLinks1">
              <li>Home</li>
            </NavLink>

            <NavLink to="/plans" className="nav-homeLinks1">
              <li>Plans</li>
            </NavLink>

            <NavLink to="/support" className="nav-homeLinks1">
              <li>Support</li>
            </NavLink>
          </ul>
        </div>

        <div className="link-right">
        <ul
            className={isMobile ? "nav-links-mobile2" : "nav-homepage2-links"}
            onClick={() => setIsMobile(false)}
          >
            <NavLink to="/bills" className="nav-homeLinks2">
              <li><button className="btn-nav" type="button">Pay Bills</button></li>
            </NavLink>
          </ul>
        </div>

        <button className="home-burger-menu" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </nav>
    </div>
  );
}

export default HomeNav;