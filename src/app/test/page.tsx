"use client";
import { InfoCard } from "@/components/InfoCard";
import { Card, CardContent } from "@/components/ui/card";

import { useState } from "react";
import { Buttons } from "../../components/testPageButtons";

export type infoType = {
  name: string;
  age: number;
  email: string;
};

export default function Home() {
  const [step, setStep] = useState(1);

  const prevButton = () => {
    setStep(step - 1);
  };

  const nextButton = () => {
    setStep(step + 1);
  };

  const infos: infoType[] = [
    {
      name: "Tsetsgee",
      age: 19,
      email: "tsetsgee@gmail.com",
    },
    {
      name: "Bataa",
      age: 15,
      email: "bataa@gmail.com",
    },
    {
      name: "Boldoo",
      age: 30,
      email: "boldoo@gmail.com",
    },
    {
      name: "Dulmaa",
      age: 50,
      email: "dulmaa@gmail.com",
    },
  ];

  return (
    <div>
      {infos.map((info) => {
        return <InfoCard data={info} step={step}></InfoCard>;
      })}
      <Buttons
        nextButton={nextButton}
        prevButton={prevButton}
        step={step}
      ></Buttons>
    </div>
  );
}
