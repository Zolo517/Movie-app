import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";

import { Search } from "lucide-react";
import { genresType } from "@/lib/type";
import { Logo } from "@/components/Logo";
import { Genres } from "@/components/Genres";
import { MovieSearchBar } from "@/components/MovieSearchBar";
import { Theme } from "@/components/Theme";

export const Navigation = () => {
  return (
    <div className="px-20 py-[11.5px] sticky top-0">
      <div className="flex justify-between items-center h-9 ">
        <a href="http://localhost:3000/">
          <Logo color="#4338CA" />
        </a>
        <div className="flex gap-3">
          <Genres />
          <MovieSearchBar></MovieSearchBar>
        </div>
        <Theme></Theme>
      </div>
    </div>
  );
};
