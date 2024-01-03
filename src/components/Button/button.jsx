// Button.js

import React from 'react';
import styled from 'styled-components';

// Define your styled component
const StyledButton = styled.button`
  background-color: #FEC300;;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  // position:absolute;
  // margin:Auto;

  &:hover {
    background-color: black;
  }
`;

// Create a functional component that uses the styled component
const Button = ({ onClick, children }) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
