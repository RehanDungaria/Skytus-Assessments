export const validateField = (name, value) => {
  let error = "";

  if (!value.trim()) {
    error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
  } else if (name === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      error = "Please enter a valid email address";
    }
  } else if (name === "password") {
    if (value.length < 8) {
      error = "Password must be at least 8 characters";
    }
  }

  return error;
};