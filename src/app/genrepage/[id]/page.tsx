import { Pagi } from "@/app/genresfilter/_components/Pagi";
import { SectionTwo } from "@/components/SectionTwo";
import { idType } from "@/lib/type";
import { axiosInstance } from "@/lib/utils";
import { CategoryMovies } from "./_components/CategoryMovies";

export default async function HomePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const getMovies = async (id: string) => {
    const response = await axiosInstance.get(
      `/movie/${id}?language=en-US&page=1`
    );

    return response.data.results;
  };

  const movieDatas = await getMovies(id);
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
      <CategoryMovies movies={movieDatas} title={title} />
      <Pagi />
    </div>
  );
}
