import { Pagi } from "@/app/genresfilter/_components/Pagi";

export const Results = () => {
  return (
    <div>
      <h4>
        {} results for "{}"
      </h4>
      <div>
        {/* {filters?.splice(0, 12).map((movie: movieType, index: number) => {
                          return (
                            <MovieCard
                              isLoading={false}
                              img={"281px"}
                              w={190}
                              h={372}
                              key={index + Math.random()}
                              movie={movie}
                            />
                          );
                        })} */}
      </div>
      <Pagi />
    </div>
  );
};
