import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/navbar";

import { SectionOne } from "@/components/SectionOne";
import { Footer } from "@/components/Footer";
import { SectionTwo } from "@/components/SectionTwo";

export default function Home() {
  const cardNames = ["Upcoming", "Popular", "Top Rated"];
  return (
    <div className="">
      <Navbar></Navbar>
      <SectionOne></SectionOne>
      <div className="">

      {cardNames.map((cardName, index) => {
        return <SectionTwo key={index + Math.random()} name={cardName} />;
      })}
      </div>
      <Footer></Footer>
    </div>
  );
}
