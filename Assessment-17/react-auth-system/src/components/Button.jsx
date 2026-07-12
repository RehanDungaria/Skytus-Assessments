import React from 'react';
import './Button.css';
import Loader from './Loader';

const Button = ({ children, onClick, type = 'button', loading = false, disabled = false, className = '', variant = 'primary' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`custom-button ${variant} ${className}`}
    >
      {loading ? <Loader size="small" /> : children}
    </button>
  );
};

export default Button;
