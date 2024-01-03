
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ReactDOM from "react-dom";
import Carousal from "@itseasy21/react-elastic-carousel";
import Item from "./Item";
import { Link } from 'react-router-dom';
import Button from '../Button/button';
import Cardlong from '../LongCard/LongCard';
import './index.css'
import slide_image_4 from '../../images/1.jpg'
import slide_image_5 from '../../images/coimbatore/2.jpg';
import slide_image_6 from '../../images/Pune/1.jpg';
import slide_image_7 from '../../images/commercial Land Pune.jpg';
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Slider() {
  return (
    <div className="container" style={{height:'100vh'}}>
      <div className="head">      <h1 className="heading" style={{color:" #0f2542"}}>Projects</h1>
</div>
      <div className="slider">
        <Carousal breakPoints={breakPoints}>
          <Item><Cardlong image={slide_image_4} title="Indialand industrial and logistic park orgadam "  buttonText=" know more" url="Chennai"/></Item>
          <Item><Cardlong image={slide_image_5} title="Indialand Tech park, Coimbatore" url="Coimbatore"/></Item>
          <Item><Cardlong image={slide_image_6} title="Indialand Global Industrail Park, Pune" url="INDIALAND GLOBAL INDUSTRIAL PARK, Pune"/></Item>
          <Item><Cardlong image={slide_image_7} title="Cyber city magarpattta, Pune" url="Magarpatta"/></Item>
          <Item><Cardlong image={slide_image_4} title="Indialand industrial and logistic park orgadam "  buttonText=" know more" url="Chennai"/></Item>
          <Item><Cardlong image={slide_image_5} title="Indialand Tech park, Coimbatore" url="Coimbatore"/></Item>
          <Item><Cardlong image={slide_image_6} title="Indialand Global Industrail Park, Pune" url="INDIALAND GLOBAL INDUSTRIAL PARK, Pune"/></Item>
          <Item><Cardlong image={slide_image_7} title="Cyber city magarpattta, Pune" url="Magarpatta"/></Item>


        
        </Carousal>
      
      </div>
{/* 
      <div className="btn">
        <Link to="/Coimbatore"><Button children=" click here to know more!!"/></Link>
      </div> */}

    
      
    </div>
  );
}

export default Slider;