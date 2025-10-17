"use client";

import { SectionTwo } from "@/components/SectionTwo";
import { getSimilarMovies } from "@/lib/services";
import { movieType } from "@/lib/type";
import { axiosInstance } from "@/lib/utils";
import Link from "next/link";
import useSWR from "swr";

export const ThirdPart = ({ id }: { id: string }) => {
  const { data, error, isLoading } = useSWR(
    `/movie/${id}/similar?language=en-US&page=1`,
    () => getSimilarMovies(id)
  );
  console.log("data chin bnooo");
  console.log(data);

  if (error) {
    <div>Something went wrong</div>;
  }
  if (isLoading) {
    return;
  }
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center ">
        <h3 className="text-2xl font-semibold">More Like This</h3>
        <Link
          href={`/genrepage/?page=`}
          className="flex p-4 gap-2 items-center"
        >
          <p className="text-[14px] font-medium">See more</p>
          <svg
            className="text-black dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M1.33301 5.99998H10.6663M10.6663 5.99998L5.99967 1.33331M10.6663 5.99998L5.99967 10.6666"
              stroke="currentColor"
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
      <SectionTwo
        splice={5}
        imgH={"281px"}
        width={190}
        height={372}
        movies={data}
      />
    </div>
  );
};
