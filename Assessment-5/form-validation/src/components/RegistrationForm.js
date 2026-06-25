import React, { useState, useEffect } from "react";
import FormInput from "./FormInput";
import PasswordStrength from "./PasswordStrength";
import { validateField } from "../utils/validation";
import { evaluatePasswordStrength } from "../utils/passwordStrength";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userCount, setUserCount] = useState(0);

  const [passwordStrength, setPasswordStrength] =
    useState({
      score: 0,
      text: "",
      color: "",
    });

  useEffect(() => {
    const savedData =
      sessionStorage.getItem("cachedFormData");

    if (savedData) {
      setFormData(JSON.parse(savedData));
    }

    const users =
      JSON.parse(
        localStorage.getItem("registeredUsers")
      ) || [];

    setUserCount(users.length);
  }, []);

  useEffect(() => {
    sessionStorage.setItem(
      "cachedFormData",
      JSON.stringify(formData)
    );
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setIsSubmitted(false);

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }

    if (name === "password") {
      setPasswordStrength(
        evaluatePasswordStrength(value)
      );
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    ["username", "email", "password"].forEach(
      (field) => {
        const error = validateField(
          field,
          formData[field]
        );

        if (error) {
          newErrors[field] = error;
        }
      }
    );

    setErrors(newErrors);

    setTouched({
      username: true,
      email: true,
      password: true,
    });

    if (Object.keys(newErrors).length === 0) {
      const existingUsers =
        JSON.parse(
          localStorage.getItem("registeredUsers")
        ) || [];

      existingUsers.push({
        ...formData,
        registeredAt: new Date().toLocaleString(),
      });

      localStorage.setItem(
        "registeredUsers",
        JSON.stringify(existingUsers)
      );

      setUserCount(existingUsers.length);
      setIsSubmitted(true);

      setFormData({
        username: "",
        email: "",
        password: "",
      });

      setErrors({});
      setTouched({});

      setPasswordStrength({
        score: 0,
        text: "",
        color: "",
      });

      sessionStorage.removeItem("cachedFormData");
    }
  };

  return (
    <div className="form-card">
      <h2>Create Account</h2>

      <p className="subtitle">
        Registered Users: <strong>{userCount}</strong>
      </p>

      {isSubmitted && (
        <div className="success-banner">
          🎉 Registration Successful!
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Username"
          type="text"
          name="username"
          value={formData.username}
          placeholder="Enter Username"
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.username}
          touched={touched.username}
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          placeholder="you@example.com"
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
          touched={touched.email}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          placeholder="Enter Password"
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password}
          touched={touched.password}
        />

        {formData.password && (
          <PasswordStrength
            passwordStrength={passwordStrength}
          />
        )}

        <button
          type="submit"
          className="submit-btn"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;