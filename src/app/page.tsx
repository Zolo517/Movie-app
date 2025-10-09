import { SectionOne } from "@/components/SectionOne";
import { SectionTwo } from "@/components/SectionTwo";
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
