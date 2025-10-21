import { Pagi } from "@/app/genresfilter/_components/Pagi";
import { SectionTwo } from "@/components/SectionTwo";
import { idType } from "@/lib/type";
import { axiosInstance } from "@/lib/utils";
import { CategoryMovies } from "./_components/CategoryMovies";
import { getMoviesByCategory } from "@/lib/services";

export default async function HomePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const movieDatas = await getMoviesByCategory(id);
  console.log(movieDatas, "datadatadata");
  let title = "";
  if (id === "popular") {
    title = "Popular";
  } else if (id === "upcoming") {
    title = "Upcoming";
  } else {
    title = "Top Rated";
  }

  return (
    <div className="px-20 mt-13">
      <CategoryMovies movies={movieDatas.results} title={title} />
      {/* <Pagi /> */}
    </div>
  );
}
