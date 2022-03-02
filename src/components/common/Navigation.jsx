import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
    <div id="navLogo">
      <span>A&W</span>
    </div>
    <div className="navLinks">
     <p className="navItem">ABOUT</p>
     <p className="navItem">PROJECTS</p>
     <p className="navItem">CONTACT</p>
    </div>
  </nav>
  )
}

export default Navigation