import axios from "axios";

import { movieType } from "@/lib/type";
import { FirstPart } from "../_components/FirstPart";
import { SecondPart } from "../_components/SecondPart";
import { ThirdPart } from "../_components/ThirdPart";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const getMovies = async (id: string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjkwMWUzNTJlOTFkMmU1OTcyNThhYzU1ZDM2ZmZmMiIsIm5iZiI6MTc1OTA1MDY1Ny4zMjUsInN1YiI6IjY4ZDhmYmExOTBlY2QwMDlhYWI5YTFmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MZd1y3tFFfxvZlPqBNIqCDw0G_aMwCZzWxffwENlwT8`,
        },
      }
    );

    return response.data;
  };

  const movieDetail = await getMovies(id);
  console.log(movieDetail);

  const getCredits = async (id: string, plus: string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}${plus}?language=en-US`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjkwMWUzNTJlOTFkMmU1OTcyNThhYzU1ZDM2ZmZmMiIsIm5iZiI6MTc1OTA1MDY1Ny4zMjUsInN1YiI6IjY4ZDhmYmExOTBlY2QwMDlhYWI5YTFmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MZd1y3tFFfxvZlPqBNIqCDw0G_aMwCZzWxffwENlwT8`,
        },
      }
    );

    return response.data;
  };
  const creditsInfo = await getCredits(id, "/credits");
  console.log(creditsInfo, "credits");

  return (
    <div className="px-45 pt-13 pb-[113px]">
      <FirstPart movieInfo={movieDetail}></FirstPart>
      <SecondPart movie={movieDetail} info={creditsInfo}></SecondPart>
      <ThirdPart></ThirdPart>
    </div>
  );
}
