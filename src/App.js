import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom";


// components
import Background from './components/Background';
import Navigation from './components/common/Navigation';

// pages
import CurrentPage from './components/CurrentPage';
import PageNotFound from "./components/pages/PageNotFound";

// css
import './App.css';

function App() {

  // background functions

  const [backgroundPlay, setBackgroundPlay] = useState("paused")

  const handleBackgroundPlay = () => {
    if(backgroundPlay === "paused"){setBackgroundPlay("running")
      setTimeout(function() {setBackgroundPlay("paused")}, 3000)}
      if (backgroundPlay === "running"){
        setBackgroundPlay("running")
      }
  }


  const [LlamaPlay, setLlamaPlay] = useState(0) 
  
  function handleLlamaPlay(){
    if(LlamaPlay === 0){setLlamaPlay(1)
    setTimeout(function() {setLlamaPlay(0)}, 3000)}
    if (LlamaPlay === 1){
      setLlamaPlay(1)
    }
  }

  // navigation functions

  let [pageIndex, setPageIndex] = useState(1);
  const [visible, setVisible] = useState(1);
  const [transition, setTransition] = useState("auto");
  let [disable, setDisable] = useState(false)

  function NavigateTo(number) {
    setTransition('none')
      setVisible(0)
      setTimeout(() => {setPageIndex(number)}, 500)
      setTimeout(() => {setVisible(1)}, 600)
      setTimeout(() => {setTransition("auto")}, 500)
    }

  function handleDisable() {
    if (disable === false) {
      setDisable(true)
      setTimeout(function() {setDisable(false)}, 1000)
    } 

  }

  function handlePageIndex() {
    setTransition('none')
    setVisible(0)
    setTimeout(() => {setPageIndex(pageIndex += 1)}, 500)
    setTimeout(() => {setVisible(1)}, 600)
    setTimeout(() => {setTransition("auto")}, 500)
    if (pageIndex >= 4) {
      setTransition('none')
      setVisible(0)
      setTimeout(() => {setPageIndex(1)}, 500)
      setTimeout(() => {setVisible(1)}, 600)
      setTimeout(() => {setTransition("auto")}, 500)
    }
  }

  function changePage() {
    handleDisable();
    if (disable === false) {
      handlePageIndex(); 
      handleBackgroundPlay(); 
      handleLlamaPlay();
    }
  }

  return (
    <div className="App" onWheel={changePage}>
      
     <Background backgroundPlay={backgroundPlay} LlamaPlay={LlamaPlay} pageIndex={pageIndex}/>
     <Navigation   
          handleLlamaPlay={handleLlamaPlay}
          handleBackgroundPlay={handleBackgroundPlay} 
          NavigateTo={NavigateTo}/>
      <Routes>
        <Route path="/" element={
        <CurrentPage 

           pageIndex={pageIndex}
           visible={visible}
           transition={transition}
        />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
