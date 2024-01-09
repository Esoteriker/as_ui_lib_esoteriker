import React from 'react';
import './button.css';

interface ButtonProps {
    buttonLabel?: string;  // The buttonLabel prop is an optional string
    onClick?: () => void;  // The onClick prop is an optional function
}
  
// you can also write like that
//const Button  = ({ buttonLabel, onClick }: ButtonProps) => {
const Button: React.FC<ButtonProps> = ({ buttonLabel, onClick }) => {
    //const [count, setCount] = useState(0);
  
    return (
      <button type="button" className="custom-button" onClick={onClick}>
        { buttonLabel }
      </button>
    );
};
  
export default Button;