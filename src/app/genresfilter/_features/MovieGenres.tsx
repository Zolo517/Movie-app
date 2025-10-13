import { genresType } from "@/lib/type";
import Link from "next/link";

export const MovieGenres = ({ genres }: { genres: genresType[] }) => {
  return (
    <div>
      <p className="font-semibold text-2xl ">Genres</p>
      <p className="text-[16px]"> See lists of movies by genre</p>
      <div className="flex flex-wrap  gap-4 w-[387px] mt-5">
        {" "}
        {genres.map((genre: genresType, index: number) => {
          return (
            <Link
              href={`/genresfilter?genreId=${genre.id}&genreName=${genre.name}&`}
              key={index + Math.random()}
              className="rounded-2xl  border-[0.1px]  justify-center items-center gap-2 text-[12px] font-semibold flex pl-[10px] pr-[4px] py-[2px]"
            >
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
            </Link>
          );
        })}
      </div>
    </div>
  );
};
