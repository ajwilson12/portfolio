import React from 'react'
import './Trees.css'

const Trees = (props) => {

  const {backgroundPlay} = props



  return (
    
      <div id='bar' style={{animationPlayState: backgroundPlay}}></div>

  )
}

export default Trees