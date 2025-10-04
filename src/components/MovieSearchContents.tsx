import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { MovieSearchCard } from "./MovieSearchCard";
import { Input } from "./ui/input";

export const MovieSearchContents = ({ value }: { value: string }) => {
  return (
    <div className="p-3">
      <MovieSearchCard />
      <div className="border-[0.5px] border-[#E4E4E7] my-2"></div>

      <p>See all results for "{value}"</p>
    </div>
  );
};
