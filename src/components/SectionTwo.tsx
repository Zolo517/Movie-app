import { MovieCard } from "./MovieCard";

export const SectionTwo = (props: { name: string }) => {
  const { name } = props;
  const movieNames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="px-20 w-full gap-8 mt-[52px]">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <button className="flex p-4 gap-2 items-center">
          <p className="text-[14px] font-medium">See more</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M1.33301 5.99998H10.6663M10.6663 5.99998L5.99967 1.33331M10.6663 5.99998L5.99967 10.6666"
              stroke="#18181B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-wrap gap-8">
        {movieNames.map((movieName, index) => {
          return (
            <MovieCard key={index + Math.random()} movieName={movieName} />
          );
        })}
      </div>
    </div>
  );
};
