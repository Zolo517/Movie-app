import { Skeleton } from "../ui/skeleton";
import { CardSkeleton } from "./CardSkeleton";
import { Section } from "./Section";

export const HomePage = () => {
  return (
    <div>
      
      <div className="mt-[52px]">
        <Section />
      </div>
      <Section />
      <Section />
    </div>
  );
};
