import React from 'react'
import Hero1 from '../../components/carausel/cara'
import Navbarr from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import CustomCard from '../../components/card/card'
import './mainn.css'
import Slider from '../../components/slider/slider'
import Footer from '../../components/footer/fotter'
// import Map from '../../components/map/map'
const Main = () => {
  const Link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.580007011982!2d73.72321057344462!3d18.592964266962323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb200020f233%3A0x2af1e3842cb375b6!2sIndialand%20Global%20Tech%20Park!5e0!3m2!1sen!2sin!4v1703760357559!5m2!1sen!2sin"
  return (
    <div  style={{ fontFamily:'Noto Sans JP'}}>
     
     <Hero1 title=' Indialand Groups'
        subtitle='India Land, a flagship of Americorp Group, architects dreams across five million square feet. From cutting-edge IT parks to upscale residential developments, our legacy sprawls across prime lands in Mumbai, Coimbatore, Chennai, and Pune. Elevate your lifestyle with us – where innovation meets real estate excellence. Explore grandeur, seize opportunities, and redefine your future with India Land. Discover a world of possibilities, crafted with precision and passion.'
        />
        <div className="cardsec" style={{display:'flex', margin:'2%'}}>
          <CustomCard logo="path/to/logo.png"
        title="Retail industry"
        description="Transforming real estate through retail innovation"/>
          <CustomCard logo="path/to/logo.png"
        title="Industry sites"
        description="Elevating the real estate industry through cutting-edge retail solutions online."/>
          <CustomCard logo="path/to/logo.png"
        title="Ware house"
        description="Optimizing warehouse efficiency and logistics for seamless operations"/>          
          <CustomCard logo="path/to/logo.png"
        title="Commercial industry"
        description="This is a simple card description."/>

         

        </div>
        <Slider/>
        <div className="maincontac">
          <h1>Contact us</h1>
        <div className="details">
         
         <div className="contact-details">
           <h4>Email:www.indialand@gmail.com</h4>
           <h4>Phone no:+9188687687</h4>


         </div>
       
       <div className="map">
       <iframe src={Link} style = {{width:"100%", height:"100%", style:"border:0", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
       </div>
   </div>
        </div>

        <Footer/>
       
      
        
    </div>
  )
}

export default Main
