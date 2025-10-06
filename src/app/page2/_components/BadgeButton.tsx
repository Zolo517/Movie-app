import { Badge } from "@/components/ui/badge";

export const BadgeButton = ({ children }: { children: string }) => {
  return <Badge variant={"outline"}>{children}</Badge>;
};
