import React from 'react';
import Button from 'react-bootstrap/Button';

const GradientButton = ({ label, onClick }) => {
  return (
    <Button
      variant="primary"
      size="lg"
      block
      style={{
        background: 'linear-gradient(to right, #FFD700, #FFA500)',
        borderRadius: '5px',
        fontSize: '16px',
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default GradientButton;
