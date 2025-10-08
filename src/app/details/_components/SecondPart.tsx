import * as constants from "@/lib/constants";
import { BadgeButton } from "./BadgeButton";
import { movieType } from "@/lib/type";
import { Buttons } from "./Buttons";
import { Crew } from "./Crew";

export const SecondPart = ({
  movie,
  info,
}: {
  movie: movieType;
  info: movieType;
}) => {
  return (
    <div className="flex flex-col gap-5">
      <Buttons genres={movie.genres}></Buttons>
      <p className="text-base">{movie.overview}</p>
      <div className="gap-1">
        <Crew></Crew>
        <Crew></Crew>
        <Crew></Crew>
      </div>
    </div>
  );
};
