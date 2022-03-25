import React, { useEffect, useState } from 'react';

// components
import FlipBookLlama from './FlipBookLlama';
import Trees from './Trees';
import TallTrees from './TallTrees'; 
import Moon from './Moon';
import Mountains from './Mountains';
import NightOverlay from './NightOverlay';
import Grass from './Grass';


// css
import './Background.css';

function Background(props) {

  const [zoom, setZoom] = useState(("scale(0.9)"))

  

  useEffect(() => {


    if(props.pageIndex === 1) {
      setZoom("scale(0.9)")
    } 
    if(props.pageIndex === 2) {
      setZoom("scale(0.8)")
    } 
    if(props.pageIndex === 3) {
      setZoom("scale(0.6)")
    } 
    if(props.pageIndex === 4) {
      setZoom("scale(0.5)")
    } 
     
    
  }, [props.pageIndex, zoom])

  return (
    <div className="backgroundWrapper">
      <div className="Background"  style={{transform: zoom}}>
        <Moon pageIndex={props.pageIndex}/>
        <Trees backgroundPlay={props.backgroundPlay} />
        <FlipBookLlama LlamaPlay={props.LlamaPlay}/>
        <Mountains />
        <Grass backgroundPlay={props.backgroundPlay}></Grass>
      </div>
        <TallTrees zoom={zoom} backgroundPlay={props.backgroundPlay}/>
        <NightOverlay pageIndex={props.pageIndex} />
    </div>
  );
}

export default Background;
