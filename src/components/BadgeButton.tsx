import { Badge } from "./ui/badge";

export const BadgeButton = ({ children }: { children: string }) => {
  return <Badge variant={"outline"}>{children}</Badge>;
};
