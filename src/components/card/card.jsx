// CardComponent.js
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faIcons } from '@fortawesome/free-solid-svg-icons'; // Default icon (can be replaced with any other)
import { icon } from '@fortawesome/fontawesome-svg-core';

const CustomCard = ({ logo, title, description }) => {
  return (
    <Card style={{ width: '18rem', margin:'2%', color:'#1f6f8b', padding:'1%', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)' }}>

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

CustomCard.propTypes = {

  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ico: PropTypes.object
};
CustomCard.defaultProps = {
    ico: faCoffee, // Default icon if not provided
  };

export default CustomCard;
