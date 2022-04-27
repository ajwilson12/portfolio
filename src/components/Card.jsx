import React from 'react'
import './Card.css'
import pixaBayIcon from '../img/pixaBayIcon.svg'
import javascriptIcon from '../img/javascriptIcon.svg';

const Card = () => {
  return (
    
    <div className="cardWrapper">
    <div className="card">
      <div className="cardImage" style={{backgroundColor: '#25013B'}}>
        
        <img src={pixaBayIcon} alt="icon" />
        
      </div>  
      <div className="cardContent">
        <div className="cardHeading">
        <h3>PixaBay</h3>
          <div className="cardIcons"><img src={javascriptIcon} alt="icon" /></div>
        </div>
        <div className="cardText"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque natus distinctio, praesentium eligendi fugit error accusantium.</p></div>
        <div className="cardLink"><p>GitHub →</p></div>
    </div>
  </div>
    </div>
  )
}

export default Card