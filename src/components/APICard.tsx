import { Rating } from "@/components/Rating";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
type movieCardProps = {
  img: string;
  title: string;
  score: number;
};

export const APICard = ({ img, title, score }: movieCardProps) => {
  return (
    <Link href="/page2">
      <Card
        style={{ width: "230px", height: "500px" }}
        className=" gap-1 overflow-hidden "
      >
        <CardContent>
          <img
            src={`https://image.tmdb.org/t/p/w500/${img}`}
            style={{ height: "400px" }}
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
              <Rating rating={score} large={"14px"} small={"12px"}></Rating>
            </div>
            <h3 className="text-[18px]">{title}</h3>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
