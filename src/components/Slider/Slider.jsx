import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

import Slider1 from "./images/FIRST BANNER.jpg";
import Slider2 from "./images/2ND BANNER.jpg";
import Slider3 from "./images/3rd banner.jpg"

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [slideContent, setSlideContent] = useState(0);

  // const data = [
  //   {Slider1},
  //   {Slider2},
  //   {Slider3},
  // ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="sliders">
      {/* <div className="slider-text">{this.slideContent}</div> */}
      <div className="containers" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={Slider1} alt="" />
        <img src={Slider2} alt="" />
        <img src={Slider3} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
