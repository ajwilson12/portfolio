import React, { useEffect, useState } from 'react';
import './Navigation.css';
import menuIcon from '../../img/menu.svg'
import closeMenuIcon from '../../img/closeX.svg'

const Navigation = (props) => {


  const [mobileMenuIcon, setMobileMenuIcon] = useState(menuIcon);

  useEffect(() => {
    if (props.mobileMenu) {
      setMobileMenuIcon(closeMenuIcon)
    } else {
      setMobileMenuIcon(menuIcon)
    }

  },[props])

  const [disabled, setDisabled] = useState("auto");
  function handleDisabled() {
    setDisabled("none")
    setTimeout(() => {setDisabled("auto")}, 500) 
  }
  

  return (
    <nav>
    <div id="navLogo">
      <span>A&W</span>
    </div>
    <div className="navLinks">
     <p className="navItem" style={{pointerEvents: disabled}} onClick={() => {props.NavigateTo(1); handleDisabled();props.handleBackgroundPlay(); props.handleLlamaPlay();}}>HOME</p>
     <p className="navItem" style={{pointerEvents: disabled}} onClick={() => {props.NavigateTo(2); handleDisabled();props.handleBackgroundPlay(); props.handleLlamaPlay();}}>ABOUT</p>
     <p className="navItem" style={{pointerEvents: disabled}} onClick={() => {props.NavigateTo(3); handleDisabled();props.handleBackgroundPlay(); props.handleLlamaPlay();}}>PROJECTS</p>
     <p className="navItem" style={{pointerEvents: disabled}} onClick={() => {props.NavigateTo(4); handleDisabled();props.handleBackgroundPlay(); props.handleLlamaPlay();}}>CONTACT</p>
     <div id="mobileMenu" className="navItem" style={{pointerEvents: disabled}} onClick={() => {props.mobileMenu ? props.handleMobileMenu(false) : props.handleMobileMenu(true); handleDisabled();props.handleBackgroundPlay(); props.handleLlamaPlay();}}><img className='mobileMenuIcon' src={mobileMenuIcon} alt='toggle mobile menu icon' /></div>
    </div>
  </nav>
  )
}

export default Navigation;

