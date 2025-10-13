import { genresType, movieType } from "@/lib/type";
import { axiosInstance } from "@/lib/utils";
import { Pagi } from "./Pagi";
import { MovieCard } from "@/components/MovieCard";

export const FilteredMovies = async ({
  genres,
  id,
  name,
}: {
  name: string;
  genres: genresType[];
  id: string;
}) => {
  // const getFilteredMovies = async () => {
  //   const response = await axiosInstance.get(
  //     ` /discover/movie?language=en&with_genres=${id}&page=1`
  //   );
  //   return response.data.results;
  // };

  // const filteredMovies = await getFilteredMovies();
  // console.log(filteredMovies, "filtered");
  return (
    <div>
      <h4 className="text-[20px] font-semibold mb-8">
        {} titles in "{name}"
      </h4>
      <div className="flex flex-wrap gap-8">
        {/* {filteredMovies
          ?.splice(0, 10)
          .map((movie: movieType, index: number) => {
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
          })} */}
      </div>
      <Pagi></Pagi>
    </div>
  );
};
