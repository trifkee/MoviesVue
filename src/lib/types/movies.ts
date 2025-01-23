export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MoviesType = MovieType[];

export type GenreType = {
  name: string;
  id: string;
};

export type GenreListType = GenreType[];

export type ShowType = {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

export type SingleMovieType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: SingleCollectionType;
  budget: number;
  genres: GenreType[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: SingleProductionCompanyType[];
  production_countries: SingleProductionCountryType[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SingleLanguageType[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type SingleCollectionType = {
  backdrop_path: string;
  id: number;
  name: string;
  poster_path: string;
};

type SingleProductionCompanyType = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type SingleProductionCountryType = {
  iso_3166_1: string;
  name: string;
};

type SingleLanguageType = {
  english_name: string;
  iso_639_1: string;
  name: string;
};
