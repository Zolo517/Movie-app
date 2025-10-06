import { BadgeButton } from "./BadgeButton";
import Image from "next/image";
import { Rating } from "../../../components/Rating";

import { SecondPart } from "./SecondPart";
import { ThirdPart } from "./ThirdPart";
import { movieType } from "@/lib/type";
import { FirstPart } from "./FirstPart";

export const Page2Body = ({isLoading}) => {
  return (
    <div className="px-45 pt-13 pb-[113px]">
      <FirstPart></FirstPart>
      <SecondPart></SecondPart>
      <ThirdPart></ThirdPart>
    </div>
  );
};
