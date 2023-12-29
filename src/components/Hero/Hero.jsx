// Hero.js
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Navbarr from '../Navbar/Navbar';

const Hero = ({ title, subtitle, backgroundImage }) => {
  const heroStyle = {
    background: '#1f6f8b',
    backgroundSize: 'cover',
    color: 'white',
    textAlign: 'center',
    padding: '12%',
    justifyContent: 'center'
  };
  

  return (
    <div>
             <Navbarr />

      <div style={heroStyle}>

      <Container>
       
        <Row>
          <Col>
          
         
          
          
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
    
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  bg:PropTypes.string
  
};

export default Hero;
