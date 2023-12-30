import React from "react";
import Hero from "../../components/Hero/Hero";
import PostCard from "../../components/leftimf/Leftimg";
import chairman from '../../images/Harish.jpg'
import umesh from '../../images/umesh.jpg'
import deepesh from '../../images/Dipesh.jpg'
import Salai from '../../images/salai.jpg'
import amitab from '../../images/amitab.jpg'
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
    <PostCard
    imgSrc={umesh}
    name='Mr. CS Ilangovan (Umesh)'
    post = 'Sr. Group Vice President'
    description='
    Mr. Umesh emerges as the linchpin in fostering and sustaining crucial strategic alliances within the corporate landscape, particularly with bankers and esteemed business associates. Boasting an impressive professional trajectory that spans over two decades, Mr. Umesh is invaluable contributions to the group have been notably significant during his fourteen-year tenure.'/>
    <hr></hr>
    <PostCard
    imgSrc={deepesh}
    name='Mr Dipesh Desai(VP)'
    post = 'Account'
    description='Over two decades in handling functions of finance, accounts & taxation, statutory compliances, legal and statutory compliance in banking operations, corporate strategy, cross border transactions structuring, etc.'/>
    <hr></hr>
    <PostCard
    imgSrc={Salai}
    name='Mr. Salai kumaaran(CEO)'
    post = 'Group Real Estate'
    description='Vast experience of over three decades in real estate, construction and related finance, legal and technical requirements. He is well experienced in handling large projects and new technologies.'/>
    <hr></hr>
    <PostCard
    imgSrc={amitab}
    name='Mr. Amitabh Bhambhani'
    post = 'Head of Projects'
    description='Civil Engineer with more than three decades of experience in design, development, execution, and maintenance of various projects. He has also specialised in retail, mall and development and maintenance of IT'/>
    <hr></hr>
    <Footer/>
      
    </div>
    
  );
};

export default Leader;
