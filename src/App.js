import React, {useState} from 'react';
import { Route, Routes } from "react-router-dom";

// components
import Background from './components/Background';
import Navigation from './components/common/Navigation';

// pages
import LandingPage from './components/pages/LandingPage';
import PageNotFound from "./components/pages/PageNotFound";
import ProjectsPage from './components/pages/ProjectsPage';

// css
import './App.css';

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
    <div className="App">
     <Background backgroundPlay={backgroundPlay} LlamaPlay={LlamaPlay}/>
     <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage  handleLlamaPlay={handleLlamaPlay} handleBackgroundPlay={handleBackgroundPlay}/>} />
        <Route path="/projects" element={<ProjectsPage  handleLlamaPlay={handleLlamaPlay} handleBackgroundPlay={handleBackgroundPlay}/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
