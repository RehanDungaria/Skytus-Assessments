export const evaluatePasswordStrength = (password) => {
  if (!password) {
    return {
      score: 0,
      text: "",
      color: "",
    };
  }

  let points = 0;

  if (password.length >= 8) points++;
  if (/[A-Z]/.test(password)) points++;
  if (/[0-9]/.test(password)) points++;
  if (/[^A-Za-z0-9]/.test(password)) points++;

  switch (points) {
    case 1:
      return {
        score: 1,
        text: "Weak 🔴",
        color: "#ef4444",
      };

    case 2:
    case 3:
      return {
        score: 2,
        text: "Moderate 🟡",
        color: "#eab308",
      };

    case 4:
      return {
        score: 3,
        text: "Strong 🟢",
        color: "#22c55e",
      };

    default:
      return {
        score: 0,
        text: "",
        color: "",
      };
  }
};