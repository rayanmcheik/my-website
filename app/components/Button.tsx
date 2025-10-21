import React from 'react';

interface ButtonProps {
  Text: string;
  src: string;
}

const Button: React.FC<ButtonProps> = ({ Text, src }) => {
  return (
    <a href={src} target="_blank" rel="noopener noreferrer">
      <button className="px-6 py-3 mt-6 cursor-pointer font-semibold text-white transition-colors duration-300 border-2 rounded-lg shadow-lg hover:bg-amber-100 hover:text-black hover:border-amber-100">
        {Text}
      </button>
    </a>
  );
};

export default Button;
