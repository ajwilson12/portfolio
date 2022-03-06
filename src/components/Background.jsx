import React from 'react';

// components
import FlipBookLlama from './FlipBookLlama';
import Trees from './Trees';
import TallTrees from './TallTrees'; 
import Moon from './Moon';
// css
import './Background.css';

function Background(props) {
  return (
    <div className="Background">
      <Trees backgroundPlay={props.backgroundPlay}/>
      <FlipBookLlama LlamaPlay={props.LlamaPlay}/>
      <Moon pageIndex={props.pageIndex}/>
      <TallTrees backgroundPlay={props.backgroundPlay}/>
      <div className='ground'></div>
    </div>
  );
}

export default Background;
