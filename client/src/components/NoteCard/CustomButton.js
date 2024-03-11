import React from 'react';
import classes from './CustomButton.module.css';

// Button Component with style
// inherits onClick functionality and children props
const CustomButton = ({ children, onClick }) => (
  <button onClick={onClick} className={classes.customButton}>
    {children}
  </button>
);

export default CustomButton;