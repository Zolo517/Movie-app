import { carouselMovie, movieType } from "@/lib/type";
import { Rating } from "./Rating";
import { TraillerButton } from "./TrailerButton";

export const MovieItem = ({ movie }: { movie: movieType }) => {
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
      }}
      className={
        movie.backdrop_path === "/gladiator.png"
          ? "bg-cover w-full h-150 bg-start flex items-center text-[#FFF]"
          : "bg-cover w-full h-150 bg-center flex items-center text-[#FFF]"
      }
    >
      <div className="w-101 h-66 ml-35">
        <p className="text-[16px] ">Now Playing:</p>
        <h1 className="text-4xl font-bold">{movie.title}</h1>

        <div className="flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M14.0007 2.33325L17.6057 9.63659L25.6673 10.8149L19.834 16.4966L21.2107 24.5233L14.0007 20.7316L6.79065 24.5233L8.16732 16.4966L2.33398 10.8149L10.3957 9.63659L14.0007 2.33325Z"
              fill="#FDE047"
              stroke="#FDE047"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Rating
            rating={movie.vote_average}
            large={"18px"}
            small={"16px"}
          ></Rating>
        </div>
        <p className="w-[302px] my-4 text-[12px]">{movie.overview}</p>

        <TraillerButton id={movie.id} />
      </div>
    </div>
  );
};
//`bg-cover w-full h-150 bg-center flex items-center`
