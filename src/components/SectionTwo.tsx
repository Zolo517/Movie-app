import Link from "next/link";
import { genresType, movieType } from "@/lib/type";
import { MovieCard } from "@/components/MovieCard";

export function SectionTwo({
  splice,
  movies,

  width,
  height,
  imgH,

}: {
  splice: number;

  imgH: string;

  width: number;
  height: number;
  movies: movieType[];
}) {
  return (


      <div className="flex flex-wrap gap-8 ">
        {movies?.splice(0, splice).map((movie, index) => {
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
   
  );
}
