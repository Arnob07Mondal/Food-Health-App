import React from 'react';

const Input = ({ label, id, ...props }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-white mb-2 text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        className="w-full bg-transparent border border-white/30 rounded-xl px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
        {...props}
      />
    </div>
  );
};

export default Input;
