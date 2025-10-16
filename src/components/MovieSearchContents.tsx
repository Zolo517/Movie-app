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

export const MovieSearchContents = ({ value }: { value: string }) => {
  const fetchData = async () => {
    const res = await axiosInstance.get(
      `/search/movie?query=${value}&language=en-US&page=${1}`
    );
    return res.data;
  };
  const { data, error, isLoading } = useSWR(
    `/search/movie?query=${value}&language=en-US&page=${1}`,
    () => fetchData()
  );


  return (
    <div className="p-3">
      {datas.title.includes(value) &&
        datas?.map((movie: movieType) => {
          return <MovieSearchCard movie={movie} />;
        })}
      <div className="border-[0.5px] border-[#E4E4E7] my-2"></div>

      <p>See all results for "{value}"</p>
    </div>
  );
};
