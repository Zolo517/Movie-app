import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export const CardSkeleton = () => {
  return (
    <Card>
      <Skeleton className="w-[230px] h-[439px]" />
    </Card>
  );
};
