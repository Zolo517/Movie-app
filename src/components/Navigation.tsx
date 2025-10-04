import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { NavigationMenu } from "./ui/navigation-menu";
import { Input } from "./ui/input";

import { Button } from "./ui/button";
import { Logo } from "./Logo";
import { Genres } from "./Genres";
import { Theme } from "./Theme";
import { Search } from "lucide-react";
import { genresType } from "@/lib/type";
import { MovieSearchBar } from "./MovieSearchBar";

export const Navigation = ({ genres }: { genres: genresType[] }) => {
  return (
    <div className="px-20 py-[11.5px] sticky top-0">
      <div className="flex justify-between items-center h-9 ">
        <a href="http://localhost:3000/">
          <Logo color="#4338CA" />
        </a>
        <div className="flex gap-3">
          <Genres genres={genres} />
          <MovieSearchBar></MovieSearchBar>
        </div>
        <Theme></Theme>
      </div>
    </div>
  );
};
