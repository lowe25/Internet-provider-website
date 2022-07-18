import { NavLink } from "react-router-dom";
import React, { useState } from "react";
function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">Parallax Internet</h1>
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <NavLink to="/" className="nav-links1" exact>
            <li>Home</li>
          </NavLink>
          <NavLink activeStyle={{ color:'#5754a8' }} to="/plans" className="nav-links1">
            <li>Plans</li>
          </NavLink>

          <NavLink activeStyle={{ color:'#5754a8' }} to="/support" className="nav-links1">
            <li>Support</li>
          </NavLink>
          <NavLink activeStyle={{ color:'#5754a8' }} to="/apply" className="nav-links1">
            <li>Apply now</li>
          </NavLink>

          <NavLink activeStyle={{ color:'#5754a8' }} to="/apply" className="nav-links1">
            <li>Bills Payment</li>
          </NavLink>
        </ul>
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

export default Navbar;