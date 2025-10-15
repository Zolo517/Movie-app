"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { carouselMovie, movieType } from "@/lib/type";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieItem } from "@/components/MovieItem";
import { axiosInstance } from "@/lib/utils";
import useSWR from "swr";
import { Skeleton } from "@/components/ui/skeleton";

export const SectionOne = () => {
  const fetchData = async () => {
    const res = await axiosInstance.get(
      `/movie/now_playing?language=en-US&page=1`
    );
    return res.data;
  };

  const { data, error, isLoading } = useSWR(
    `/movie/now_playing?language=en-US&page=1`,
    () => fetchData()
  );
  console.log("data chin bish bnooo");
  console.log(data);

  if (error) {
    <div>Something went wrong at Zoloo's yambii website xD</div>;
  }
  if (isLoading) {
    return <Skeleton className="w-full h-150 mt-6" />;
  }

  return (
    <div className="mt-6 h-150 z-1">
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <div className="relative">
          <CarouselContent>
            {data.results?.map((movie: movieType, i: number) => {
              return (
                <CarouselItem key={i + Math.random()}>
                  <MovieItem key={Math.random()} movie={movie}></MovieItem>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </div>

        <CarouselPrevious className="absolute left-11" />

        <CarouselNext className="absolute right-11" />
      </Carousel>
    </div>
  );
};
