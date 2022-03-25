import React, {Fragment} from 'react'
import './Trees.css'
import { useMousePosition } from './useMousePosition'

const Trees = (props) => {

  const {backgroundPlay} = props
  const position = useMousePosition();


  return (
    <Fragment>
      <div id='trees' style={{animationPlayState: backgroundPlay, marginLeft: position.x / 50 + 'px', paddingTop: position.y / 60 + 'px'}}></div>
      <div className='waterOverlay'></div>\
    </Fragment>
  )
}

export default Trees