import React from 'react'
import Banner from "../../components/Banner/Banner";
import img1 from "../../images/Pune/6.jpg";
import PostCard from "../../components/leftimf/Leftimg";
import Footer from "../../components/footer/fotter";
const ParkPune = () => {
  return (
    <div>
         <Banner backgroundImage={img1} heading="INDIALAND GLOBAL INDUSTRIAL PARK" />
      <PostCard imgSrc={img1} post="INDIALAND GLOBAL INDUSTRIAL PARK"
        description="Pune is the 2nd largest city in Maharashtra with a population of about 4 million. Pune is known as the “Oxford of the East” due to the presence of a large number of Educational Institutions. The city is emerging rapidly as an Automobile and IT & ITES destination.

        The Industrial Park is located in Hinjewadi situated west of the city of Pune. The site is at a distance of 18 Km from Pune railway Station and 23 Km from the airport. The site is located close to the Pune-Mumbai Expressway which passes through Hinjewadi Town. Hinjewadi has emerged as a preferred IT & ITES destination and has tremendously contributed to the growing presence of IT & ITES companies in Pune.
        
        The Industrial Park spreads out in 28 acres of land, oriented North-South, nestled on Eastern side of Western Ghats, with access roads of 20M on the northern side.
        
        The site is located close to the Rajiv Gandhi Infotech Park, which houses IT Companies such as Infosys, Wipro, Geometric Software solutions, CTS, TCS etc. Educational institutes like Symbiosis and Mercedes Benz Education Academy have also set base at Hinjewadi"/>
        <hr></hr>

    <Footer/>
      
    </div>
  )
}

export default ParkPune
