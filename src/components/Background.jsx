import React from 'react';

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
  return (
    <div className="Background">
      <Trees backgroundPlay={props.backgroundPlay} />
      <FlipBookLlama LlamaPlay={props.LlamaPlay}/>
      <Moon pageIndex={props.pageIndex}/>
      <Mountains />
      <TallTrees backgroundPlay={props.backgroundPlay}/>
      <NightOverlay  pageIndex={props.pageIndex} />
      <Grass backgroundPlay={props.backgroundPlay}></Grass>
    </div>
  );
}

export default Background;
