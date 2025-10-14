"use client";

import { HomePage } from "@/components/skeleton/HomePage";
import { SectionOne } from "@/features/SectionOne";
import { SectionTwo } from "@/features/SectionTwo";
import { movieArr, movieCategoryType, movieType } from "@/lib/type";
import { axiosInstance } from "@/lib/utils";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function Home() {
  const fetchData = async (category: string) => {
    const res = await axiosInstance.get(
      `/movie/${category}?language=en-US&page=1`
    );
    return res.data;
  };
  let category = "now_playing";

  const { data, error, isLoading } = useSWR(category, () =>
    fetchData(category)
  );
  console.log("data chin bnooo");
  console.log(data);

  if (error) {
    <div>Something went wrong</div>;
  }
  if (isLoading) {
    return <HomePage />;
  }
  return (
    <div className="">
      <SectionOne movies={data.results} isLoading={false} />
      <div className="px-20 w-full gap-8 mt-[52px]">
        {/* <SectionTwo
          text={popularMovies}
          imgH={"340px"}
          width={230}
          height={439}
          title={"Popular"}
          movies={data.results}
        />
        <SectionTwo
          text={upcomingMovies}
          imgH={"340px"}
          width={230}
          height={439}
          title={"Upcoming"}
          movies={data.results}
        />
        <SectionTwo
          text={topRated}
          imgH={"340px"}
          width={230}
          height={439}
          title={"Top Rated"}
          movies={data.results}
        /> */}
      </div>
    </div>
  );
}
