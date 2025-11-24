"use client";

import _ from "lodash";
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
import { Spinner } from "./ui/spinner";

export const MovieSearchBar = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const { data, error, isLoading } = useSWR(
    `/search/movie?query=${inputValue}&language=en-US&page=${1}`,
    () => getSearchedMovies(inputValue)
  );
  console.log("Datas", data);
  const handleOnChange = (e: any) => setInputValue(e.target.value);
  const debouncedFunction = _.debounce(handleOnChange, 1000);

  if (error) {
    return <div>"Something went wrong"</div>;
  }
  if (isLoading) {
    return (
      <div className="w-[379px] flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <Popover>
      <PopoverTrigger>
        <InputGroup className="w-[379px]">
          <InputGroupInput
            // value={inputValue}
            onKeyDown={(e) => e.key === "Enter"}
            onChange={debouncedFunction}
            placeholder="Search..."
          />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
      </PopoverTrigger>

      <PopoverContent className="w-[577px]">
        <MovieSearchContents
          value={inputValue}
          data={data}
          error={error}
          isLoading={isLoading}
        />
      </PopoverContent>
    </Popover>
  );
};
