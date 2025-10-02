import { Button } from "@/components/ui/button";

export const Buttons = ({
  step,
  prevButton,
  nextButton,
}: {
  step: number;
  prevButton: () => void;
  nextButton: () => void;  
}) => {
  return (
    <div className="flex gap-3">
      {step === 1 ? "" : <Button onClick={prevButton}>Prev</Button>},
      {step === 4 ? "" : <Button onClick={nextButton}>Next</Button>}
    </div>
  );
};
