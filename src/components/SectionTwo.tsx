import { movieType } from "@/lib/type";
import { MovieCard } from "./MovieCard";

export const SectionTwo = ({
  isLoading,
  movies,
  title,
  width,
  height,
  imgH,
}: {
  isLoading: boolean;
  imgH: string;
  title: string;
  width: string;
  height: string;
  movies: movieType[];
}) => {
  if (isLoading) {
    return (
      <div>
        <div className="flex justify-between items-center">
          <h3 className="w-[250px] h-8 bg-[#F4F4F5] rounded-3xl"></h3>
          <button className="flex p-4 gap-2 items-center bg-[#F4F4F5] rounded-3xl"></button>
        </div>

        <div className="flex flex-wrap gap-8">
          {movies.map((movie, index) => {
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
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <button className="flex p-4 gap-2 items-center">
          <p className="text-[14px] font-medium">See more</p>
          <svg
            className="text-black dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M1.33301 5.99998H10.6663M10.6663 5.99998L5.99967 1.33331M10.6663 5.99998L5.99967 10.6666"
              stroke="currentColor"
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-wrap gap-8">
        {movies.map((movie, index) => {
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
