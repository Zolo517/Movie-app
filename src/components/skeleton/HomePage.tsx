import { Skeleton } from "../ui/skeleton";
import { CardSkeleton } from "./CardSkeleton";
import { Section } from "./Section";

export const HomePage = () => {
  return (
    <div>
      <Skeleton className="w-full h-150 mt-6" />
      <div className="mt-[52px]">
        <Section />
      </div>
      <Section />
      <Section />
    </div>
  );
};
