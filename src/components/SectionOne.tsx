import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export const SectionOne = () => {
  return (
    <div className="mt-6 h-150 ">
      <Carousel>
        <div className="relative">
          <CarouselContent>
            <CarouselItem id="1">1</CarouselItem>

            <CarouselItem id="2">2</CarouselItem>
            <CarouselItem id="3">3</CarouselItem>
          </CarouselContent>
        </div>
        
          <CarouselPrevious className="absolute left-5" />
       
        <CarouselNext className="absolute right-1" />
      </Carousel>
    </div>
  );
};
