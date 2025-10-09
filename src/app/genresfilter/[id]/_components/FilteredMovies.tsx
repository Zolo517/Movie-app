import { genresType, movieType } from "@/lib/type";
import { MovieCard } from "../../../../components/MovieCard";
import * as constants from "@/lib/constants";
import { axiosInstance } from "@/lib/utils";

export const FilteredMovies = async ({
  genres,
  id,
}: {
  genres: genresType[];
  id: string;
}) => {
  const getMovies = async (id: string) => {
    const response = await axiosInstance.get(
      ` /discover/movie?language=en&with_genres=${id}&page=${1}`
    );
    return response.data;
  };

  const filteredMovies:movieType[] = await getMovies(id);
  console.log(filteredMovies, "filtered");

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
    </div>
  );
};
