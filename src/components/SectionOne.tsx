import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export const SectionOne = () => {

  
  return (
    <div className="mt-6 h-150 z-1">
      <Carousel
    
      >
        <div className="relative">
          <CarouselContent>
            <CarouselItem
              className="h-[600px] bg-[#06616a]"
              id="1"
            ></CarouselItem>

            <CarouselItem className="bg-[#c889da]"></CarouselItem>
            <CarouselItem className="bg-[#89dabe]"></CarouselItem>
          </CarouselContent>
        </div>

        <CarouselPrevious className="absolute left-11" />

        <CarouselNext className="absolute right-11" />
      </Carousel>
    </div>
  );
};
