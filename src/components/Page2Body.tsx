import { BadgeButton } from "@/components/BadgeButton";
import Image from "next/image";
import { Rating } from "./Rating";
import { FirstPart } from "./FirstPart";
import { SecondPart } from "./SecondPart";
import { ThirdPart } from "./ThirdPart";

export const Page2Body = () => {
  return (
    <div className="px-45 pt-13 pb-[113px]">
      <FirstPart></FirstPart>
      <SecondPart></SecondPart>
      <ThirdPart></ThirdPart>
    </div>
  );
};
