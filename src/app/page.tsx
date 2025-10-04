"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionOne } from "@/components/SectionOne";
import { Footer } from "@/components/Footer";
import { SectionTwo } from "@/components/SectionTwo";
import { BadgeButton } from "@/components/BadgeButton";
import { MovieSearchCard } from "@/components/MovieSearchCard";
import * as constants from "@/lib/constants";
import { APITest } from "./APITest";
export default function Home() {
  return (
    <div className="">
      <SectionOne movieItems={constants.movieItems}></SectionOne>
      <div className="px-20 w-full gap-8 mt-[52px]">
        {constants.movieCategories.map((movieCategory, index) => {
          return (
            <SectionTwo
              imgH={"340px"}
              width={"230px"}
              height={"439px"}
              title={movieCategory.category}
              movies={movieCategory.movies}
              key={index + Math.random()}
            />
          );
        })}
      </div>
    </div>
  );
}
