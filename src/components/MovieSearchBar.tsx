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
  const [value, setValue] = useState<string>("");


  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <InputGroup className="w-[379px]">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
      </DropdownMenuTrigger>

      {value === "wicked" ? (
        <DropdownMenuContent>
          <MovieSearchContents value={value}></MovieSearchContents>
        </DropdownMenuContent>
      ) : (
        ""
      )}
    </DropdownMenu>
  );
};
