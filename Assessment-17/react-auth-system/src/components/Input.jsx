import React, { useState } from 'react';
import './Input.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Input = ({ label, type = 'text', name, value, onChange, placeholder, error, icon: Icon, required = false }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="input-group">
      {label && <label htmlFor={name}>{label}</label>}
      <div className={`input-wrapper ${error ? 'error' : ''}`}>
        {Icon && <Icon className="input-icon" />}
        <input
          id={name}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
        {isPassword && (
          <button type="button" className="password-toggle" onClick={togglePassword}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default Input;
