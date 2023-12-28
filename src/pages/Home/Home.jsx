import React from 'react'
import Navbarr from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import './home.css'
import CustomCard from '../../components/card/card'
import TestimonialSlider from '../../components/test-slider/testimonial';
import Slider from '../../components/slider/slider'

const testimonials = [
  {
    author: 'John Doe',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    author: 'Jane Smith',
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  // Add more testimonials as needed
];

const Home = () => {
  return (
    <div style={{ fontFamily:'Noto Sans JP'}}>
        <div className="na">
        <Hero title='Welcome to India-land'
        subtitle='anything'
        backgroundImage='#1f6f8b'/>
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
        <div className="testi">
        {/* <h2>Testimonials</h2> */}
      {/* <TestimonialSlider/> */}
        </div>
        <div className="projects">
          <Slider/>
        </div>

        </div>
        
      
    </div>
  )
}

export default Home
