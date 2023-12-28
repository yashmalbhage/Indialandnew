import React, {useState} from "react";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './counter.css'

const Counter = () => {
    const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)}  onExit={()=>setCounterOn(false)}>

<div style={{
    width: "100%",
    background:'white',
    color:'black',
    padding:'50px',
    display:"flex"
  }}>
    <h3>
        {counterOn && <CountUp start={0} end={20} duration={3} delay={0}/>}+ years of experience
    </h3>
    <h3>
        {counterOn && <CountUp start={0} end={2000} duration={3} delay={0}/>}+ projects
    </h3>
    <h3>
        {counterOn && <CountUp start={0} end={2000} duration={3} delay={0}/>}+ clients
    </h3>
    <h3>
        {counterOn && <CountUp start={0} end={200} duration={3} delay={0}/>}+ cities
    </h3>

    </div>
    </ScrollTrigger>
    
    )

  
 
  
};

export default Counter;
