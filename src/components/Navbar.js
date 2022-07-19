import { NavLink } from "react-router-dom";
import React, { useState } from "react";
function HomeNav() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <h1>Parralax Internet</h1>
        </div>

        <div className="link-center">
          <ul className="nav-list">
            <li className="nav-link">Home</li>
            <li className="nav-link">Plans</li>
            <li className="nav-link">Support</li>
          </ul>
        </div>

        <div className="link-right">
        <ul className="nav-list">
            <li className="nav-link"><button type="button">Apply Now</button></li>
            <li className="nav-link"><button type="button">Pay Bills</button></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default HomeNav;