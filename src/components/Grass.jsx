import React from 'react'
import './Grass.css'

const Grass = (props) => {
  const {backgroundPlay} = props
  return (
      <div className='grass' style={{animationPlayState: backgroundPlay}}></div>
  )
}

export default Grass;