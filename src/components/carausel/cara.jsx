// Hero1.js
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Navbarr from '../Navbar/Navbar';
import './Hero1.css';
import { Typewriter } from 'react-simple-typewriter'

const Hero1 = ({ title, subtitle }) => {
  return (
    <div >
            <Navbarr/>

         <div className="hero-container">
          <div className="navbarr">
          </div>
       

         

      <Container>
        <Row>
          <Col>
           
            <h1 >{title}</h1>
            
            <p className='typewriter'><Typewriter words={[subtitle]} loop={10}  cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}/></p>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
 
  );
};

Hero1.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Hero1;
