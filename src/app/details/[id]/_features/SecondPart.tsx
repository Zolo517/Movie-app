import { creditsType, movieType } from "@/lib/type";
import { Buttons } from "../_components/Buttons";
import { Crew } from "../_components/Crew";

export const SecondPart = ({ info }: { info: creditsType }) => {
  const { cast, crew } = info;

  const director = crew.filter((c) => c.department.includes("Directing"));
  const writer = crew.filter((c) => c.department.includes("Writing"));

  return (
    <div className="gap-1 mt-5">
      <Crew h4={"Director"} director={director}></Crew>
      <Crew h4={"Writers"} writer={writer}></Crew>
      <Crew h4={"Stars"} cast={cast}></Crew>
    </div>
  );
};
