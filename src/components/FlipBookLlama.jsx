import React from "react";
import FlipBook from "./FlipBook";
import "./FlipBookLlama.css";
import LlamaSlide1 from '../img/llama_1.png'
import LlamaSlide2 from '../img/llama_2.png'
import LlamaSlide3 from '../img/llama_3.png'
import LlamaSlide4 from '../img/llama_4.png'
import LlamaSlide5 from '../img/llama_5.png'
import LlamaSlide6 from '../img/llama_6.png'
import LlamaSlide7 from '../img/llama_7.png'
import LlamaSlide8 from '../img/llama_8.png'

import { useMousePosition } from './useMousePosition'

function FlipBookLlama(props) {
  
  const position = useMousePosition();
  
  const {LlamaPlay} = props
  const images = [
    LlamaSlide1,
    LlamaSlide2,
    LlamaSlide3,
    LlamaSlide4,
    LlamaSlide5,
    LlamaSlide6,
    LlamaSlide7,
    LlamaSlide8
  ];
  return (
    <div className="llamaWrapper"  style={{marginLeft: position.x / -60 + 'px', marginBottom: position.y / 80 + 'px'}}>
      <FlipBook images={images} LlamaPlay={LlamaPlay} speed="120" />
    </div>
  );
}

export default FlipBookLlama;