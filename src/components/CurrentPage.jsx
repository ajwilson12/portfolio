import React, { useEffect, useState } from "react";
import './CurrentPage.css'

// icons

import allIcon from '../img/allIcon.png';
import reactIcon from '../img/reactIcon.svg';
import sassIcon from '../img/sassIcon.svg';
import wordpressIcon from '../img/wordpressIcon.svg';
import githubIcon from '../img/githubIcon.svg'
import emailIcon from '../img/emailIcon.svg'
import pixaBayIcon from '../img/pixaBayIcon.svg'
import weatherIcon from '../img/weatherIcon.svg'
import kerryIcon from '../img/kerryIcon.svg'
import portfolioIcon from '../img/portfolioIcon.svg'
import javascriptIcon from '../img/javascriptIcon.svg';


  function CurrentPage(props) {

    const [reactProject, setReactProject] = useState(false)
    const [javascriptProject, setJavascriptProject] = useState(false)
    const [wordpressProject, setWordpressProject] = useState(false)
    const [sassProject, setSassProject] = useState(false)
    const [allProject, setAllProject] = useState(true)


    function toggleTech(value1, value2, value3, value4, value5) {
      setReactProject(value1)
      setJavascriptProject(value2)
      setWordpressProject(value3)
      setSassProject(value4)
      setAllProject(value5)
    }


    const [currentPage, setCurrentPage] = useState(null);
    useEffect(() => {

      if(props.pageIndex === 1) { 
       
        setCurrentPage(
          <div className='titleContainer' style={{opacity: props.visible, pointerEvents: props.transition}}>
            <h1>Hi, I'm Arran</h1>
            <h2>web designer</h2>
          </div>
        )
      }
      if(props.pageIndex === 2) {
        setCurrentPage(
          <div className='aboutContainer' style={{opacity: props.visible, pointerEvents: props.transition}}>
            <h2>I like making things</h2>
            <div className="textBox">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis sit veritatis, corporis unde modi doloremque. Cupiditate officia fugiat odio cumque amet tenetur autem quia totam, ut eius, voluptatem iusto, esse nemo deserunt eaque?</p><br />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis sit veritatis.</p>
              <p>Lorem ipsum dolor, sit amet consectetur veritatis.</p>
            </div>
          </div>
        )
      }
      if(props.pageIndex === 3) {
        setCurrentPage(
          <div className='projectsContainer' style={{opacity: props.visible, pointerEvents: props.transition}}>
            <h2>Projects</h2>
            <div className="iconWrapper" >
            <div className="projectIconContainer react sass" style={sassProject || reactProject || allProject ? {opacity: 1} : {opacity: 0, display: "none"}}>
            <img className="projectIcon" src={weatherIcon} alt="weather project icon" />
                <p className="projectIconText">ezWeather</p>
              </div>  
              <div className="projectIconContainer  javascript" style={javascriptProject || allProject ? {opacity: 1} : {opacity: 0, display: "none"}}>
              <img className="projectIcon" src={pixaBayIcon} alt="pixaBay project icon" />
                <p className="projectIconText">PixaBay Image Search</p>
              </div>  
              <div className="projectIconContainer react sass" style={sassProject || reactProject || allProject ? {opacity: 1} : {opacity: 0, display: "none"}}>
                <img className="projectIcon" src={portfolioIcon} alt="portfolio project icon" />
                <p className="projectIconText">This Website</p>
              </div>  
              <div className="projectIconContainer wordpress javascript" style={wordpressProject || javascriptProject || allProject ? {opacity: 1} : {opacity: 0, display: "none"}}>
                <img className="projectIcon" src={kerryIcon} alt="kerry and co project icon" />
                <p className="projectIconText">Kerry & Co</p>
              </div> 

              <div className="break"></div>
             
              <div className='iconContainer' onClick={() => toggleTech(false, false, false, false, true)}>
                <img className="techIcon" src={allIcon} alt="all" />  
                <p className={allProject ? "iconText highlighted" : "iconText"}>ALL</p>
              </div>
              <div className='iconContainer ' onClick={() => toggleTech(true, false, false, false, false)}>
                <img className="techIcon" src={reactIcon} alt="react" />  
                <p className={reactProject ? "iconText react highlighted" : "iconText react"} >REACT</p>
              </div>
              <div className='iconContainer' onClick={() => toggleTech(false, true, false, false, false)}>
                <img className="techIcon" src={javascriptIcon} alt="javascript" />  
                <p className={javascriptProject ? "iconText javascript highlighted" : "iconText javascript"}>JAVASCRIPT</p>
              </div>
              <div className='iconContainer' onClick={() => toggleTech(false, false, true, false, false)}>
                <img className="techIcon" src={wordpressIcon} alt="wordpress" />  
                <p className={wordpressProject ? "iconText wordpress highlighted" : "iconText wordpress"}>WORDPRESS</p>
              </div>
              <div className='iconContainer'onClick={() => toggleTech(false, false, false, true, false)}>
                <img className="techIcon" src={sassIcon} alt="sass" />  
                <p className={sassProject ? "iconText sass highlighted" : "iconText sass"}>SASS</p>
              </div> 
            </div>
          </div>
        )
      }
      if(props.pageIndex === 4) {
        setCurrentPage(
          <div className='contactContainer' style={{opacity: props.visible, pointerEvents: props.transition}}>
            <h2>Contact</h2>
            <div className="contactIconContainer">
              <div className="contactIcon">
                <a href="https://github.com/ajwilson12" rel='noreferrer' target="_blank" ><img src={emailIcon} alt="githubIcon" /><p>Email</p></a>
              </div>
              <div className="contactIcon">
              <a href="https://github.com/ajwilson12" rel='noreferrer' target="_blank" ><img src={githubIcon} alt="githubIcon" /><p>GitHub</p></a>
              </div>
            </div>
          </div>
        )
      }
      if(props.mobileMenu === true) {
        setCurrentPage(
          <div className='mobileMenuContainer' style={{opacity: props.visible, pointerEvents: props.transition}}>
            <p className="navItem" onClick={() => {props.NavigateTo(1); props.handleMobileMenu(false); props.handleBackgroundPlay(); props.handleLlamaPlay();}}>HOME</p>
            <p className="navItem" onClick={() => {props.NavigateTo(2); props.handleMobileMenu(false); props.handleBackgroundPlay(); props.handleLlamaPlay();}}>ABOUT</p>
            <p className="navItem" onClick={() => {props.NavigateTo(3); props.handleMobileMenu(false); props.handleBackgroundPlay(); props.handleLlamaPlay();}}>PROJECTS</p>
            <p className="navItem" onClick={() => {props.NavigateTo(4); props.handleMobileMenu(false); props.handleBackgroundPlay(); props.handleLlamaPlay();}}>CONTACT</p>
          </div>
        )
      } 

    }, [props, reactProject, sassProject, wordpressProject, javascriptProject, allProject]);
    
  
    return (
      <div id="pageContainer">
        {currentPage}
      </div>
    )
  }

export default CurrentPage
