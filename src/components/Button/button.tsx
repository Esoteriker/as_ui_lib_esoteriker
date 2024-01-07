import React, { FunctionComponent } from 'react';
import './button.css';

interface ButtonProps {
    onClick?: () => void;  // The onClick prop is an optional function
  }
  
const Button: FunctionComponent<ButtonProps> = ({ onClick }) => {
    //const [count, setCount] = useState(0);

  
    return (
      <button type="button" className="custom-button" onClick={onClick}>
        Click me
      </button>
    );
  };
  
  export default Button;