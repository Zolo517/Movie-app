import { Pagi } from "@/app/genresfilter/_components/Pagi";
import { SectionTwo } from "@/features/SectionTwo";
import { idType } from "@/lib/type";
import { axiosInstance } from "@/lib/utils";

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

  return (
    <div className="px-20 mt-13">
      <SectionTwo
        isLoading={false}
        imgH={"340px"}
        width={230}
        height={439}
        title={id}
        movies={movieDatas}
      ></SectionTwo>
      <Pagi />
    </div>
  );
}
