"use client";
import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "./ui/dropdown-menu";
import { MovieSearchCard } from "./MovieSearchCard";
import { Input } from "./ui/input";
import { MovieSearchContents } from "./MovieSearchContents";
import { useState } from "react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { SearchIcon } from "lucide-react";

export const MovieSearchBar = () => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
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
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <MovieSearchContents value={inputValue}/>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
