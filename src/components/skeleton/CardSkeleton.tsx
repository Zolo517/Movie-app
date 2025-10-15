import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export const CardSkeleton = () => {
  return (
    <Card>
      <Skeleton className="w-[229px] h-[439px]" />
    </Card>
  );
};
