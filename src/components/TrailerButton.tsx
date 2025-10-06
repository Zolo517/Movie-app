import Link from "next/link";
import { Button } from "./ui/button";

export const TraillerButton = () => {
  return (
    <Link href="/genrefilter">
      {" "}
      <Button className="flex gap-2 py-2 px-4 ">
        <svg
          className=" dark:text-black"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="14"
          viewBox="0 0 12 14"
          fill="none"
        >
          <path
            d="M1.33301 1L10.6663 7L1.33301 13V1Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>Watch Trailer</p>
      </Button>
    </Link>
  );
};
