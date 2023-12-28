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
          backgroundImage="#e09007"
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
        <div className="abo">
            <h1>About us</h1>
            <p>India Land, a part of the Americorp Group, has developed five million square feet of real estate, including IT parks, SEZs, and industrial and commercial spaces across major Indian cities. They hold prime land parcels in South Mumbai, Coimbatore, suburban Chennai (Padalam, Oragadam), and Pune (Hinjewadi) for high-end commercial and residential development.
</p>
            <div className="ap1">
                <div className="imagep"> 
                  <img src={abimg} alt="image" />
                </div>
                <div className="attri">
                    <div className="feature">
                        <h4>Quality properties</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.</p>
                    </div>
                    <div className="feature">
                        <h4>Quality properties</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.</p>
                    </div>
                    <div className="feature">
                        <h4>Quality properties</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.</p>
                    </div>
                    <div className="feature">
                        <h4>Quality properties</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.</p>
                    </div>


                </div>
            </div>
        </div>
        <Counter />
        <Team/>

      </div>
      <Footer/>

    </div>
  );
};

export default About;
