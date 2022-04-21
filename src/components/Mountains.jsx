import React from 'react'
import './Mountains.css'
import { useMousePosition } from './useMousePosition';

const Mountains = () => {

  const position = useMousePosition();

  
  return (
    <div className="mountains"  style={{marginLeft: position.x / 30 + 'px', marginBottom: position.y / 40 + 'px'}} ></div>
  )
}

export default Mountains