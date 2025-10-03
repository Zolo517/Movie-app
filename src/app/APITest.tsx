import { APICard } from "./APICard";
import { Navbar } from "@/components/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";

export const APITest = () => {
  const [movieData, setMovieData] = useState<{}>({});

  const setMovieDataHandler = (data:{}) => {
    setMovieData(data);
  }

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjkwMWUzNTJlOTFkMmU1OTcyNThhYzU1ZDM2ZmZmMiIsIm5iZiI6MTc1OTA1MDY1Ny4zMjUsInN1YiI6IjY4ZDhmYmExOTBlY2QwMDlhYWI5YTFmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MZd1y3tFFfxvZlPqBNIqCDw0G_aMwCZzWxffwENlwT8`,
        },
      })
      .then((response) => {
        console.log(response.data);
        // setMovieData(prev => prev = {...response.data});
        // setMovieDataHandler(response.data);
      });
  }, []);

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
        {movieData.results &&
          movieData.results.map((movie) => {
            return <APITest key={movie.id} movie={movie} />;
          })}
      </div>
    </div>
  );
};
