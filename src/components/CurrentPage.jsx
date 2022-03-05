import React, { useEffect, useState } from "react";
import Navigation from "./common/Navigation";
import './CurrentPage.css'

  function CurrentPage() {

    
    const [pageIndex, setPageIndex] = useState(1);
    const [visible, setVisible] = useState(1);
    const [transition, setTransition] = useState("auto");
    const [currentPage, setCurrentPage] = useState(null);
    
    function NavigateTo(number) {
      setTransition('none')
        setVisible(0)
        setTimeout(() => {setPageIndex(number)}, 500)
        setTimeout(() => {setVisible(1)}, 500)
        setTimeout(() => {setTransition("auto")}, 500)
      }
    useEffect(() => {

      if(pageIndex === 1) { 
       
        setCurrentPage(
          <div className='titleContainer' style={{opacity: visible, pointerEvents: transition}}>
            <h1>Hi, I'm Arran</h1>
            <h2>web designer</h2>
          </div>
        )
      }
      if(pageIndex === 2) {
        setCurrentPage(
          <div className='aboutContainer' style={{opacity: visible, pointerEvents: transition}}>
            <h1>About</h1>
            <h2>I like making things</h2>
          </div>
        )
      }
      if(pageIndex === 3) {
        setCurrentPage(
          <div className='aboutContainer' style={{opacity: visible, pointerEvents: transition}}>
            <h1>Project</h1>
            <h2>Heres Some Things</h2>
          </div>
        )
      }
      if(pageIndex === 4) {
        setCurrentPage(
          <div className='aboutContainer' style={{opacity: visible, pointerEvents: transition}}>
            <h1>Contact</h1>
            <h2>Say my name in a mirror 3 times</h2>
          </div>
        )
      }
    }, [pageIndex, visible, transition]);
    
  
    return (
      <div id="pageContainer">
        <Navigation NavigateTo={NavigateTo} />
        {currentPage}
      </div>
    )
  }

export default CurrentPage