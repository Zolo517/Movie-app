export type carouselMovie = {
  image: string;
  rating: number;
  name: string;
  desc: string;
};
export type movieType = {
  title: string;
  image: string;
  rating: number;
};
export type movieCategoryType = {
  category: string;
  movies: movieType[];
};
export type ratingType = {
  rating: number;

  large: string;
  small: string;
};
