import { carouselMovie } from "@/lib/type";
import { Rating } from "./Rating";

export const MovieItem = ({ movieItem }: { movieItem: carouselMovie }) => {
  return (
    <div
      className={`bg-[url(${movieItem.image})] bg-cover w-full h-150 bg-center flex items-center`}
    >
      <div className="w-101 h-66 ml-35">
        <p className="text-[16px] ">Now Playing:</p>
        <h1 className="text-4xl">{movieItem.name}</h1>
        <Rating rating={rating} starW={28}></Rating>
        <p>{movieItem.desc}</p>
      </div>
    </div>
  );
};
