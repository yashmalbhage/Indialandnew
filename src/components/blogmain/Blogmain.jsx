import React from "react";
import CustomCard from "../card/card";
import blog2 from '../../images/blog2.png'
import blog1 from '../../images/blog1.jpeg'
import { left } from "@popperjs/core";
import Button from "../Button/button";
import './blogmain.css'
import { Link } from "react-router-dom";

const Blogmain = () => {
  return (
    
    <div className="mainblog">
            <h1 style={{textAlign:'center', marginLeft:'0', color:' #1f6f8b'}}> Blogs</h1>

      <div className="cardbicontainer">
      <Link to='/TowerD' style={{textDecoration:"None"}}>  <CustomCard  title="Tower D"
            description="A Fresh Perspective on Urban Living"
            
            
            /></Link>
             <Link to="/TowerD" style={{textDecoration:"None"}}> <CustomCard title="Indialand’s Green Initiative"
            description=" Transforming Real Estate with Sustainable Initiatives"
            /></Link>

      </div>
    
      
      
    </div>
  );
};

export default Blogmain;
