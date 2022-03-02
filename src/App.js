import React, { useState } from 'react';

// components
import FlipBookLlama from './components/FlipBookLlama';
import Trees from './components/Trees';
import TallTrees from './components/TallTrees'; 
import Moon from './components/Moon';
// css
import './App.css';
import Title from './components/Title';

function App() {

  const [backgroundPlay, setBackgroundPlay] = useState("paused")

  const handleBackgroundPlay = () => {
    if(backgroundPlay === "paused"){setBackgroundPlay("running")
      setTimeout(function() {setBackgroundPlay("paused")}, 2500)}
      if (backgroundPlay === "running"){
        setBackgroundPlay("running")
      }
  }


  const [LlamaPlay, setLlamaPlay] = useState(0) 
  
  function handleLlamaPlay(){
    if(LlamaPlay === 0){setLlamaPlay(1)
    setTimeout(function() {setLlamaPlay(0)}, 2500)}
    if (LlamaPlay === 1){
      setLlamaPlay(1)
    }
    console.log(LlamaPlay)
  }

  return (
    <div className="App" onWheel={() => {handleBackgroundPlay(); handleLlamaPlay();}}>
      <Trees backgroundPlay={backgroundPlay}/>
      <FlipBookLlama LlamaPlay={LlamaPlay}/>
      <Moon />
      <TallTrees backgroundPlay={backgroundPlay}/>
      <Title />
    </div>
  );
}

export default App;
