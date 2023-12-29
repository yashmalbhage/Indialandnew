import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Banner = ({ backgroundImage, heading }) => {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
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
    color: "white",
    fontSize: "2rem",
    textAlign: "center",
  };

  return (
    <div style={bannerStyle}>
      <div style={overlayStyle}>
        <h1 style={headingStyle}>{heading}</h1>
      </div>
    </div>
  );
};

export default Banner;
