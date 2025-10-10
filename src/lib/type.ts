export type carouselMovie = {
  image: string;
  rating: number;
  name: string;
  desc: string;
};
export type movieType = {
  genres: genresType[];
  title: string;
  poster_path: string;
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  runtime: number;
};
export type movieCategoryType = {
  category: string;
  movies: () => void;
};
export type ratingType = {
  rating: number;

  large: string;
  small: string;
};
export type genresType = {
  name: string;
  id: number;
};

export type creditsType = {
  cast: castType[];
  crew: crewType[];
};

export type crew2Type = {
  director: string
  writer: string
}

export type castType = {
  id: number;
  job: string;
  name: string;
};

export type crewType = {
  id: number;
  job: string;
  name: string;
};
