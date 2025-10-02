import * as constants from "@/lib/constants";
import { SectionTwo } from "./SectionTwo";

export const ThirdPart = () => {
  return (
    <div className="mt-8">
      {constants.moreLikeThis.map((like, index) => {
        return (
          <SectionTwo
            width={"190px"}
            height={"372px"}
            imgH={"281px"}
            title={like.category}
            movies={like.movies}
            key={index + Math.random()}
          />
        );
      })}
    </div>
  );
};
