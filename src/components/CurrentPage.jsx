import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import './CurrentPage.css'


// icons

import allIcon from '../img/allIcon.png';
import reactIcon from '../img/reactIcon.png';
import sassIcon from '../img/sassIcon.png';
import githubIcon from '../img/githubIcon.svg'
import emailIcon from '../img/emailIcon.svg'
import javascriptIcon from '../img/javascriptIcon.png';


  function CurrentPage(props) {

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
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis sit veritatis, corporis unde modi doloremque. Cupiditate officia fugiat odio cumque repudiandae magnam non deleniti rerum assumenda in dolorem quia error, cum optio nemo ut a magni. Tempore amet tenetur autem quia totam, ut eius, voluptatem iusto, esse nemo deserunt eaque?</p><br />
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
             
             
            <div className="projectIconContainer react sass">
                <div className="dummyIcon "></div>
                <p className="projectIconText">Weather App</p>
              </div>  
              <div className="projectIconContainer  javascript">
                <div className="dummyIcon"></div>
                <p className="projectIconText">PixaBay Image Search</p>
              </div>  
              <div className="projectIconContainer react sass">
                <div className="dummyIcon"></div>
                <p className="projectIconText">This Website</p>
              </div>  
              <div className="projectIconContainer wordpress javascript">
                <div className="dummyIcon "></div>
                <p className="projectIconText">Kerry & Co</p>
              </div> 

              <div className="break"></div>
             
              <div className='iconContainer'>
                <img src={allIcon} alt="" />  
                <p className="iconText">ALL</p>
              </div>
              <div className='iconContainer '>
                <img src={reactIcon} alt="" />  
                <p className="iconText react">REACT</p>
              </div>
              <div className='iconContainer'>
                <img src={javascriptIcon} alt="" />  
                <p className="iconText  javascript">JAVASCRIPT</p>
              </div>
              <div className='iconContainer'>
                <img src={javascriptIcon} alt="" />  
                <p className="iconText  wordpress">WORDPRESS</p>
              </div>
              <div className='iconContainer'>
                <img src={sassIcon} alt="" />  
                <p className="iconText sass">SASS</p>
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
    }, [props.pageIndex, props.visible, props.transition]);
    
  
    return (
      <div id="pageContainer">
        {currentPage}
      </div>
    )
  }

export default CurrentPage
