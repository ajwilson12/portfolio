import React, {Fragment, useState, useEffect} from 'react'
import './Moon.css'
const Moon = (props) => {

  const [showPhoto, setShowPhoto] = useState(0)
  const [moveMoon, setMoveMoon] = useState("100px")
  const [moonSize, setMoonSize] = useState("180px")
  useEffect(() => {
    if(props.pageIndex === 2) {
      setShowPhoto(1)
    } else {
      setShowPhoto(0)
    }
  }, [props.pageIndex, showPhoto])
  
  useEffect(() => {
    if(props.pageIndex === 3) {
      setMoveMoon("90px")
      setMoonSize("100px")
    } else {
      setMoveMoon("100px")
      setMoonSize("180px")
    }
  }, [props.pageIndex, moveMoon])

  return (
  <Fragment>
    <div id="moonRays" style={{marginTop: moveMoon, width: moonSize, height:moonSize}}></div>
    <div id='moon' style={{marginTop: moveMoon, width: moonSize, height: moonSize}}></div>
    <div id='photo' style={{ opacity: showPhoto}}></div>
  </Fragment>
  )
}

export default Moon