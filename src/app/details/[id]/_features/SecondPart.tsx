import { creditsType, movieType } from "@/lib/type";
import { Buttons } from "../_components/Buttons";
import { Crew } from "../_components/Crew";

export const SecondPart = ({
  movie,
  info,
}: {
  movie: movieType;
  info: creditsType;
}) => {
  const { cast, crew } = info;

  const director = crew.filter((c) => c.department.includes("Directing"));
  const writer = crew.filter((c) => c.department.includes("Writing"));

  return (
    <div className="flex flex-col gap-5">
      <Buttons genres={movie.genres}></Buttons>
      <p className="text-base">{movie.overview}</p>
      <div className="gap-1">
        <Crew h4={"Director"} director={director}></Crew>
        <Crew h4={"Writers"} writer={writer}></Crew>
        <Crew h4={"Stars"} cast={cast}></Crew>
      </div>
    </div>
  );
};
