import { MovieCard } from "@/components/MovieCard";
import { movieType } from "@/lib/type";
import Link from "next/link";

export const CategoryMovies = ({
  movies,
  title,
}: {
  movies: movieType[];
  title: string;
}) => {
  return (
    <div className="">
      <div className="flex justify-between items-center ">
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-8 mt-8">
        {movies?.splice(0, 20).map((movie, index) => {
          return (
            <MovieCard
              img={"340px"}
              w={230}
              h={439}
              key={index + Math.random()}
              movie={movie}
            />
          );
        })}
      </div>
    </div>
  );
};
