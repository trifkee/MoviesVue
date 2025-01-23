import axios from "axios";

const axiosInstance = axios.create({
    // @ts-expect-error
    baseURL: import.meta.env.VITE_TMDB_API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

axiosInstance.interceptors.request.use(
    async function (config) {
        // @ts-expect-error
        const token = import.meta.env.VITE_TMDB_API_KEY;
    
        if(!token) {
            throw new Error('Token is required');
        }

        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },

    async (error) => {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    async (response) => {
        return response;
    },

    async (error) => {
        return Promise.reject(error);
    })

export default axiosInstance;
