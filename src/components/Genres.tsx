import { genresType } from "@/lib/type";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

export const Genres = ({ genres }: { genres: genresType[] }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="font-medium border-[1px] border-solid py2 px-4 rounded-[6px] flex items-center justify-center gap-2 ">
        <svg
          className="text-black dark:text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <path
            d="M4 6.5L8 10.5L12 6.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Genre
      </DropdownMenuTrigger>

      <DropdownMenuContent className=" w-[577px] h-[333px] border-[1px] border-[#E4E4E7] rounded-lg p-5 mt-[4.5px] z-10 bg-[#FFF] dark:bg-[black]">
        <DropdownMenuLabel >
          <p className="font-semibold text-2xl ">Genres</p>
        </DropdownMenuLabel>
        <DropdownMenuLabel className="text-[16px] ">
          See lists of movies by genre
        </DropdownMenuLabel>

        <div className="w-full my-4 border-[1px] "></div>
        <DropdownMenuGroup className="flex flex-wrap w-[500px] gap-4 ">
          {genres.map((genre, index) => {
            return (
              <DropdownMenuItem
                className="rounded-2xl flex "
                key={index + Math.random()}
              >
                <div className="rounded-2xl  border-[0.1px]  justify-center items-center gap-2 text-[12px] font-semibold flex pl-[10px] pr-[4px] py-[2px]">
                  <p>{genre.name}</p>
                  <svg
                    className="text-black dark:text-white "
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                  >
                    <path
                      d="M1 9L5 5L1 1"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
