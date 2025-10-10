import { FilteredMovies } from "@/app/genresfilter/[id]/_components/FilteredMovies";
import { MovieCard } from "@/components/MovieCard";

import { genresType, movieType } from "@/lib/type";
import { axiosInstance } from "@/lib/utils";
import Link from "next/link";

export default async function Page3({
  params: { id },
}: {
  params: { id: string };
}) {
  const getGenreId = async () => {
    const response = await axiosInstance.get(`/genre/movie/list?language=en`);
    return response.data.genres;
  };

  const genreId = await getGenreId();
  console.log(genreId, "genriin id shhuuuu");

  const getMovies = async (id: string) => {
    const response = await axiosInstance.get(
      ` /discover/movie?language=en&with_genres=${id}&page=1`
    );
    return response.data.results;
  };

  const filteredMovies = await getMovies(id);
  console.log(filteredMovies, "filtered");

  return (
    <div className="px-20 pt-13 pb-8 flex flex-col gap-8">
      <h2 className="font-semibold text-3xl">Search Filter</h2>
      <div className="flex ">
        <div>
          <p className="font-semibold text-2xl ">Genres</p>
          <p className="text-[16px]"> See lists of movies by genre</p>
          <div className="flex flex-wrap  gap-4 w-[387px] mt-5">
            {" "}
            {genreId.map((genre: genresType, index: number) => {
              return (
                <Link
                  href={`/genresfilter/${genre.id}`}
                  key={index + Math.random()}
                  className="rounded-2xl  border-[0.1px]  justify-center items-center gap-2 text-[12px] font-semibold flex pl-[10px] pr-[4px] py-[2px]"
                >
                  <p>{genre.name}</p>
                  <svg
                    className="text-black dark:text-white "
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                  >
                    <path
                      d="M1 9L5 5L1 1"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="border-[1px] mx-4"></div>
        <FilteredMovies
          id={id}
          genres={genreId}
          filteredMovies={filteredMovies}
        />
      </div>
    </div>
  );
}
