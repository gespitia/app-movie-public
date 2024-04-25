export interface MovieResponseInterface {
  page:          number;
  results:       MovieInterface[];
  total_pages:   number;
  total_results: number;
}

export interface MovieInterface {
  adult:             boolean;
  backdrop_path:     string;
  genre_ids:         number[];
  id:                number;
  original_language: OriginalLanguageEnum;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  release_date:      Date;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

export enum OriginalLanguageEnum {
  En = "en",
  Fr = "fr",
  Ja = "ja",
  Ko = "ko",
}

export interface MovieDetailInterface {
  adult:                 boolean;
  backdrop_path:         string;
  belongs_to_collection: null;
  budget:                number;
  genres:                Genre[];
  homepage:              string;
  id:                    number;
  imdb_id:               string;
  origin_country:        string[];
  original_language:     string;
  original_title:        string;
  overview:              string;
  popularity:            number;
  poster_path:           string;
  production_companies:  ProductionCompanyInterface[];
  production_countries:  ProductionCountryInterface[];
  release_date:          Date;
  revenue:               number;
  runtime:               number;
  spoken_languages:      SpokenLanguageInterface[];
  status:                string;
  tagline:               string;
  title:                 string;
  video:                 boolean;
  vote_average:          number;
  vote_count:            number;
}

export interface Genre {
  id:   number;
  name: string;
}

export interface ProductionCompanyInterface {
  id:             number;
  logo_path:      null | string;
  name:           string;
  origin_country: string;
}

export interface ProductionCountryInterface {
  iso_3166_1: string;
  name:       string;
}

export interface SpokenLanguageInterface {
  english_name: string;
  iso_639_1:    string;
  name:         string;
}

