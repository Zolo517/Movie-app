import { movieType } from "@/lib/type";
import { MovieCard } from "./MovieCard";
import * as constants from "@/lib/constants";

export const FilteredMovies = ({

  width,
  height,
  imgH,
}: {
  imgH: string;
  width: string;
  height: string;
}) => {
  return (
    <div>
      <h4 className="text-[20px] font-semibold mb-8">
        81 titles in “Animation”
      </h4>
      <div className="flex flex-wrap gap-8">
        {constants.filters.map((movie, index) => {
          return (
            <MovieCard
              img={imgH}
              w={width}
              h={height}
              key={index + Math.random()}
              movie={movie}
            />
          );
        })}
      </div>
    </div>
  );
};
