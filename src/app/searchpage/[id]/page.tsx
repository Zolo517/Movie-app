import { genresType } from "@/lib/type";
import { axiosInstance } from "@/lib/utils";
import Link from "next/link";

export default function Home({ params: { id } }: { params: { id: string } }) {
  const getGenres = async (id: string) => {
    const res = await axiosInstance.get(`/genre/movie/list?language=en`);
    return res.data.genres;
  };
  const genreName = getGenres(id);

  return (
    <div className="px-20 pt-13 pb-8 flex flex-col gap-8">
      <h2 className="font-semibold text-3xl">Search Filter</h2>
      <div className="flex gap-7">
        <div className="border-[1px] mx-4"></div>
        <div className="">
          <p className="font-semibold text-2xl ">Genres</p>
          <p className="text-[16px]"> See lists of movies by genre</p>
          <div className="flex flex-wrap  gap-4 w-[387px] mt-5">
            {" "}
            {/* {genreName.map((genre: genresType, index: number) => {
              return (
                <Link
                  href={`/genresfilter/${genre.id}`}
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
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
}
