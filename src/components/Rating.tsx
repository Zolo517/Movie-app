import { ratingType } from "@/lib/type";

export const Rating = ({ rating, large, small }: ratingType) => {
  return (
    <p className={`text-[${large}] font-semi-bold`}>
      {Math.round(rating * 10) / 10}
      <span className={`text-[${small}] text-[#71717A] `}>
        /
        <span className={`text-[${small}] text-[#71717A] content-end`}>10</span>
      </span>
    </p>
  );
};
