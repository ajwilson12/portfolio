import React, { useEffect, useState } from "react";
import './CurrentPage.css'


// icons

import allIcon from '../img/allIcon.png';
import reactIcon from '../img/reactIcon.png';
import sassIcon from '../img/sassIcon.png';
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
            <h1>About</h1>
            <h2>I like making things</h2>
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

              <div class="break"></div>
             
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
            <p>Github</p>
            <p>Email</p>
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
