import { Skeleton } from "../ui/skeleton";
import { CardSkeleton } from "./CardSkeleton";

export const Section = () => {
  return (
    <div>
      <div className="mb-8 gap-8 mt-8">
        <div className="flex justify-between items-center mb-8">
          <Skeleton className="w-[250px] h-8 rounded-3xl " />
          <Skeleton className="w-[160px] h-9 rounded-3xl " />
        </div>
        <div className="flex flex-wrap gap-[30px]">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
    </div>
  );
};
