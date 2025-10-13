import { genresType } from "@/lib/type";
import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "./ui/dropdown-menu";
import { axiosInstance } from "@/lib/utils";
import Link from "next/link";

export async function Genres() {
  const getGenreId = async () => {
    const response = await axiosInstance.get(`/genre/movie/list?language=en`);
    return response.data.genres;
  };

  const genreId = await getGenreId();
  console.log(genreId, "genriin id shhuuuu");

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

      <DropdownMenuContent className=" w-[577px]  border-[1px] border-[#E4E4E7] rounded-lg p-5  z-10 bg-[#FFF] dark:bg-[black]">
        <DropdownMenuLabel>
          <div>
            <p className="font-semibold text-2xl ">Genres</p>
            <p className="text-[16px] "> See lists of movies by genre</p>
          </div>
        </DropdownMenuLabel>

        <div className="w-full my-[10px] border-[0.5px] "></div>
        <DropdownMenuGroup className="flex flex-wrap  gap-3 ">
          {genreId.map((genre: genresType, index: number) => {
            return (
              <Link
                href={`/genresfilter?genreId=${genre.id}&genreName=${genre.name}`}
                key={index + Math.random()}
              >
                <DropdownMenuItem
                  className="rounded-2xl  border-[0.1px]  justify-center items-center gap-1 text-[12px] font-semibold flex  "
                  key={index + Math.random()}
                >
                  <div className="justify-center items-center gap-1 text-[12px] font-semibold flex ">
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
              </Link>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
