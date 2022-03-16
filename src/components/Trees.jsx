import React, {Fragment} from 'react'
import './Trees.css'

const Trees = (props) => {

  const {backgroundPlay} = props



  return (
    <Fragment>
      <div id='trees' style={{animationPlayState: backgroundPlay}}></div>
      <div className='waterOverlay'></div>\
    </Fragment>
  )
}

export default Trees