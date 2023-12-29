import React, {useState} from "react";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './counter.css'

const Counter = () => {
    const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)}  onExit={()=>setCounterOn(false)}>

<div className="Allstat">
    <div className="stats">
    <h1>
        {counterOn && <CountUp start={0} end={10} duration={5} delay={1}/>}+ 
       
    </h1>
   
        <h6>MILLION SQFT OF
TENANTED SPACE</h6>
    </div>
    
    <div className="stats">
    <h1>
        {counterOn && <CountUp start={0} end={50} duration={3} delay={1}/>}+
        
    </h1>
    <h6>MULTINATIONAL
CLIENTS</h6>
    </div>

    
    <div className="stats">
    <h1>
        {counterOn && <CountUp start={0} end={10} duration={3} delay={2}/>}+
      
    </h1>
    <h6>IT & INDUSTRIAL
PARKS</h6>
    </div>

    
  

    </div>
    </ScrollTrigger>
    
    )

  
 
  
};

export default Counter;
