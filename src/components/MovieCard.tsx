import { movieType } from "@/lib/type";
import { Card, CardContent } from "./ui/card";
import { Rating } from "./Rating";
import Link from "next/link";
import Image from "next/image";

export const MovieCard = ({
  isLoading,
  movie,
  w,
  h,
  img,
}: {
  isLoading: boolean;
  w: string;
  img: string;
  h: string;
  movie: movieType;
}) => {
  const { id, poster_path, vote_average, title } = movie;

  if (isLoading) {
    return (
      <Link href={`/details/${id}`}>
        <Card
          style={{ width: w, height: h }}
          className=" gap-1 overflow-hidden bg-[#F4F4F5] dark:bg-[#27272A]"
        ></Card>
      </Link>
    );
  }

  return (
    <Link href={`/details/${id}`}>
      <Card
        style={{ width: `${w}px`, height: `${h}px` }}
        className=" gap-1 overflow-hidden "
      >
        <CardContent>
          <Image
            width={w}
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt="img"
            style={{ height: img }}
            className="w-full h-[77%] overflow-hidden"
          />
          <div className=" p-2 h-full">
            <div className="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
              >
                <path
                  d="M7.99967 1.3335L10.0597 5.50683L14.6663 6.18016L11.333 9.42683L12.1197 14.0135L7.99967 11.8468L3.87967 14.0135L4.66634 9.42683L1.33301 6.18016L5.93967 5.50683L7.99967 1.3335Z"
                  fill="#FDE047"
                  stroke="#FDE047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Rating
                rating={vote_average}
                large={"14px"}
                small={"12px"}
              ></Rating>
            </div>
            <h3 className="text-[18px]">{title}</h3>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
{
  /*
  <div className="w-[230px] h-[ 439px] gap-1 rounded-lg border-0 ">
      <img className="w-full h-[340px] overflow-hidden" />
      <div className="bg-[#F4F4F5] p-2">
        <div className="flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              d="M7.72917 1.33337L9.78917 5.50671L14.3958 6.18004L11.0625 9.42671L11.8492 14.0134L7.72917 11.8467L3.60917 14.0134L4.39583 9.42671L1.0625 6.18004L5.66917 5.50671L7.72917 1.33337Z"
              fill="#FDE047"
              stroke="#FDE047"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex items-center">
            <p className="text-[14px]">6.9</p>
            <p className="text-[12px] text-[#71717A] ">/</p>
            <p className="text-[12px] text-[#71717A] content-end">10</p>
          </div>
        </div>
        <h3 className="text-[18px]">{movieName}</h3>
      </div>
    </div>
  */
}
