import { carouselMovie } from "@/lib/type";
import { Rating } from "./Rating";

export const MovieItem = ({ movieItem }: { movieItem: carouselMovie }) => {
  return (
    <div
      style={{
        backgroundImage: `url('${movieItem.image}')`,
      }}
      className={
        movieItem.image === "/gladiator.png"
          ? "bg-cover w-full h-150 bg-start flex items-center"
          : "bg-cover w-full h-150 bg-center flex items-center"
      }
    >
      <div className="w-101 h-66 ml-35">
        <p className="text-[16px] ">Now Playing:</p>
        <h1 className="text-4xl">{movieItem.name}</h1>

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
            rating={movieItem.rating}
            large={"18px"}
            small={"16px"}
          ></Rating>
        </div>
        <p>{movieItem.desc}</p>
      </div>
    </div>
  );
};
//`bg-cover w-full h-150 bg-center flex items-center`
