// TestimonialSlider.jsx

import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import './TestimonialSlider.css'; // Import a CSS file for additional styling (see below)

const TestimonialSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="testimonial-item">
          <Image
            className="testimonial-img"
            src="https://via.placeholder.com/150"
            alt="John Doe"
            roundedCircle
          />
          <Carousel.Caption>
            <h3>John Doe</h3>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="testimonial-item">
          <Image
            className="testimonial-img"
            src="https://via.placeholder.com/150"
            alt="Jane Smith"
            roundedCircle
          />
          <Carousel.Caption>
            <h3>Jane Smith</h3>
            <p>"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      {/* Add more Carousel.Items for additional testimonials */}

    </Carousel>
  );
};

export default TestimonialSlider;
