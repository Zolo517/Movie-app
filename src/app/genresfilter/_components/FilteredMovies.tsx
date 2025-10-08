import { movieType } from "@/lib/type";
import { MovieCard } from "../../../components/MovieCard";
import * as constants from "@/lib/constants";

export const FilteredMovies = ({
  filteredMovies,
}: {
  filteredMovies: movieType[];
}) => {
  return (
    <div>
      <h4 className="text-[20px] font-semibold mb-8">
        81 titles in “Animation”
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
    </div>
  );
};
