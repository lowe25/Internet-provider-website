import { NavLink } from "react-router-dom";
import React, { useState } from "react";
function HomeNav() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div>
      <nav className="navbar-home">
          <h1>Parralax Internet</h1>
        <div className="link-center">
          <ul className={isMobile ? "nav-links-mobile1" : "nav-homepage1"}
            onClick={() => setIsMobile(false)}>
            <NavLink to="/" className="nav-links1">
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
            className={isMobile ? "nav-links-mobile2" : "nav-homepage2"}
            onClick={() => setIsMobile(false)}
          >
          <NavLink to="/plans" className="nav-homeLinks2">
              <li><button className="btn-nav" type="button">Apply Now</button></li>
            </NavLink>

            <NavLink to="/bills" className="nav-homeLinks2">
              <li><button className="btn-nav" type="button">Pay Bills</button></li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default HomeNav;