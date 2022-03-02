import React from 'react'
import './TallTrees.css'

const TallTrees = (props) => {

  const {backgroundPlay} = props



  return (
    
      <div id='foreground' style={{animationPlayState: backgroundPlay}}></div>

  )
}

export default TallTrees