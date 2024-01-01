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
   
        <h5>MILLION SQFT OF
TENANTED SPACE</h5>
    </div>
    
    <div className="stats">
    <h1>
        {counterOn && <CountUp start={0} end={50} duration={3} delay={1}/>}+
        
    </h1>
    <h5>MULTINATIONAL
CLIENTS</h5>
    </div>

    
    <div className="stats">
    <h1>
        {counterOn && <CountUp start={0} end={10} duration={3} delay={2}/>}+
      
    </h1>
    <h5>IT & INDUSTRIAL
PARKS</h5>
    </div>

    
  

    </div>
    </ScrollTrigger>
    
    )

  
 
  
};

export default Counter;
