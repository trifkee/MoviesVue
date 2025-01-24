import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_TMDB_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async function (config) {
    const token = import.meta.env.VITE_TMDB_API_KEY;

    if (!token) {
      throw new Error("Token is required");
    }

    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },

  async (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  async (response) => {
    return response;
  },

  async (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
