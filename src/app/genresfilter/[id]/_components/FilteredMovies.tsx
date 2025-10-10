import { genresType, movieType } from "@/lib/type";
import { axiosInstance } from "@/lib/utils";
import { Pagi } from "./Pagi";
import { MovieCard } from "@/components/MovieCard";

export const FilteredMovies = async ({
  genres,
  id,
  filteredMovies,
}: {
  genres: genresType[];
  id: string;
  filteredMovies: movieType[];
}) => {
  return (
    <div>
      <h4 className="text-[20px] font-semibold mb-8">
        {} titles in “{genres[2].name}”
      </h4>
      <div className="flex flex-wrap gap-8">
        {filteredMovies.map((movie: movieType, index: number) => {
          return (
            <MovieCard
              isLoading={false}
              img={"281px"}
              w={190}
              h={372}
              key={index + Math.random()}
              movie={movie}
            />
          );
        })}
      </div>
      <Pagi></Pagi>
    </div>
  );
};
