import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

export const Genres = () => {
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
    <DropdownMenu>
  
        <DropdownMenuTrigger className="font-medium border-[1px] border-solid border-[#E4E4E7] py2 px-4 rounded-[6px] flex items-center justify-center gap-2">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <path
            d="M4 6.5L8 10.5L12 6.5"
            stroke="#18181B"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>Genre 
        </DropdownMenuTrigger>
       
  

      <DropdownMenuContent className=" w-[577px] h-[333px] border-[1px] border-[#E4E4E7] rounded-lg p-5 mt-[4.5px] z-10 bg-[#FFF]">
        <DropdownMenuLabel className="font-semibold text-2xl ">
          Genres
        </DropdownMenuLabel>
        <DropdownMenuLabel className="text-[16px] ">
          See lists of movies by genre
        </DropdownMenuLabel>

        <div className="w-full my-4 border-[#E4E4E7] border-[1px]"></div>
        <DropdownMenuGroup className="flex flex-wrap w-[500px] gap-4 ">
          {genres.map((genre, index) => {
            return (
              <div
                className="border-[0.1px] border-[#E4E4E7] rounded-[50px] justify-center items-center gap-2 text-[12px] font-semibold flex pl-[10px] pr-[4px] py-[2px]"
                key={index + Math.random()}
              >
                <DropdownMenuItem className=" ">{genre}</DropdownMenuItem>
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                >
                  <path
                    d="M1 9L5 5L1 1"
                    stroke="#09090B"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
