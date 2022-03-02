import React, { useEffect, useState } from "react";


function FlipBook({ images, LlamaPlay, speed }) {
  const [currentImage, setCurrImg] = useState(0);

  
  useEffect(() => {
    if( LlamaPlay === 1 ){
        let interval = setInterval(() => {
        if (currentImage < images.length - 1) {
          setCurrImg((current) => current + 1);
        } else {
          setCurrImg(0);
        }
      }, speed);
      return () => clearInterval(interval);
    }
    
  }, [images.length, currentImage, speed, LlamaPlay]);
  

  return (
    <div className="flip-book">
      {images.map((image, index) => (
        <img
          alt="movement"
          key={index}
          className={currentImage === index ? "active" : ""}
          src={image}     
        />
      ))}
    </div>
  );
}

export default FlipBook;