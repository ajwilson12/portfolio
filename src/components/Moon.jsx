import React, {Fragment, useState, useEffect} from 'react'
import './Moon.css'
const Moon = (props) => {

  const [moveMoon, setMoveMoon] = useState("10px")
  const [moonRaysOpacity, setMoonRaysOpacity] = useState("0.6")
  
  useEffect(() => {
    if(props.pageIndex === 1) {
      setMoveMoon("10px")
      setMoonRaysOpacity("0.6")
    } 
    if(props.pageIndex === 2) {
      setMoveMoon("-80px")
      setMoonRaysOpacity("0.6")
    } 
    if(props.pageIndex === 3) {
      setMoveMoon("-460px")
      setMoonRaysOpacity("0.4")
    } 
    if(props.pageIndex === 4) {
      setMoveMoon("-560px")
      setMoonRaysOpacity("0")
    } 
     
    
  }, [props.pageIndex, moveMoon, moonRaysOpacity])

  return (
  <Fragment>
    <div id="moonRays" style={{paddingTop: moveMoon, opacity: moonRaysOpacity}}></div>
    <div id='moon' style={{paddingTop: moveMoon}}></div>
  </Fragment>
  )
}

export default Moon