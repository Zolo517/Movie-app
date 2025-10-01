import { infoType } from "@/app/test/page";
import { Card, CardContent } from "./ui/card";
type cardProps = {
  data: infoType;
  step: number;
};

export const InfoCard = (props: cardProps) => {
  const { data, step } = props;
  return (
    <Card>
      <CardContent>
        <h1 className="font-bold text-xl">Card {step}</h1>
        <p>Name: {data.name}</p>
        <p>Age: {data.age}</p>
        <p>Email: {data.email}</p>
      </CardContent>
    </Card>
  );
};
