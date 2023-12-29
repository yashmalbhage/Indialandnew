import React from "react";
import CustomCard from "../card/card";
import blog2 from '../../images/blog2.png'
import blog1 from '../../images/blog1.jpeg'
import { left } from "@popperjs/core";

const Blogmain = () => {
  return (
    <div >
      <div className="container mt-4" >
        <hr></hr>
        <h1 style={{textAlign:'center', marginLeft:'0', color:' #1f6f8b'}}> Blogs</h1>
        <div className="row" style={{ marginLeft:'15%'}}>
      

          <div className="col-md-6">
            <CustomCard  title="Tower D"
            description="A Fresh Perspective on Urban Living"
            
            
            />
          </div>{" "}
         
          <div className="col-md-6">
          <CustomCard title="Indialand’s Green Initiative"
            description=" Transforming Real Estate with Sustainable Initiatives"
            /></div>{" "}
        </div>{" "}
      </div>
      <hr></hr>
    </div>
  );
};

export default Blogmain;
