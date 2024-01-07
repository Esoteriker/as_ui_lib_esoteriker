// Spinner.js
import React from 'react';
import './spinner.css';

const Spinner = ({ size = 50, color = '#000' }) => (
  <div 
    className="spinner" 
    style={{ width: size, height: size, borderColor: color }}
  ></div>
);

export default Spinner;
