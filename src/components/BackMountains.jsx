import React from 'react'
import './BackMountains.css'
import { useMousePosition } from './useMousePosition';

const BackMountains = () => {

  const position = useMousePosition();

  
  return (
    <div className="backMountains"  style={{marginLeft: position.x / 20 + 'px', marginBottom: position.y / 50 + 'px'}} ></div>
  )
}

export default BackMountains