"use client";

import { filtersType, genresType, movieType } from "@/lib/type";
import { axiosInstance } from "@/lib/utils";
import { Pagi } from "./Pagi";
import { MovieCard } from "@/components/MovieCard";
import { useState } from "react";
import useSWR from "swr";
import { getFilteredMovies } from "@/lib/services";

export const FilteredMovies = ({ data }: { data: any }) => {
  return (
    <div>
      <h4 className="text-[20px] font-semibold mb-8">
        {data} titles in "{data}"
      </h4>
      <div className="flex flex-wrap gap-8">
        {/* {data.results &&
          data.results?.splice(0, 12).map((movie: movieType, index: number) => {
            return (
              <MovieCard
                img={"244px"}
                w={165}
                h={331}
                h3={"16px"}
                key={index + Math.random()}
                movie={movie}
              />
            );
          })} */}
      </div>
      {/* <Pagi total_pages={data.total_pages} /> */}
    </div>
  );
};
// total_results={}
