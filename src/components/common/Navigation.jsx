import React, { useState } from 'react';
import './Navigation.css';

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
     <p className="navItem" style={{pointerEvents: disabled}} onClick={() => {props.NavigateTo(1); handleDisabled()}}>HOME</p>
     <p className="navItem" style={{pointerEvents: disabled}} onClick={() => {props.NavigateTo(2); handleDisabled()}}>ABOUT</p>
     <p className="navItem" style={{pointerEvents: disabled}} onClick={() => {props.NavigateTo(3); handleDisabled()}}>PROJECTS</p>
     <p className="navItem" style={{pointerEvents: disabled}} onClick={() => {props.NavigateTo(4); handleDisabled()}}>CONTACT</p>
    </div>
  </nav>
  )
}

export default Navigation

