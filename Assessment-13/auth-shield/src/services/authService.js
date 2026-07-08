const API_URL = process.env.REACT_APP_API_URL;

export const loginUser = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        email === "eve.holt@reqres.in" &&
        password === "cityslicka"
      ) {
        resolve({
          token: "authshield-demo-token",
          apiSource: API_URL,
        });
      } else {
        reject(new Error("Invalid Credentials"));
      }
    }, 1000);
  });
};