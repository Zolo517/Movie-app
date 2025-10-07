import * as constants from "@/lib/constants";
import { BadgeButton } from "./BadgeButton";
import { movieType } from "@/lib/type";

export const SecondPart = () => {
  return (
    <div className="flex flex-col gap-5">
     
      <p className="text-base"></p>
      <div className="gap-1">
        {/* {creditsInfo.map((person: string, index: number) => {
          return (
            <div key={index + Math.random()}>
              <div className="flex gap-[53px] ">
                <h4 className="w-16 h-7 text-base font-bold">{person.title}</h4>
                <p className="text-base">{person.name}</p>
              </div>
              {person.title.length === 2 ? (
                ""
              ) : (
                <div className="border-[0.5px] border-[#E4E4E7] w-full my-1"></div>
              )}
            </div>
          );
        })} */}
      </div>
    </div>
  );
};
