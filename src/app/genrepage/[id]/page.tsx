import { SectionTwo } from "@/components/SectionTwo";
import { axiosInstance } from "@/lib/utils";

export default async function HomePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const getMovies = async (category: string) => {
    const response = await axiosInstance.get(
      `/movie/${category}?language=en-US&page=1`
    );

    return response.data.results;
  };
  const movieDatas = await getMovies("");

  const getSimilarMovies = async (id: string) => {
    const response = await axiosInstance.get(
      `/movie/${id}/similar?language=en-US&page=1`
    );
    return response.data.results;
  };
  const similarMovie = await getSimilarMovies(id);

  return (
    <div>
      <SectionTwo
        isLoading={false}
        imgH={"340px"}
        width={230}
        height={439}
        title={"Popular"}
        movies={movieDatas}
      ></SectionTwo>
    </div>
  );
}
