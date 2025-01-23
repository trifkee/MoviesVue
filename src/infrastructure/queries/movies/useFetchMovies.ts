import { useQuery } from "@tanstack/vue-query";

import {
  getMovies,
  getMoviesGenres,
  getPopularMovies,
} from "../../services/http/movies";
import type { MovieType } from "@/lib/types/movies";

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
