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

export const Navigation = ({ genres }: { genres: genresType[] }) => {
  return (
    <div className="px-20 py-[11.5px] sticky top-0">
      <div className="flex justify-between items-center h-9 ">
        <a href="http://localhost:3000/">
          <Logo color="#4338CA" />
        </a>
        <div className="flex gap-3">
          <Genres genres={genres} />
          <div className="relative flex">
            <svg
              className="absolute left-2 top-2.5 text-black dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <g opacity="0.5">
                <path
                  d="M6.93359 3.1333C9.30835 3.1333 11.2333 5.05837 11.2334 7.43311C11.2334 8.44873 10.8824 9.38107 10.2939 10.1167L10.0137 10.4663L13.3574 13.8101C13.3638 13.8166 13.3672 13.825 13.3672 13.8335L13.3574 13.8569C13.3444 13.8698 13.3236 13.8697 13.3105 13.8569L9.9668 10.5132L9.61719 10.7935C8.88156 11.3819 7.94922 11.7329 6.93359 11.7329C4.55886 11.7328 2.63379 9.80786 2.63379 7.43311C2.63389 5.05844 4.55893 3.13341 6.93359 3.1333ZM6.93359 3.19971C4.59574 3.19981 2.7003 5.09525 2.7002 7.43311C2.7002 9.77105 4.59567 11.6664 6.93359 11.6665C9.2716 11.6665 11.167 9.77111 11.167 7.43311C11.1669 5.09519 9.27154 3.19971 6.93359 3.19971Z"
                  fill="currentColor"
                  stroke="currentColor"
                />
              </g>
            </svg>
            <Input className="w-[500px] h-9 px-8" placeholder={`Search..`} />
          </div>
        </div>
        <Theme></Theme>
      </div>
    </div>
  );
};
