import React from 'react'
import './TallTrees.css'
import { useMousePosition } from './useMousePosition';

const TallTrees = (props) => {
  
  const {backgroundPlay, zoom} = props
  const position = useMousePosition();

  return (
      <div id='foreground' style={{animationPlayState: backgroundPlay, transform: zoom, marginLeft: position.x / 60 + 'px' }}></div>
  )
}

export default TallTrees