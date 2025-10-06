import Image from "next/image";

import { movieType } from "@/lib/type";
import { Rating } from "@/components/Rating";

export const FirstPart = () => {
  return (
    <div>
      <div className="flex justify-between h-fit">
        <div>
          <h3 className="text-4xl font-bold">Wicked</h3>
          <p>2024.11.26 · PG · 2h 40m</p>
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
              <Rating rating={1} large={"18px"} small={"16px"}></Rating>
              <p className="text-xs">37K</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-6 mb-8">
        <Image
          src={"/wicked.jpg"}
          alt="movie poster"
          width={290}
          height={428}
        ></Image>
        <Image
          src={"/wicked.jpg"}
          alt="trailer"
          width={760}
          height={428}
        ></Image>
      </div>
    </div>
  );
};
