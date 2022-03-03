import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
    <div id="navLogo">
      <span>A&W</span>
    </div>
    <div className="navLinks">
     <Link className="navItem" to='/'>HOME</Link>
     <p className="navItem">ABOUT</p>
     <Link className="navItem" to='/projects'>PROJECTS</Link>
     <p className="navItem">CONTACT</p>
    </div>
  </nav>
  )
}

export default Navigation

