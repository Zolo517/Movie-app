import { axiosInstance } from "@/lib/utils";
import Link from "next/link";
import useSWR from "swr";
import { SectionTwo } from "./SectionTwo";
import { Section } from "./skeleton/Section";
import { getTop_ratedMovies } from "@/lib/services";

export const TopRatedMovies = ({ text }: { text: string }) => {
  const { data, error, isLoading } = useSWR(
    `/movie/top_rated?language=en-US&page=1`,
    () => getTop_ratedMovies()
  );
  console.log("top rated");
  console.log(data);

  if (error) {
    <div>Something went wrong</div>;
  }
  if (isLoading) {
    return <Section />;
  }
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center ">
        <h3 className="text-2xl font-semibold">Top Rated</h3>
        <Link
          href={`/category/${text}`}
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
        splice={10}
        imgH={"340px"}
        width={230}
        height={439}
        movies={data}
      />
    </div>
  );
};
