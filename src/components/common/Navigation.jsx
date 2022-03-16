import React, { useEffect, useState } from 'react';
import './Navigation.css';
import menuIcon from '../../img/menu.svg'
import closeMenuIcon from '../../img/closeX.svg'

const Navigation = (props) => {


  const [mobileMenuIcon, setMobileMenuIcon] = useState(menuIcon);
  const [highlighted1, setHighlighted1] = useState("white");
  const [highlighted2, setHighlighted2] = useState("white");
  const [highlighted3, setHighlighted3] = useState("white");
  const [highlighted4, setHighlighted4] = useState("white");

  
  useEffect(() => {
    if (props.mobileMenu) {
      setMobileMenuIcon(closeMenuIcon)
    } else {
      setMobileMenuIcon(menuIcon)
    } 

    function handleHighlighted1(number) {
      if (props.pageIndex === number){
        setHighlighted1("#02ecd1")
      } else {
        setHighlighted1("white")
      }
    }
    function handleHighlighted2(number) {
      if (props.pageIndex === number){
        setHighlighted2("#02ecd1")
      } else {
        setHighlighted2("white")
      }
    }
    function handleHighlighted3(number) {
      if (props.pageIndex === number){
        setHighlighted3("#02ecd1")
      } else {
        setHighlighted3("white")
      }
    }
    function handleHighlighted4(number) {
      if (props.pageIndex === number){
        setHighlighted4("#02ecd1")
      } else {
        setHighlighted4("white")
      }
    }

    handleHighlighted1(1)
    handleHighlighted2(2)
    handleHighlighted3(3)
    handleHighlighted4(4)

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
     <p className="navItem home" style={{pointerEvents: disabled, color: highlighted1}} onClick={() => {props.NavigateTo(1); handleDisabled();props.handleBackgroundPlay(); props.handleLlamaPlay();}}>HOME</p>
     <p className="navItem about" style={{pointerEvents: disabled, color: highlighted2}} onClick={() => {props.NavigateTo(2); handleDisabled();props.handleBackgroundPlay(); props.handleLlamaPlay();}}>ABOUT</p>
     <p className="navItem projects" style={{pointerEvents: disabled, color: highlighted3}} onClick={() => {props.NavigateTo(3); handleDisabled();props.handleBackgroundPlay(); props.handleLlamaPlay();}}>PROJECTS</p>
     <p className="navItem contact" style={{pointerEvents: disabled, color: highlighted4}} onClick={() => {props.NavigateTo(4); handleDisabled();props.handleBackgroundPlay(); props.handleLlamaPlay();}}>CONTACT</p>
     <div id="mobileMenu" className="navItem" style={{pointerEvents: disabled}} onClick={() => {props.mobileMenu ? props.handleMobileMenu(false) : props.handleMobileMenu(true); handleDisabled();props.handleBackgroundPlay(); props.handleLlamaPlay();}}><img className='mobileMenuIcon' src={mobileMenuIcon} alt='toggle mobile menu icon' /></div>
    </div>
  </nav>
  )
}

export default Navigation;

