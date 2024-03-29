import { NavLink } from "react-router-dom";
import React, { useState } from "react";
function HomeNav() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div>
      <nav className="navbar">
          <h1>Parralax Internet</h1>
        <div className="link-center">
          <ul className={isMobile ? "nav-links-page-mobile1" : "nav-page-links1"}
            onClick={() => setIsMobile(false)}>
            <NavLink to="/" className="nav-links">
              <li>Home</li>
            </NavLink>

            <NavLink to="/plans" className="nav-links">
              <li>Plans</li>
            </NavLink>

            <NavLink to="/support" className="nav-links">
              <li>Support</li>
            </NavLink>
          </ul>
        </div>

        <div className="link-right">
        <ul
            className={isMobile ? "nav-links-page-mobile2" : "nav-page-links2"}
            onClick={() => setIsMobile(false)}
          >

            <NavLink to="/bills" className="nav-links">
              <li><button className="btn-nav" type="button">Pay Bills</button></li>
            </NavLink>
          </ul>
        </div>

        <button className="burger-menu" onClick={() => setIsMobile(!isMobile)}>
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