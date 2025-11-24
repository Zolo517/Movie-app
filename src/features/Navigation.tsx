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
import Link from "next/link";
import Test from "@/components/Test";

export const Navigation = () => {
  return (
    <div className="px-20 py-[11.5px] sticky top-0 bg-white dark:bg-[#020618]">
      <div className="flex justify-between items-center h-9 ">
        <Link href="/">
          <Logo color="#4338CA" />
        </Link>
        <div className="flex gap-3">
          <Genres />
          <MovieSearchBar />
          {/* <Test /> */}
        </div>
        <Theme></Theme>
      </div>
    </div>
  );
};
