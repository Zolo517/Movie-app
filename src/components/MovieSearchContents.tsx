"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { MovieSearchCard } from "./MovieSearchCard";
import { Input } from "./ui/input";
import { axiosInstance } from "@/lib/utils";
import useSWR from "swr";
import { movieType } from "@/lib/type";

export const MovieSearchContents = ({
  data,
  value,
  text,
  isLoading,

  error,
}: {
  error: any;
  isLoading: any;
  data: movieType[];
  value: string;
  text?: any;
}) => {
  return (
    <div className="p-3">
      {data &&
        data?.splice(0, 5).map((movie: movieType) => {
          console.log(movie, "ene search hiisen nernii kino");
          return <MovieSearchCard movie={movie} key={movie.id} />;
        })}
      <div className="border-[0.5px] border-[#E4E4E7] my-2"></div>

      <p>See all results for "{value}"</p>
    </div>
  );
};
