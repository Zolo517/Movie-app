import * as constants from "@/lib/constants";
import { BadgeButton } from "./BadgeButton";
import { creditsType, movieType } from "@/lib/type";
import { Buttons } from "./Buttons";
import { Crew } from "./Crew";

export const SecondPart = ({
  movie,
  info,
}: {
  movie: movieType;
  info: creditsType;
}) => {
  const { cast, crew } = info;

  crew.filter((c) => c.job.includes("Director"));
  crew.filter((c) => c.job.includes("Writer"));

  return (
    <div className="flex flex-col gap-5">
      <Buttons genres={movie.genres}></Buttons>
      <p className="text-base">{movie.overview}</p>
      <div className="gap-1">
        <Crew h4={"Director"} crew={crew}></Crew>
        <Crew h4={"Writers"} crew={crew}></Crew>
        <Crew h4={"Stars"} cast={cast} crew={crew}></Crew>
      </div>
    </div>
  );
};
