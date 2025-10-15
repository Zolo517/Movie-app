import Link from "next/link";
import { SectionTwo } from "./SectionTwo";
import useSWR from "swr";
import { axiosInstance } from "@/lib/utils";
import { Section } from "./skeleton/Section";

export const PopularMovies = ({ text }: { text: string }) => {
  const fetchData = async () => {
    const res = await axiosInstance.get(`/movie/popular?language=en-US&page=1`);
    return res.data;
  };

  const { data, error, isLoading } = useSWR(
    `/movie/popular?language=en-US&page=1`,
    () => fetchData()
  );
  console.log("data chin bnooo");
  console.log(data);

  if (error) {
    <div>Something went wrong</div>;
  }
  if (isLoading) {
    return (
      <div className="mt-13">
        <Section />;
      </div>
    );
  }
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center ">
        <h3 className="text-2xl font-semibold">Popular</h3>
        <Link
          href={`/genrepage/${text}`}
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
        movies={data.results}
      />
    </div>
  );
};
