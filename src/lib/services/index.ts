import { axiosInstance } from "../utils";

export const getTop_ratedMovies = async () => {
  const res = await axiosInstance.get(`/movie/top_rated?language=en-US&page=1`);
  return res.data.results;
};

export const getUpcomingMovies = async () => {
  const res = await axiosInstance.get(`/movie/upcoming?language=en-US&page=1`);
  return res.data.results;
};

export const getPopularMovies = async () => {
  const res = await axiosInstance.get(`/movie/popular?language=en-US&page=1`);
  return res.data.results;
};
export const getTrailer = async (id: number) => {
  const res = await axiosInstance.get(`/movie/${id}/videos?language=en-US`);
  return res.data.results;
};

export const getCarouselMovies = async () => {
  const res = await axiosInstance.get(
    `/movie/now_playing?language=en-US&page=1`
  );
  return res.data;
};
export const getSearchedMovies = async (inputValue: string) => {
  const res = await axiosInstance.get(
    `/search/movie?query=${inputValue}&language=en-US&page=${1}`
  );
  return res.data.results;
};
export const getSimilarMovies = async (id: string) => {
  const res = await axiosInstance.get(
    `/movie/${id}/similar?language=en-US&page=1`
  );
  return res.data.results;
};
export const getMoviesByCategory = async (id: string) => {
  const res = await axiosInstance.get(`/movie/${id}?language=en-US&page=1`);
  return res.data;
};
export const getGenres = async ()=>{
  const res = await axiosInstance.get(`/genre/movie/list?language=en`)
  return res.data.genres
}
export const getFilteredMovies = async(page: number, genreIds: string)=>{
  const res = await axiosInstance.get(`/discover/movie?language=en&with_genres=${genreIds}&page=${page}`)
  res.data
}