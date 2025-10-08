import { castType, crewType } from "@/lib/type";

export const Crew = ({
  h4,
  crew,
  cast,
}: {
  h4: string;
  crew: crewType[];
  cast?: castType[];
}) => {
  return (
    <div>
      <div className="flex gap-[53px] ">
        <h4 className="w-16 h-7 text-base font-bold">{h4}</h4>
        <div className="flex  gap-4">
          {cast?.splice(0, 4).map((c, index) => {
            return (
              <p key={index + Math.random()} className="text-base">
                {c.name}
              </p>
            );
          })}
        </div>
      </div>
      {h4 !== "Stars" ? (
        <div className="w-full my-4 border-[0.5px] "></div>
      ) : (
        ""
      )}
    </div>
  );
};
