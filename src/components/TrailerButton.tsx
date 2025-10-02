import { Button } from "./ui/button";

export const TraillerButton = () => {
  return (
    <Button variant={"outline"} className="flex gap-2 py-2 px-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="14"
        viewBox="0 0 12 14"
        fill="none"
      >
        <path
          d="M1.33301 1L10.6663 7L1.33301 13V1Z"
          stroke="#18181B"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="text-[black]">Watch Trailer</p>
    </Button>
  );
};
