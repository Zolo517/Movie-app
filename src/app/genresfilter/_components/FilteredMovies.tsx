import { filtersType, genresType, movieType } from "@/lib/type";
import { axiosInstance } from "@/lib/utils";
import { Pagi } from "./Pagi";
import { MovieCard } from "@/components/MovieCard";

export const FilteredMovies = async ({
  filters,
  genreName,
  genreId,
}: {
  genreName: string;
  genreId: string;
  filters: filtersType;
}) => {
  const { results, total_results, total_pages } = filters;
  return (
    <div>
      <h4 className="text-[20px] font-semibold mb-8">
        {total_results} titles in "{genreName}"
      </h4>
      <div className="flex flex-wrap gap-8">
        {results?.splice(0, 12).map((movie: movieType, index: number) => {
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
      {/* <Pagi genreId={genreId} genreName={genreName} total_pages={total_pages} /> */}
    </div>
  );
};
