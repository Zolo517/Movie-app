import { PopularMovies } from "@/components/PopularMovies";
import { TopRatedMovies } from "@/components/TopRatedMovies";
import { UpcomingMovies } from "@/components/UpcomingMovies";

export const MovieCategories = () => {
  return (
    <div className="px-20 w-full gap-8 mt-[52px]">
      <PopularMovies />
      <UpcomingMovies />
      <TopRatedMovies />
    </div>
  );
};
