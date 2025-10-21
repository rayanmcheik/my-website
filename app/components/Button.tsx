import React from 'react';

interface ButtonProps {
  Text: string;
  src: string;
  color: string;
  hovercolor: string;
  bgcolor: string;
  bgcolorhover: string;
}

const Button: React.FC<ButtonProps> = ({
  Text,
  src,
  color ,
  hovercolor ,
  bgcolor ,
  bgcolorhover ,
}) => {
  return (
    <a href={src} target="_blank" rel="noopener noreferrer">
      <button  className={`px-6 py-3 mt-6 cursor-pointer font-semibold transition-colors duration-300 border-2 rounded-lg shadow-lg ${color} ${hovercolor} ${bgcolor} ${bgcolorhover}`}>
        {Text}
      </button>
    </a>
  );
};

export default Button;
