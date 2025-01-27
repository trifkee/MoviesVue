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

export const getSingleMovieImages = async (id: string) => {
  return axiosInstance.get(`/movie/${id}/images`);
};

export const getSingleMovieCredits = async (id: string) => {
  return axiosInstance.get(`/movie/${id}/credits`);
};

export const getSingleActorImages = async (id: number) => {
  return axiosInstance.get(`/person/${id}/images`);
};

export const getTrendingMovies = async () => {
  return axiosInstance.get("/trending/movie/week");
};

export const getMoviesByGenre = async (genre: string) => {
  return axiosInstance.get(`/discover/movie?with_genres=${genre}`);
};

export const getMoviesByGenreInf = async ({
  genre,
  page,
}: {
  genre: string;
  page: number;
}) => {
  return axiosInstance.get(
    `/discover/movie?${genre && `with_genres=${genre}`}&page=${page}`
  );
};
