import React from "react";

const FormInput = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  error,
  touched,
}) => {
  return (
    <div
      className={`input-group ${
        touched && error ? "error-state" : ""
      }`}
    >
      <label>{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />

      {touched && error && (
        <span className="error-message">{error}</span>
      )}
    </div>
  );
};

export default FormInput;