import React from "react";
import Hero from "../../components/Hero/Hero";
import PostCard from "../../components/leftimf/Leftimg";
import chairman from '../../images/pexels-andrea-piacquadio-832998.jpg'
import PostrightCard from "../../components/rightimf/Rightimf";
import Footer from "../../components/footer/fotter";

const Leader = () => {
  return (
    <div>
      <Hero title="Leadership" />
      <PostCard imgSrc={chairman}
        name="HARISH FABIANI"
        post="Group Chairman"
        description="Mr. Harish Fabiani, received his diploma in Electronics and Telecommunications Engineering in 1981 from Delhi University. In 1988, he completed an Executive Education program in Finance/General Corporate Management at Madrid IESE (Institute of Higher Business Studies). He has two decades of experience managing various companies. He is actively involved with Technology companies, Commercial real estate ventures, Finance and Trading etc. Mr. Fabiani has been a strategic advisor to companies on issues of corporate governance and transparency."/>
        <hr></hr>
    <PostrightCard
    imgSrc={chairman}
    name='Mr. CS Ilangovan (Umesh)'
    post = 'Sr. Group Vice President'
    description='Mr. Umesh is the key to the strategic alliances developed with bankers and business associates. With more than two decades of experience and fourteen years of association with the group, he has been at the forefront in nurturing the company since inception.'/>
    <hr></hr>
    <Footer/>
      
    </div>
    
  );
};

export default Leader;
