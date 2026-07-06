import React from 'react';

const Button = ({ onClick, label, type = "button" }) => {
  return (
    <button onClick={onClick} type={type} className="btn btn-primary">
      {label}
    </button>
  );
};

export default Button;