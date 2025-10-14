import Image from "next/image";

import { movieType } from "@/lib/type";
import { Rating } from "@/components/Rating";

import { getImageUrl } from "@/lib/utils";

export const FirstPart = ({ movieInfo }: { movieInfo: movieType }) => {
  console.log(movieInfo.genres, "ssss");

  return (
    <div>
      <div className="flex justify-between h-fit">
        <div>
          <h3 className="text-4xl font-bold">{movieInfo.title}</h3>
          <p className="mt-1">
            {movieInfo.release_date} · {movieInfo.adult ? "PG ·" : ""}
            {"G · "}
            {Math.floor(movieInfo.runtime / 60)}h {movieInfo.runtime % 60}m
          </p>
        </div>
        <div>
          <h4 className="text-xs font-medium">Rating</h4>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="25"
              viewBox="0 0 26 25"
              fill="none"
            >
              <path
                d="M12.9997 1.33325L16.6047 8.63659L24.6663 9.81492L18.833 15.4966L20.2097 23.5233L12.9997 19.7316L5.78967 23.5233L7.16634 15.4966L1.33301 9.81492L9.39467 8.63659L12.9997 1.33325Z"
                fill="#FDE047"
                stroke="#FDE047"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <Rating
                rating={movieInfo.vote_average}
                large={"18px"}
                small={"16px"}
              />
              <p className="text-xs">{movieInfo.vote_count}k</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-6 mb-8">
        <Image
          src={getImageUrl(movieInfo.poster_path)}
          alt="movie poster"
          width={290}
          height={428}
        />
        <Image
          src={getImageUrl(movieInfo.backdrop_path, "original")}
          alt="trailer"
          width={760}
          height={428}
        />
      </div>
    </div>
  );
};
