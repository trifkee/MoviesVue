import { useQuery, type UseQueryReturnType } from "@tanstack/vue-query";

import {
  getMovies,
  getMoviesGenres,
  getPopularMovies,
  getSingleActorImages,
  getSingleMovie,
  getSingleMovieCredits,
  getSingleMovieImages,
  getSingleMovieRecommendations,
  getSingleMovieVideos,
  getTrendingMovies,
} from "../../services/http/movies";

import type {
  MoviesType,
  MovieType,
  SingleMovieCastType,
  SingleMovieType,
} from "@/lib/types/movies";

import type { AxiosError } from "axios";

export const useFetchMovies = () => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });
};

export const useFetchMoviesGenres = () => {
  return useQuery({
    queryKey: ["moviesGenres"],
    queryFn: () => getMoviesGenres(),
    select: (data) => data.data.genres,
  });
};

export const useFetchPopularMovies = () => {
  return useQuery({
    queryKey: ["popularMovies"],
    queryFn: () => getPopularMovies(),
    select: (data) => data.data.results as MovieType[],
  });
};

export const useFetchSingleMovie = (
  id: string
): UseQueryReturnType<SingleMovieType, AxiosError> => {
  return useQuery({
    queryKey: ["singleMovie", id],
    queryFn: () => getSingleMovie(id),
    select: (data) => data.data,
    enabled: !!id,
  });
};

export const useFetchSingleMovieRecommendations = (
  id: string
): UseQueryReturnType<MoviesType, AxiosError> => {
  return useQuery({
    queryKey: ["singleMovieRecommendations", id],
    queryFn: () => getSingleMovieRecommendations(id),
    select: (data) => data.data.results as MovieType[],
  });
};

export const useFetchSingleMovieVideos = (id: string) => {
  return useQuery({
    queryKey: ["singleMovieVideos", id],
    queryFn: () => getSingleMovieVideos(id),
    select: (data) => data.data.results,
  });
};

export const useFetchSingleMovieImages = (id: string) => {
  return useQuery({
    queryKey: ["singleMovieImages", id],
    queryFn: () => getSingleMovieImages(id),
    select: (data) => data.data.backdrops,
    enabled: !!id,
  });
};

export const useFetchSingleMovieCredits = (
  id: string
): UseQueryReturnType<SingleMovieCastType[], AxiosError> => {
  return useQuery({
    queryKey: ["singleMovieCredits", id],
    queryFn: () => getSingleMovieCredits(id),
    select: (data) => data.data.cast,
    enabled: !!id,
  });
};

export const useFetchTrendingMovies = () => {
  return useQuery({
    queryKey: ["trendingMovies"],
    queryFn: () => getTrendingMovies(),
    select: (data) => data.data.results as MovieType[],
  });
};
