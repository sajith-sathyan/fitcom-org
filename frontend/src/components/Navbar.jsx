import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Fitcom</div>
      <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        
        <li><a href="#workout">Workouts</a></li>
     
        <li><a href="#nutrition">Nutrition</a></li>
        <li><a href="#sync">Sync Devices</a></li>
        <li><a href="#posture">Posture</a></li>
        <li><a href="#classes">Virtual Classes</a></li>
        <li><a href="#goals">Goals</a></li>
        <li><a href="#achievements">Achievements</a></li>
     
        <li><a href="#calories">Progress</a></li>
        <li><a href="#profile">Profile</a></li>
      </ul>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
}

export default Navbar;
