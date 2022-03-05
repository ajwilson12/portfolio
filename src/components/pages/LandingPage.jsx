import React from 'react'
import CurrentPage from '../CurrentPage'

const LandingPage = (props) => {
  return (
      <div id='landingPageContainer' onWheel={() => {props.handleBackgroundPlay(); props.handleLlamaPlay();}}>
        <CurrentPage />
      </div>
  )
}

export default LandingPage
