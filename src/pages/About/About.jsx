import React from "react";
import Navbarr from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import CustomCard from "../../components/card/card";
import TestimonialSlider from "../../components/test-slider/testimonial";
import abimg from '../../images/hero_2.jpg.webp'
import bg from '../../images/scattered-forcefields.svg'
import './about.css'
import Counter from "../../components/counter/counter";
import Team from "../../components/team/team";
import Footer from "../../components/footer/fotter";
import Aboutp from "../../components/Aboutpart/Aboutp";
const testimonials = [
  {
    author: "John Doe",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    author: "Jane Smith",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  // Add more testimonials as needed
];

const About = () => {
  return (
    <div style={{ fontFamily:'Noto Sans JP'}}>
      <div className="na">
        <Hero
          title="About us"
          subtitle=""
          backgroundImage="#1f6f8b;"
          style={{backgroundColor:'#1f6f8b'}}
        />
        {/* <div className="cardsec" style={{ display: "flex", margin: "2%" }}>
          <CustomCard
            logo="path/to/logo.png"
            title="Retail industry"
            description="Transforming real estate through retail innovation"
          />
          <CustomCard
            logo="path/to/logo.png"
            title="Industry sites"
            description="Elevating the real estate industry through cutting-edge retail solutions online."
          />
          <CustomCard
            logo="path/to/logo.png"
            title="Ware house"
            description="Optimizing warehouse efficiency and logistics for seamless operations"
          />
          <CustomCard
            logo="path/to/logo.png"
            title="Commercial industry"
            description="This is a simple card description."
          />
        </div>{" "} */}
        <div className="testi">
          {" "}
          {/* <h2>Testimonials</h2> */} {/* <TestimonialSlider/> */}{" "}
        </div>
        <Aboutp/>
        <Team/>
        {/* <div className="phil">
          <h1>Our Philosophy</h1>
          <hr></hr>
          <div className="mission">
            <h4>Mission</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora assumenda mollitia veritatis minus optio laborum voluptatum eveniet. Iure expedita nulla doloribus vero nostrum dolor necessitatibus vitae, fuga, tempora deleniti eaque?</p>
          </div>
          <div className="mission">
            <h4>Vision</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora assumenda mollitia veritatis minus optio laborum voluptatum eveniet. Iure expedita nulla doloribus vero nostrum dolor necessitatibus vitae, fuga, tempora deleniti eaque?</p>
          </div>
          <div className="mission">
            <h4>Core</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora assumenda mollitia veritatis minus optio laborum voluptatum eveniet. Iure expedita nulla doloribus vero nostrum dolor necessitatibus vitae, fuga, tempora deleniti eaque?</p>
          </div>
          
        </div> */}

      </div>
      <Footer/>

    </div>
  );
};

export default About;
