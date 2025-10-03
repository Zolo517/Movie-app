import { ratingType } from "@/lib/type";

export const Rating = ({ rating, large, small }: ratingType) => {
  return (
    <div className="flex items-center">
      <p className={`text-[${large}] font-semi-bold`}>{rating}</p>
      <p className={`text-[${small}] text-[#71717A] `}>/</p>
      <p className={`text-[${small}] text-[#71717A] content-end`}>10</p>
    </div>
  );
};
