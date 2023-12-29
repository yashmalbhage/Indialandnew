import React from "react";
import Banner from "../../components/Banner/Banner";
import img1 from "../../images/project4.jpg";
import PostCard from "../../components/leftimf/Leftimg";
import Footer from "../../components/footer/fotter";
const Coimbatore = () => {
  return (
    <div>
      <Banner backgroundImage={img1} heading="INDIALAND TECH PARK" />
      <PostCard imgSrc={img1} post="INDIALAND TECH PARK"
        description="Spread over 12 acres with a build up space of 1.1 million sq ft, this state-of-the-art IT Park is designed specially to cater to IT/ITES companies. Located 10 kms north of Coimbatore and 12 kms from Airport, with close proximity to NH47, this IT Park project is first of its kind in this region. An Eco-Friendly design with Gold Rated green building specification for user comfort, high energy and floor efficiency. There’s full compliance with National building code, designed with International standard facilities, the property perfectly suits the requirements of IT/ITES companies—integration of computer communication, electronic systems and control technologies provides optimal comfort to the occupants. "/>
        <hr></hr>

    <Footer/>
    </div>
  );
};

export default Coimbatore;
