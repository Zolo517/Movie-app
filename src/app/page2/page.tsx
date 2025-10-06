"use client";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Rating } from "@/components/Rating";
import Image from "next/image";
import { SectionOne } from "@/components/SectionOne";
import { SectionTwo } from "@/components/SectionTwo";
import * as constants from "@/lib/constants";
import { BadgeButton } from "./_components/BadgeButton";
import { Page2Body } from "@/app/page2/_components/Page2Body";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Page() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/${movieId}?language=en-US", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjkwMWUzNTJlOTFkMmU1OTcyNThhYzU1ZDM2ZmZmMiIsIm5iZiI6MTc1OTA1MDY1Ny4zMjUsInN1YiI6IjY4ZDhmYmExOTBlY2QwMDlhYWI5YTFmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MZd1y3tFFfxvZlPqBNIqCDw0G_aMwCZzWxffwENlwT8`,
        },
      })
      .then((response) => {
        console.log("", response.data);
        setMovieData(response.data.results);
      });
  }, []);

  return (
    <div className="">
      <Page2Body isLoading={true}></Page2Body>
    </div>
  );
}
