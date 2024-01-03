import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar/Navbar";

const Banner = ({ backgroundImage, heading }) => {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    color:' #d4af37',
    height: "100vh", // You can adjust the height as needed
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the alpha (0.5) for the tint intensity
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const headingStyle = {
    color: "#d4af37",
    fontSize: "3rem",
    textAlign: "center",
  };

  return (
    <div>  
      <Navbar/>
      
      <div style={bannerStyle}>
    <div style={overlayStyle}>
      <h1 style={headingStyle}>{heading}</h1>
    </div>
  </div></div>
   
  );
};

export default Banner;
