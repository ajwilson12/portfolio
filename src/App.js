import React, {useState} from 'react';
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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

//   const location = useLocation();
  
//   const Page: FC<{ to: string }> = (props) => <main><Link {...props} /></main>; // prettier-ignore

// /** Page A, see App for the URL */
// const A = () => <Page to="/b">You're on "/a": click to go to "/b"</Page>;
// /** Page B, see App for the URL */
// const B = () => <Page to="/a">Now on "/b": now click to go to "/a"</Page>;



  return (
    <div className="App">
      
     <Background backgroundPlay={backgroundPlay} LlamaPlay={LlamaPlay}/>
     <Navigation />
     {/* <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="fade" timeout={300}> */}
      <Routes>
        <Route path="/" element={<LandingPage  handleLlamaPlay={handleLlamaPlay} handleBackgroundPlay={handleBackgroundPlay}/>} />
        <Route path="/projects" element={<ProjectsPage  handleLlamaPlay={handleLlamaPlay} handleBackgroundPlay={handleBackgroundPlay}/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* </CSSTransition>
    </TransitionGroup> */}
    </div>
  );
}

export default App;
