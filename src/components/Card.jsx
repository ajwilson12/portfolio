import React from 'react'
import './Card.css'

const Card = ({ background, icon, title, techIcon, techIcon2, text, link }) => {
  return (
    <div className="cardWrapper">
      <div className="card">
        <div className="cardImage" style={{backgroundColor: `${background}`}}>
          
          <img src={icon} alt="icon" />
          
        </div>  
        <div className="cardContent">
          <div className="cardHeading">
          <h3>{title}</h3>
            <div className="cardIcons">
              <img src={techIcon} alt="tech icon" />
              {(techIcon2 === null)
              ? ""
              : <img src={techIcon2} alt="tech icon" />
              }
            </div>
          </div>
          <div className="cardText"><p>{text}</p></div>
          <div className="cardLink">{link}</div>
        </div>
      </div>
    </div>
  )
}

export default Card