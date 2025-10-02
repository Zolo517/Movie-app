import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { SectionOne } from "@/components/SectionOne";
import { Footer } from "@/components/Footer";
import { SectionTwo } from "@/components/SectionTwo";
import { BadgeButton } from "@/components/BadgeButton";

import { MovieSearch } from "@/components/MovieSearchCard";

import * as type from "@/lib/constants";
import { Navbar } from "@/components/NavBar";

export default function Home() {
  return (
    <div className="">
      <Navbar genres={type.genres}></Navbar>
      <SectionOne movieItems={type.movieItems}></SectionOne>
      <div className="">
        {type.movieCategories.map((movieCategory, index) => {
          return (
            <SectionTwo
              title={movieCategory.category}
              movies={movieCategory.movies}
              key={index + Math.random()}
            />
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
}


