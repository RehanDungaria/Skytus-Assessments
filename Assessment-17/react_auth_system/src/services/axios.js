import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

// Check if the environment variable exists
if (!baseURL) {
  console.error("❌ REACT_APP_API_BASE_URL is missing in the .env file.");
}

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.log("Unauthorized - Please login again.");

          localStorage.removeItem("token");
          localStorage.removeItem("user");

          window.location.href = "/login";
          break;

        case 403:
          console.log("Access Denied");
          break;

        case 500:
          console.log("Server Error");
          break;

        default:
          console.log(error.response.data?.message || "Something went wrong");
      }
    } else {
      console.log("Network Error");
    }

    return Promise.reject(error);
  }
);

export default api;