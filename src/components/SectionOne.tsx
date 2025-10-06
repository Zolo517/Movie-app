"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { carouselMovie } from "@/lib/type";
import { MovieItem } from "./MovieItem";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export const SectionOne = ({
  movieItems,
  isLoading,
}: {
  movieItems: carouselMovie[];
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
            delay: 2000,
          }),
        ]}
      >
        <div className="relative">
          <CarouselContent>
            {movieItems.map((movieItem, i) => {
              return (
                <CarouselItem key={i + Math.random()}>
                  <MovieItem
                    key={Math.random()}
                    movieItem={movieItem}
                  ></MovieItem>
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
