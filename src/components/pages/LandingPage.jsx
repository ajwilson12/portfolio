import React from 'react'
import './LandingPage.css'

const LandingPage = (props) => {
  return (
    <div id='landingPageContainer' onWheel={() => {props.handleBackgroundPlay(); props.handleLlamaPlay();}}>
      
      <div className='titleContainer'>
        <h1>Hi, I'm Arran</h1>
        <h2>web designer</h2>
      </div>
      
    </div>
  )
}

export default LandingPage
