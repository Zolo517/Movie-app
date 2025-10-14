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

export const SectionOne = ({
  movies,
  isLoading,
}: {
  movies: movieType[];
  isLoading: boolean;
}) => {
  if (isLoading) {
    return (
      <div className="mt-6 h-150 z-1 bg-[#F4F4F5] dark:bg-[#27272A]"></div>
    );
  }

  return (
    <div className="mt-6 h-150 z-1">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
      >
        <div className="relative">
          <CarouselContent>
            {movies?.map((movie: movieType, i: number) => {
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
