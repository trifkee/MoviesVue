import axiosInstance from "../instances/axiosInstance";

export const getMovies = async () => {
  const data = await axiosInstance.get("/movie/popular");
  return data;
};

export const getPopularMovies = async () => {
  return axiosInstance.get("/movie/popular");
};

export const getMoviesGenres = async () => {
  return axiosInstance.get("/genre/movie/list");
};

export const getTopRatedShows = async () => {
  return axiosInstance.get("/tv/top_rated");
};

export const getCurrentlyOnAir = async () => {
  return axiosInstance.get("/tv/on_the_air");
};

export const getSingleMovie = async (id: string) => {
  return axiosInstance.get(`/movie/${id}`);
};

export const getSingleMovieRecommendations = async (id: string) => {
  return axiosInstance.get(`/movie/${id}/recommendations`);
};

export const getSingleMovieVideos = async (id: string) => {
  return axiosInstance.get(`/movie/${id}/videos`);
};
