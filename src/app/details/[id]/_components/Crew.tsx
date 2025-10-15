import { castType, crewType } from "@/lib/type";

export const Crew = ({
  h4,
  cast,
  writer,
  director,
}: {
  writer?: crewType[];
  director?: crewType[];
  h4: string;
  cast?: castType[];
}) => {
  return (
    <div>
      <div className="flex gap-[53px] ">
        <h4 className="w-16 h-7 text-base font-bold">{h4}</h4>
        <div className="flex  gap-4">
          {h4 === "Stars"
            ? cast?.splice(0, 4).map((c, index) => {
                return (
                  <p key={index + Math.random()} className="text-base">
                    {c.name}
                  </p>
                );
              })
            : ""}
          {h4 === "Director"
            ? director?.map((d, index) => (
                <p key={index + Math.random()} className="text-base">
                  {d.name}
                </p>
              ))
            : ""}
          {h4 === "Writers"
            ? writer?.splice(0, 3).map((w, index) => (
                <p key={index + Math.random()} className="text-base">
                  {w.name}
                </p>
              ))
            : ""}
        </div>
      </div>

      <div className="w-full my-4 border-[0.5px] "></div>
    </div>
  );
};
