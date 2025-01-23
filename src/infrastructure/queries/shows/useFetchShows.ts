import {
  getCurrentlyOnAir,
  getTopRatedShows,
} from "@/infrastructure/services/http/movies";
import { useQuery } from "@tanstack/vue-query";

export const useFetchTopRatedShows = () => {
  return useQuery({
    queryKey: ["top-rated-shows"],
    queryFn: () => getTopRatedShows(),
    select: (data) => data.data.results,
  });
};

export const useFetchCurrentlyOnAirShows = () => {
  return useQuery({
    queryKey: ["currently-on-air-shows"],
    queryFn: () => getCurrentlyOnAir(),
    select: (data) => data.data.results,
  });
};
