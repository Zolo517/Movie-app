import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { NavigationMenu } from "./ui/navigation-menu";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";

export const Navbar = () => {
  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film-Noir",
    "Game-show",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "News",
    "Reality-Tv",
    "Romance",
    "Sci-Fi",
    "Short",
    "Talk-Show",
    "Thriller",
    "War",
    "Western",
  ];

  return (
    <div className="px-20 py-[11.5px]">
      <div className="flex justify-between items-center h-9 ">
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              d="M5.83268 2.16675V18.8334M14.166 2.16675V18.8334M1.66602 10.5001H18.3327M1.66602 6.33341H5.83268M1.66602 14.6667H5.83268M14.166 14.6667H18.3327M14.166 6.33341H18.3327M3.48268 2.16675H16.516C17.5193 2.16675 18.3327 2.9801 18.3327 3.98341V17.0167C18.3327 18.0201 17.5193 18.8334 16.516 18.8334H3.48268C2.47936 18.8334 1.66602 18.0201 1.66602 17.0167V3.98341C1.66602 2.9801 2.47936 2.16675 3.48268 2.16675Z"
              stroke="#4338CA"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-[#4338CA] text-[16px] font-semibold italic   ">
            Movie Z
          </p>
        </div>
        <div className="flex gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger className="font-medium border-[1px] border-solid border-[#E4E4E7] py2 px-4 rounded-[6px]">
              Genre
            </DropdownMenuTrigger>

            <DropdownMenuContent className=" w-[577px] ">
              <DropdownMenuLabel className="font-semibold text-2xl ">
                Genres
              </DropdownMenuLabel>
              <DropdownMenuLabel className="text-[16px] ">
                See lists of movies by genre
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="" />
              <div className="border-[1px] border-solid w-full my-4"></div>
              <DropdownMenuGroup className="grid grid-cols-5 w-[537px] gap-4">
                {genres.map((genre, index) => {
                  return (
                    <DropdownMenuItem key={index + Math.random()}>
                      {genre}
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Input className="w-[379px] h-9" />
        </div>
        <Button variant={"outline"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
          >
            <path
              d="M7 0.5C6.20435 1.29565 5.75736 2.37478 5.75736 3.5C5.75736 4.62522 6.20435 5.70435 7 6.5C7.79565 7.29565 8.87478 7.74264 10 7.74264C11.1252 7.74264 12.2044 7.29565 13 6.5C13 7.68669 12.6481 8.84673 11.9888 9.83342C11.3295 10.8201 10.3925 11.5892 9.2961 12.0433C8.19975 12.4974 6.99335 12.6162 5.82946 12.3847C4.66558 12.1532 3.59648 11.5818 2.75736 10.7426C1.91825 9.90353 1.3468 8.83443 1.11529 7.67054C0.88378 6.50666 1.0026 5.30026 1.45673 4.2039C1.91085 3.10754 2.67989 2.17047 3.66658 1.51118C4.65328 0.851894 5.81331 0.5 7 0.5Z"
              stroke="#18181B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

{
  /*<DropdownMenuItem>Action </DropdownMenuItem>
                  <DropdownMenuItem>Adventure</DropdownMenuItem>
                  <DropdownMenuItem>Animation</DropdownMenuItem>
                  <DropdownMenuItem>Biography</DropdownMenuItem>
                  <DropdownMenuItem>Comedy</DropdownMenuItem>
                  <DropdownMenuItem>Crime</DropdownMenuItem>
                  <DropdownMenuItem>Documentary</DropdownMenuItem>
                  <DropdownMenuItem>Drama</DropdownMenuItem>
                  <DropdownMenuItem>Family</DropdownMenuItem>
                  <DropdownMenuItem>Fantasy</DropdownMenuItem>
                  <DropdownMenuItem>Film-Noir</DropdownMenuItem>
                  <DropdownMenuItem>Game-show</DropdownMenuItem>
                  <DropdownMenuItem>History</DropdownMenuItem>
                  <DropdownMenuItem>Horror</DropdownMenuItem>
                  <DropdownMenuItem>Music</DropdownMenuItem>
                  <DropdownMenuItem>Musical</DropdownMenuItem>
                  <DropdownMenuItem>Mystery</DropdownMenuItem>
                  <DropdownMenuItem>News</DropdownMenuItem>
                  <DropdownMenuItem>Reality-TV</DropdownMenuItem>
                  <DropdownMenuItem>Romance</DropdownMenuItem>
                  <DropdownMenuItem>Sci-Fi</DropdownMenuItem>
                  <DropdownMenuItem>Short</DropdownMenuItem>
                  <DropdownMenuItem>Sport</DropdownMenuItem>
                  <DropdownMenuItem>Talk-show</DropdownMenuItem>
                  <DropdownMenuItem>Thriller</DropdownMenuItem>
                  <DropdownMenuItem>War</DropdownMenuItem>
                  <DropdownMenuItem>Western</DropdownMenuItem> */
}
