import React, {Fragment, useState, useEffect} from 'react'
import './Moon.css'
const Moon = (props) => {

  const [moveMoon, setMoveMoon] = useState("180px")
  const [moonRaysOpacity, setMoonRaysOpacity] = useState("0.6")
  
  useEffect(() => {
    if(props.pageIndex === 1) {
      setMoveMoon("180px")
      setMoonRaysOpacity("0.6")
    } 
    if(props.pageIndex === 2) {
      setMoveMoon("260px")
      setMoonRaysOpacity("0.6")
    } 
    if(props.pageIndex === 3) {
      setMoveMoon("360px")
      setMoonRaysOpacity("0.4")
    } 
    if(props.pageIndex === 4) {
      setMoveMoon("460px")
      setMoonRaysOpacity("0")
    } 
     
    
  }, [props.pageIndex, moveMoon, moonRaysOpacity])

  return (
  <Fragment>
    <div id="moonRays" style={{marginTop: moveMoon, opacity: moonRaysOpacity}}></div>
    <div id='moon' style={{marginTop: moveMoon}}></div>
  </Fragment>
  )
}

export default Moon