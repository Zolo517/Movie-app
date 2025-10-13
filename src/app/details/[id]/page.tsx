import axios from "axios";

import { idType, movieType } from "@/lib/type";
import { ThirdPart } from "./_features/ThirdPart";
import { axiosInstance } from "@/lib/utils";
import { FirstPart } from "./_features/FirstPart";
import { SecondPart } from "./_features/SecondPart";

export default async function Page({ params }: idType) {
  const { id } = await params;
  const getMovies = async (id: string) => {
    const response = await axiosInstance.get(`/movie/${id}?language=en-US`);
    return response.data;
  };
  const movieDetail = await getMovies(id);
  console.log(movieDetail);

  const getCredits = async (id: string, plus: string) => {
    const response = await axiosInstance.get(
      `/movie/${id}${plus}?language=en-US`
    );

    return response.data;
  };
  const creditsInfo = await getCredits(id, "/credits");
  console.log(creditsInfo, "creditsinfo");

  const getSimilar = async (id: string, plus: string) => {
    const response = await axiosInstance.get(
      `/movie/${id}${plus}?language=en-US&page=1`
    );

    return response.data;
  };
  const similarMovie = await getSimilar(id, "/similar");
  console.log(similarMovie, "credits");

  return (
    <div className="px-45 pt-13 pb-[113px]">
      <FirstPart movieInfo={movieDetail}></FirstPart>
      <SecondPart movie={movieDetail} info={creditsInfo}></SecondPart>
      <ThirdPart movies={similarMovie.results}></ThirdPart>
    </div>
  );
}
