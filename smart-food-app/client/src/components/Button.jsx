import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button
      className="w-full bg-white/20 hover:bg-white/30 text-white rounded-xl px-4 py-2 font-medium transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
