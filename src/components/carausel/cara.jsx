// Hero1.js
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Navbarr from '../Navbar/Navbar';
import './Hero1.css';

const Hero1 = ({ title, subtitle }) => {
  return (
    <div >
         <div className="hero-container">
          <div className="navbarr">
          <Navbarr/>
          </div>
       

         

      <Container>
        <Row>
          <Col>
           
            <h1 >{title}</h1>
            <p>{subtitle}</p>
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
