import React from 'react'
import Hero1 from '../../components/carausel/cara'
import Navbarr from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import CustomCard from '../../components/card/card'
import './mainn.css'
import Slider from '../../components/slider/slider'
import Footer from '../../components/footer/fotter'
import ImgCard from '../../components/imgCard/imgCard'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHardHat } from '@fortawesome/free-solid-svg-icons';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import Aboutp from '../../components/Aboutpart/Aboutp'
import Blogmain from '../../components/blogmain/Blogmain'

// import Map from '../../components/map/map'
const Main = () => {
  const retail = 'fas fa-shopping-cart'
  const Link = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.580007011982!2d73.72321057344462!3d18.592964266962323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb200020f233%3A0x2af1e3842cb375b6!2sIndialand%20Global%20Tech%20Park!5e0!3m2!1sen!2sin!4v1703760357559!5m2!1sen!2sin"
  return (
    <div  style={{ fontFamily:'Proxima Nova '
    }}>
     
     <Hero1 title=' Indialand Groups'
        subtitle='The Brighter side of life'
        />
        <div className="cardsec">
          <CustomCard logo="path/to/logo.png"
          icon={faShoppingCart}
        title="Retail industry"
        description="Transforming real estate through retail innovation In the fast-paced and often chaotic world we live in, finding moments of stillness and awareness can significantly impact our well-being. Mindfulness, a practice rooted in ancient contemplative traditions, has gained widespread recognition"/>
          <CustomCard logo="path/to/logo.png"
          icon={faHardHat}
        title="Industry sites"
        description="Elevating the real estate industry through cutting-edge r and often chaotic world we live in, finding moments of stillness and awareness can significantly impact our well-being. Mindfulness, a practice rooted in ancient contemplative traditions, has gained widespread recognition."/>
          <CustomCard logo="path/to/logo.png"
          icon={faWarehouse}
        title="Ware house"
        description="Optimizing warehouse efficiency and logistics for seamless operations In the fast-paced and often chaotic world we live intly impact our well-being. Mindfulness, a practice rooted in ancient contemplative traditions, has gained widespread recognition"/>          
          <CustomCard logo="path/to/logo.png"
          icon={faDollarSign}
        title="Commercial industry"
        description="This is a simple card description. In the fast-paced and often chaotic world we live in, finding moments of stillness and awareness can significantly impact our well-being. Mindfulness, a practice rooted in ancient contemplative traditions, has gained widespread recognition"/>

         

        </div>

        
        
        <Aboutp/>
        <Slider/>


        <div className="blogs">
          <Blogmain />

         

        </div>
        <div className="maincontac">
        <h1>Where you can find us</h1>

        <div className="details">

         
        
       
       <div className="map">
       <iframe src={Link} style = {{width:"100%", height:"100%", style:"border:0", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
       </div>
       <div className="contact-details">
           <h4>Email:www.indialand@gmail.com</h4>
           <h4>Phone no:+9188687687</h4>


         </div>
   </div>
        </div>

        <Footer/>
       
      
        
    </div>
  )
}

export default Main
