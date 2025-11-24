"use client";

import { FilteredMovies } from "@/app/genresfilter/_components/FilteredMovies";
import { genresType, movieType, page3Props } from "@/lib/type";
import { axiosInstance } from "@/lib/utils";
import Link from "next/link";
import { Header } from "./_features/Header";
import { MovieGenres } from "./_features/MovieGenres";
import useSWR from "swr";
import { getFilteredMovies } from "@/lib/services";
import { use, useState } from "react";

export default function Page3({ searchParams }: any) {
  const { genres }: { genres: string } = use(searchParams);

  const [pages, setPages] = useState(1);
  const { data, error, isLoading } = useSWR(
    `/discover/movie?language=en&with_genres=${genres}&page=${pages}`,
    () => getFilteredMovies(pages, genres)
  );

  if (data) console.log("Data yg jinken ni", data);
  return (
    <div className="px-20 pt-13 pb-8 flex flex-col gap-8">
      <Header />
      <div className="flex ">
        <MovieGenres genres={genres} />
        <div className="border-[1px] mx-8"></div>
        <FilteredMovies data={data} />
      </div>
    </div>
  );
}
