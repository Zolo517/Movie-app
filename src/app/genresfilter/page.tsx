import { FilteredMovies } from "@/app/genresfilter/_components/FilteredMovies";
import { genresType, movieType, page3Props } from "@/lib/type";
import { axiosInstance } from "@/lib/utils";
import Link from "next/link";
import { Header } from "./_features/Header";
import { MovieGenres } from "./_features/MovieGenres";


export default async function Page3({ searchParams }: page3Props) {
  const params = await searchParams;
  const { genreId, genreName, page } = params;
  const getGenreId = async () => {
    const response = await axiosInstance.get(`/genre/movie/list?language=en`);
    return response.data.genres;
  };

  const genreid:genresType[] = await getGenreId();
  console.log(genreId, "genriin id shhuuuu");

  const getFilteredMovies = async () => {
    const response = await axiosInstance.get(
      `/discover/movie?language=en&with_genres=${genreId}&page=1`
    );
    return response.data.results;
  };

  const filteredMovies = await getFilteredMovies();
  console.log(filteredMovies, "filtered");

  return (
    <div className="px-20 pt-13 pb-8 flex flex-col gap-8">
      <Header />
      <div className="flex ">
        <MovieGenres genres={genreid} />
        <div className="border-[1px] mx-4"></div>
        <FilteredMovies filters={filteredMovies} genreName={genreName} />
      </div>
    </div>
  );
}
