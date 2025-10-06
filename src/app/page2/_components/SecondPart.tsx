import * as constants from "@/lib/constants";
import { BadgeButton } from "./BadgeButton";

export const SecondPart = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="gap-3 flex">
        <BadgeButton>{"Fairy Tale"}</BadgeButton>
        <BadgeButton>{"Pop musical"}</BadgeButton>
        <BadgeButton>{"Fantasy"}</BadgeButton>
        <BadgeButton>{"Musical"}</BadgeButton>
        <BadgeButton>{"Romance"}</BadgeButton>
      </div>
      <p className="text-base">
        Elphaba, a misunderstood young woman because of her green skin, and
        Glinda, a popular girl, become friends at Shiz University in the Land of
        Oz. After an encounter with the Wonderful Wizard of Oz, their friendship
        reaches a crossroads.{" "}
      </p>
      <div className="gap-1">
        {constants.mainPeople.map((person, index) => {
          return (
            <div key={index + Math.random()}>
              <div className="flex gap-[53px] ">
                <h4 className="w-16 h-7 text-base font-bold">{person.title}</h4>
                <p className="text-base">{person.name}</p>
              </div>
              {person.title === "Stars" ? (
                ""
              ) : (
                <div className="border-[0.5px] border-[#E4E4E7] w-full my-1"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
