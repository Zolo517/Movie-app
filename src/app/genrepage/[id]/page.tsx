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
const movieDatas = await getMovies("")

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
