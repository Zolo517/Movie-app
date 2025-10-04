import { MovieSearchCard } from "./MovieSearchCard";

export const MovieSearchBar = () => {
  return (
    <div className="p-3">
      <MovieSearchCard />
      <p>See all results for "{}"</p>
    </div>
  );
};
