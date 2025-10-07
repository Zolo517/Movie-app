import { BadgeButton } from "./BadgeButton";

export const Buttons = ({ genres }: { genres: any }) => {
  return (
    <div>
      {genres.map((genre: any, i: number) => {
        return <BadgeButton key={i + Math.random()}>{genre.name}</BadgeButton>;
      })}
    </div>
  );
};
