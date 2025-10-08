import { SectionTwo } from "@/components/SectionTwo";
import { movieType } from "@/lib/type";

export const ThirdPart = ({ movies }: { movies: movieType[] }) => {
  return (
    <div className="mt-8">
      <SectionTwo
        isLoading={false}
        width={190}
        height={372}
        imgH={"281px"}
        title={"More Like This"}
        movies={movies}
      />
    </div>
  );
};
