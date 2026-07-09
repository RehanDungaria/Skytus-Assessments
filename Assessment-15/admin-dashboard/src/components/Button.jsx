import React from 'react';

const Button = ({ children, className = '', ...props }) => (
  <button
    className={`rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
