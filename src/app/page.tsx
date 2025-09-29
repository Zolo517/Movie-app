import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/navbar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="mt-6 h-150 ">
        <Carousel>
          <div className="relative">
          <CarouselContent >
            <CarouselItem><div>
              </div></CarouselItem>

            <CarouselItem>2</CarouselItem>
            <CarouselItem>3</CarouselItem>
          </CarouselContent>
          </div>
          <CarouselPrevious className="absolute left-5"/>
          <CarouselNext className="absolute right-1"/>
        </Carousel>
      </div>
    </div>
  );
}
