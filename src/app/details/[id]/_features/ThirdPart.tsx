import { SectionTwo } from "@/features/SectionTwo";
import { movieType } from "@/lib/type";

export const ThirdPart = ({ movies }: { movies: movieType[] }) => {
  return (
    <div className="mt-8">
      <SectionTwo
        width={190}
        height={372}
        imgH={"281px"}
        title={"More Like This"}
        movies={movies}
      />
    </div>
  );
};
