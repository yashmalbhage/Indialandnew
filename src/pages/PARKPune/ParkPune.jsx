import React from 'react'
import Banner from "../../components/Banner/Banner";
import img1 from "../../images/project3.jpg";
import PostCard from "../../components/leftimf/Leftimg";
import Footer from "../../components/footer/fotter";
const ParkPune = () => {
  return (
    <div>
         <Banner backgroundImage={img1} heading="INDIALAND GLOBAL INDUSTRIAL PARK" />
      <PostCard imgSrc={img1} post="INDIALAND GLOBAL INDUSTRIAL PARK"
        description="The Industrial Park is located in Hinjewadi situated west of the city of Pune. The site is at a distance of 18 Km from Pune railway Station and 23 Km from the airport. The site is located close to the Pune-Mumbai Expressway which passes through Hinjewadi Town. Hinjewadi has emerged as a preferred IT & ITES destination and has tremendously contributed to the growing presence of IT & ITES companies in Pune."/>
        <hr></hr>

    <Footer/>
      
    </div>
  )
}

export default ParkPune
