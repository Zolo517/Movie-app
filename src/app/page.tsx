import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionOne } from "@/components/SectionOne";
import { Footer } from "@/components/Footer";
import { SectionTwo } from "@/components/SectionTwo";
import { MovieSearchCard } from "@/components/MovieSearchCard";
import * as constants from "@/lib/constants";
import axios from "axios";
import { movieCategoryType, movieType } from "@/lib/type";

export default async function Home() {
  const getMovies = async (category: string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjkwMWUzNTJlOTFkMmU1OTcyNThhYzU1ZDM2ZmZmMiIsIm5iZiI6MTc1OTA1MDY1Ny4zMjUsInN1YiI6IjY4ZDhmYmExOTBlY2QwMDlhYWI5YTFmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MZd1y3tFFfxvZlPqBNIqCDw0G_aMwCZzWxffwENlwT8`,
        },
      }
    );

    return response.data.results;
  };
  const popularMovies = await getMovies("popular");
  const upcomingMovies = await getMovies("upcoming");
  const topRatedMovies = await getMovies("top_rated");
  const carouselMovies = await getMovies("now_playing");

  return (
    <div className="">
      <SectionOne movies={carouselMovies} isLoading={false}></SectionOne>
      <div className="px-20 w-full gap-8 mt-[52px]">
        <SectionTwo
          isLoading={false}
          imgH={"340px"}
          width={"230px"}
          height={"439px"}
          title={"Popular"}
          movies={popularMovies}
        />
        <div className="mt-8">
          <SectionTwo
            isLoading={false}
            imgH={"340px"}
            width={"230px"}
            height={"439px"}
            title={"Upcoming"}
            movies={upcomingMovies}
          />
        </div>

        <div className="mt-8">
          <SectionTwo
            isLoading={false}
            imgH={"340px"}
            width={"230px"}
            height={"439px"}
            title={"Top Rated"}
            movies={topRatedMovies}
          />
        </div>
      </div>
    </div>
  );
}
