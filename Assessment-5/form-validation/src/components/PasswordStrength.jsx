import React from "react";

const PasswordStrength = ({ passwordStrength }) => {
  return (
    <div className="strength-container">
      <div className="strength-meter-bar">
        <div
          className="strength-progress"
          style={{
            width: `${(passwordStrength.score / 3) * 100}%`,
            backgroundColor: passwordStrength.color,
          }}
        />
      </div>

      <span className="strength-text">
        {passwordStrength.text}
      </span>
    </div>
  );
};

export default PasswordStrength;