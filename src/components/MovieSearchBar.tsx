"use client";

import { MovieSearchCard } from "./MovieSearchCard";
import { Input } from "./ui/input";
import { MovieSearchContents } from "./MovieSearchContents";
import { useState } from "react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { SearchIcon } from "lucide-react";
import { axiosInstance } from "@/lib/utils";
import useSWR from "swr";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { getSearchedMovies } from "@/lib/services";

export const MovieSearchBar = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const { data, error, isLoading } = useSWR(
    `/search/movie?query=${inputValue}&language=en-US&page=${1}`,
    () => getSearchedMovies(inputValue)
  );
  if(error){
   return  <div>"Something went wrong"</div>
  }
  if(isLoading){
    return <div className="w-[379px]"></div>
  }


  return (
    <div>
      <InputGroup className="w-[379px]">
        <InputGroupInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search..."
        />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>

      {inputValue.length === 0 ? (
        ""
      ) : (
        <MovieSearchContents value={inputValue} data={data} error={error} isLoading={isLoading}/>
      )}
    </div>
  );
};
