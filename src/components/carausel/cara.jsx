// Hero1.js
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Navbarr from '../Navbar/Navbar';
import './Hero1.css';
import Typed from 'react-typed'

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
           
            <h1 ><Typed strings={[title]} typeSpeed={50} backSpeed={100} loop/></h1>
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
