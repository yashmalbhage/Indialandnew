// CustomCard.js
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const CustomCard = ({ icon, title, description, img1 }) => {
  return (
    <div className="custom-card">
      <div className="card-content">
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            className="custom-icon"
          />
        )}
        {img1 && (
          <img src={img1} alt="Card" className="custom-image" />
        )}

        <h3 className="card-title">{title}</h3>
        <div className="content">
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.object,
  img1: PropTypes.object,
};

CustomCard.defaultProps = {
  icon: faEdit, // Default icon if not provided
};

export default CustomCard;
