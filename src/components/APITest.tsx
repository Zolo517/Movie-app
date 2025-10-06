import { APICard } from "../components/APICard";
import { Navigation } from "@/components/Navigation";

import axios from "axios";

export async function APITest() {
  const categories = ["popular", "upcoming", "top_rated"];

  const getUpComingMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${categories}?language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjkwMWUzNTJlOTFkMmU1OTcyNThhYzU1ZDM2ZmZmMiIsIm5iZiI6MTc1OTA1MDY1Ny4zMjUsInN1YiI6IjY4ZDhmYmExOTBlY2QwMDlhYWI5YTFmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MZd1y3tFFfxvZlPqBNIqCDw0G_aMwCZzWxffwENlwT8`,
        },
      }
    );
    return response.data;
  };
  const movieResults = await getUpComingMovies();


  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">Test</h3>
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
        {movieResults.results.map((movies) => {
          return (
            <APICard
              key={movies.id}
              img={movies.poster_path}
              score={movies.vote_average}
              title={movies.title}
            />
          );
        })}
      </div>
    </div>
  );
}
