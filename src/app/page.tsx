"use client";

import { HomePage } from "@/components/skeleton/HomePage";
import { SectionOne } from "@/features/SectionOne";
import { SectionTwo } from "@/components/SectionTwo";
import { movieArr, movieCategoryType, movieType } from "@/lib/type";
import { axiosInstance } from "@/lib/utils";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { MovieCategories } from "@/features/MovieCategories";

export default function Home() {
  // Feature bolgon deeree useSWr ashiglah
// Zoloogin yambii site aslaaa
  return (
    <div className="">
      <SectionOne />
      <MovieCategories />
    </div>
  );
}
{
  /* <SectionTwo
          splice={10}
          text={"popular"}
          imgH={"340px"}
          width={230}
          height={439}
          title={"Popular"}
          movies={data.results}
        /> */
}
{
  /* <SectionTwo
         splice={10}
          text={upcomingMovies}
          imgH={"340px"}
          width={230}
          height={439}
          title={"Upcoming"}
          movies={data.results}
        />
        <SectionTwo
         splice={10}
          text={topRated}
          imgH={"340px"}
          width={230}
          height={439}
          title={"Top Rated"}
          movies={data.results}
        /> */
}
