import React from 'react'
import './Grass.css'
import { useMousePosition } from './useMousePosition';

const Grass = (props) => {
  const {backgroundPlay} = props;
  const position = useMousePosition();

  return (
      <div className='grass' style={{animationPlayState: backgroundPlay,  marginLeft: position.x / -80 + 'px' }}></div>
  )
}

export default Grass;