import { SectionOne } from "@/features/SectionOne";
import { SectionTwo } from "@/features/SectionTwo";
import { axiosInstance } from "@/lib/utils";

export default async function Home() {
  const getMovies = async (category: string) => {
    const response = await axiosInstance.get(
      `/movie/${category}?language=en-US&page=1`
    );

    return response.data.results;
  };
  const popularMovies = await getMovies("popular");
  const upcomingMovies = await getMovies("upcoming");
  const topRatedMovies = await getMovies("top_rated");
  const carouselMovies = await getMovies("now_playing");
  const categories = [
    {
      id: "popular",
      movies: popularMovies,
    },
    {
      id: "upcoming",
      movies: upcomingMovies,
    },
    {
      id: "top_rated",
      movies: topRatedMovies,
    },
    {
      id: "upcoming",
      movies: popularMovies,
    },
  ];

  return (
    <div className="">
      <SectionOne movies={carouselMovies} isLoading={false}></SectionOne>
      <div className="px-20 w-full gap-8 mt-[52px]">
        <SectionTwo
          isLoading={false}
          imgH={"340px"}
          width={230}
          height={439}
          title={"Popular"}
          movies={popularMovies}
        />
        <div className="mt-8">
          <SectionTwo
            isLoading={false}
            imgH={"340px"}
            width={230}
            height={439}
            title={"Upcoming"}
            movies={upcomingMovies}
          />
        </div>
        <div className="mt-8">
          <SectionTwo
            isLoading={false}
            imgH={"340px"}
            width={230}
            height={439}
            title={"Top Rated"}
            movies={topRatedMovies}
          />
        </div>
      </div>
    </div>
  );
}
