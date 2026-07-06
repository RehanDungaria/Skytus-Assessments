import React from 'react';

const Input = ({ label, value, onChange, type = "text", inputRef, placeholder }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        ref={inputRef}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;