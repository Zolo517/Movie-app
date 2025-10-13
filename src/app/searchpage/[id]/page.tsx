import { Header } from "@/app/genresfilter/_features/Header";
import { MovieGenres } from "@/app/genresfilter/_features/MovieGenres";
import { genresType } from "@/lib/type";
import { axiosInstance } from "@/lib/utils";
import Link from "next/link";
import { Results } from "./_components/Results";

export default async function Home({
  params: { id },
}: {
  params: { id: string };
}) {
  const getGenres = async (id: string) => {
    const res = await axiosInstance.get(`/genre/movie/list?language=en`);
    return res.data.genres;
  };
  const genreName = await getGenres(id);

  return (
    <div className="px-20 pt-13 pb-8 flex flex-col gap-8">
      <Header />
      <div className="flex gap-7">
        <Results />
        <div className="border-[1px] mx-4"></div>
        <MovieGenres genres={genreName} />
      </div>
    </div>
  );
}
