import React, { useState } from 'react';
import './Navigation.css';
import menuIcon from '../../img/menu.png'

const Navigation = (props) => {
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
     <div id="mobileMenu" className="navItem" style={{pointerEvents: disabled}} onClick={() => {props.handleMobileMenu(true); handleDisabled();props.handleBackgroundPlay(); props.handleLlamaPlay();}}><img src={menuIcon} alt='mobile menu icon'></img></div>
    </div>
  </nav>
  )
}

export default Navigation

