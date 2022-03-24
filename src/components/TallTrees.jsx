import React from 'react'
import './TallTrees.css'

const TallTrees = (props) => {
  
  const {backgroundPlay, zoom} = props
  return (
      <div id='foreground' style={{animationPlayState: backgroundPlay, transform: zoom}}></div>
  )
}

export default TallTrees