// CustomButton.js
import React from 'react';
import styles from './CustomButton.module.css';

const CustomButton = ({ children, onClick }) => (
  <button onClick={onClick} className={styles.customButton}>
    {children}
  </button>
);

export default CustomButton;