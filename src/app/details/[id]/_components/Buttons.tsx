import Link from "next/link";
import { BadgeButton } from "./BadgeButton";

export const Buttons = ({ genres }: { genres: any }) => {
  return (
    <div className="gap-3 flex">
      {genres.map((genre: any, i: number) => {
        return (
          <Link key={i + Math.random()}
            href={`/genresfilter?genreId=${genre.id}&genreName=${genre.name}`}
          >
            <BadgeButton key={i + Math.random()}>{genre.name}</BadgeButton>
          </Link>
        );
      })}
    </div>
  );
};
