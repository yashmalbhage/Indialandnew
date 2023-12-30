
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ReactDOM from "react-dom";
import Carousal from "@itseasy21/react-elastic-carousel";
import Item from "./Item";



import slide_image_4 from '../../images/project4.jpg';
import slide_image_5 from '../../images/project3.jpg';
import slide_image_6 from '../../images/project2.jpg';
import slide_image_7 from '../../images/project1.jpg';
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Slider() {
  return (
    <div className="container">
      <h1 className="heading">Projects</h1>
      <div className="slider">
        <Carousal breakPoints={breakPoints}>
          <Item><img src={slide_image_4} alt="" /></Item>
          <Item><img src={slide_image_5} alt="" /></Item>
          <Item><img src={slide_image_6} alt="" /></Item>
          <Item><img src={slide_image_7} alt="" /></Item>
          <Item><img src={slide_image_4} alt="" /></Item>
          <Item><img src={slide_image_5} alt="" /></Item>
          <Item><img src={slide_image_6} alt="" /></Item>
          <Item><img src={slide_image_7} alt="" /></Item>
        </Carousal>
      </div>
    
      
    </div>
  );
}

export default Slider;