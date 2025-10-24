import { filtersType, genresType, movieType } from "@/lib/type";
import { axiosInstance } from "@/lib/utils";
import { Pagi } from "./Pagi";
import { MovieCard } from "@/components/MovieCard";
import { useState } from "react";
import useSWR from "swr";
import { getFilteredMovies } from "@/lib/services";

export const FilteredMovies = async ({
  genres,
  genreName,
}: {
  genreName?: string;
  genres: string;
}) => {
  const [pages, setPages] = useState(1);
  const { data, error, isLoading } = useSWR(
    `/discover/movie?language=en&with_genres=${genres}&page=${pages}`,
    () => getFilteredMovies(pages, genres)
  );

  return (
    <div>
      <h4 className="text-[20px] font-semibold mb-8">
        {data} titles in "{genreName}"
      </h4>
      <div className="flex flex-wrap gap-8">
        {results &&
          results?.splice(0, 12).map((movie: movieType, index: number) => {
            return (
              <MovieCard
                img={"244px"}
                w={165}
                h={331}
                h3={"16px"}
                key={index + Math.random()}
                movie={movie}
              />
            );
          })}
      </div>
      <Pagi total_pages={total_pages} />
    </div>
  );
};
// total_results={}
