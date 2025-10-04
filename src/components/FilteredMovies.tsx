import { movieType } from "@/lib/type";
import { MovieCard } from "./MovieCard";
import * as constants from "@/lib/constants";

export const FilteredMovies = () => {
  return (
    <div>
      <h4 className="text-[20px] font-semibold mb-8">
        81 titles in “Animation”
      </h4>
      <div className="flex flex-wrap gap-8">
        {constants.filters.map((movie, index) => {
          return (
            <MovieCard
              img={"281px"}
              w={"190px"}
              h={"372px"}
              key={index + Math.random()}
              movie={movie}
            />
          );
        })}
      </div>
    </div>
  );
};
