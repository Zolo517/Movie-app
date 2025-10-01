import { movieType } from "@/lib/type";
import { Card, CardContent } from "./ui/card";
import { Rating } from "./Rating";

export const MovieCard = ({ movie }: { movie: movieType }) => {
  return (
    <Card className="w-[230px] h-[439px] gap-1 overflow-hidden">
      <CardContent>
        <img src={movie.image} className="w-full h-[340px] overflow-hidden" />
        <div className="bg-[#F4F4F5] p-2 h-full">
          <div className="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M14.0007 2.33325L17.6057 9.63659L25.6673 10.8149L19.834 16.4966L21.2107 24.5233L14.0007 20.7316L6.79065 24.5233L8.16732 16.4966L2.33398 10.8149L10.3957 9.63659L14.0007 2.33325Z"
                fill="#FDE047"
                stroke="#FDE047"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Rating
              rating={movie.rating}
              large={"18px"}
              small={"16px"}
            ></Rating>
          </div>
          <h3 className="text-[18px]">{movie.title}</h3>
        </div>
      </CardContent>
    </Card>
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
