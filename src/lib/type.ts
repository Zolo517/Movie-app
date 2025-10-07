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
};
