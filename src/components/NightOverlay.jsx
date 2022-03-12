import React, {useState, useEffect} from 'react'
import './NightOverlay.css'


const NightOverlay = (props) => {

  const [opacity, setOpacity] = useState("0.6")
  
  useEffect(() => {
    if(props.pageIndex === 1) {
      setOpacity("0.1")
    } 
    if(props.pageIndex === 2) {
      setOpacity("0.3")
    } 
    if(props.pageIndex === 3) {
      setOpacity("0.5")
    } 
    if(props.pageIndex === 4) {
      setOpacity("0.7")
    } 
     
    
  }, [props.pageIndex, opacity])
  return (
    <div className='nightOverlay' style={{opacity: opacity}}></div>
  )
}

export default NightOverlay