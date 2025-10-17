import { axiosInstance } from "@/lib/utils";
import { Header } from "../genresfilter/_features/Header";
import { MovieGenres } from "../genresfilter/_features/MovieGenres";

import { genresType, page3Props } from "@/lib/type";
import { Results } from "./_components/Results";
import useSWR from "swr";
import { getSearchedMovies } from "@/lib/services";

export const Page = ({ searchParams }: page3Props) => {

  // const params = await searchParams;
  // const { genreId, genreName, page } = params;
  // const getGenreId = async () => {
  //   const response = await axiosInstance.get(`/genre/movie/list?language=en`);
  //   return response.data.genres;
  // };

  // const genreid: genresType[] = await getGenreId();

  // const { data, error, isLoading } = useSWR(
  //   `/search/movie?query=${inputValue}&language=en-US&page=${1}`,
  //   () => getSearchedMovies(inputValue)
  // );

  // console.log("inputValue data", data);

  // //search page link href /searchpage?value=${inputValue}

  // return (
  //   <div className="px-20 pt-13 pb-8 flex flex-col gap-8">
  //     <Header />
  //     <div className="flex ">
  //       <MovieGenres genres={genreid} />
  //       <div className="border-[1px] mx-4"></div>
  //       <Results />
  //     </div>
  //   </div>
  // );
};
