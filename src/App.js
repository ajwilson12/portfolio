import React, {useEffect, useState} from 'react';
import { Routes, Route } from "react-router-dom";


// components
import Background from './components/Background';
import Navigation from './components/common/Navigation';
import { useMousePosition } from "./components/useMousePosition";
import Stars from './components/Stars';
import Footer from './components/common/Footer';
// import useWindowDimensions from './components/GetDimensions';

// pages
import CurrentPage from './components/CurrentPage';
import PageNotFound from "./components/pages/PageNotFound";

// css
import './App.css';


function App() {

  // get window height
  // const { width } = useWindowDimensions();

  // background functions

  const [backgroundPlay, setBackgroundPlay] = useState("paused")

  const handleBackgroundPlay = () => {
    if(backgroundPlay === "paused"){setBackgroundPlay("running")
      setTimeout(function() {setBackgroundPlay("paused")}, 10000)}
      if (backgroundPlay === "running"){
        setBackgroundPlay("running")
      }
  }


  const [LlamaPlay, setLlamaPlay] = useState(0) 
  
  function handleLlamaPlay(){
    if(LlamaPlay === 0){setLlamaPlay(1)
    setTimeout(function() {setLlamaPlay(0)}, 10000)}
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
      setTimeout(function() {setDisable(false)}, 1500)
    } 
  }

  function handlePageIndex(event) {
    handleDisable();
    if (disable === false) {
      handlePageAnimation(); 
      handleBackgroundPlay(); 
      handleLlamaPlay();
      if (event.deltaY > 0) {
        setTimeout(() => {setPageIndex(pageIndex += 1)}, 500)
      } 
      if (event.deltaY < 0) {
        setTimeout(() => {setPageIndex(pageIndex -= 1)}, 500)
      } 
    }
  }


  useEffect(() =>{
    if (pageIndex > 4) {
      setTimeout(() => {setPageIndex(1)}, 500)
    }
    if (pageIndex < 1) {
      setTimeout(() => {setPageIndex(4)}, 500)
    }
  }, [pageIndex])



  // track mouse position
  useMousePosition();
  
  // make next page fade in
  function handlePageAnimation() {
    setTransition('none')
    setVisible(0)
    setTimeout(() => {setVisible(1)}, 600)
    setTimeout(() => {setTransition("auto")}, 500)
  }


  // mobile menu
  let [mobileMenu, setMobileMenu] = useState(false);

  function handleMobileMenu(onOff) {
    setTransition('none')
    setVisible(0)
      setTimeout(() => {setMobileMenu(onOff)}, 500)
      setTimeout(() => {setVisible(1)}, 600)
      setTimeout(() => {setTransition("auto")}, 500)
      console.log(mobileMenu)
    }

  return (
    <div className="App" onWheel={handlePageIndex}>
     <Background backgroundPlay={backgroundPlay} LlamaPlay={LlamaPlay} pageIndex={pageIndex}/>
     <Stars />
     <Footer />
     <Navigation  
          pageIndex={pageIndex} 
          mobileMenu={mobileMenu}
          handleMobileMenu={handleMobileMenu}
          handleLlamaPlay={handleLlamaPlay}
          handleBackgroundPlay={handleBackgroundPlay} 
          NavigateTo={NavigateTo}/>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={
        <CurrentPage 
           NavigateTo={NavigateTo}
           handleMobileMenu={handleMobileMenu}
           handleLlamaPlay={handleLlamaPlay}
           handleBackgroundPlay={handleBackgroundPlay} 
           mobileMenu={mobileMenu}
           pageIndex={pageIndex}
           visible={visible}
           transition={transition}
        />} />
      </Routes>
    </div> 
  );
}

export default App;
