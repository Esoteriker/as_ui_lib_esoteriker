// Spinner.js
import React from 'react';
import './CircleProgress.css';

interface CircleProgressProps {
  size?: number; 
  color?: string;
  color2?: string;
}

const CircleProgress: React.FC<CircleProgressProps> = ({ size, color, color2 }) => (
    <div 
      className="spinner" 
      style={{ width: size, height: size, borderLeftColor: color2, borderTopColor: color2, borderRightColor: color, borderBottomColor: color }}
      >
      </div>
);

export default CircleProgress;
