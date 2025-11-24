"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { Trailer } from "./Trailer";
import { axiosInstance } from "@/lib/utils";
import useSWR from "swr";
import { DialogTitle } from "@radix-ui/react-dialog";
import { dataType } from "@/lib/type";
import { getTrailer } from "@/lib/services";
import { PlayButton } from "@/icons/PlayButton";

export const TraillerButton = ({ id, p }: {p:string, id: number }) => {
  const { data, error, isLoading } = useSWR(
    `/movie/${id}/videos?language=en-US`,
    () => getTrailer(id)
  );
  console.log("trailer video", data);
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex gap-2 py-2 px-4 items-center">
          <PlayButton />
          <p className="text-base ">{p} Trailer</p>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[70%] sm:max-h-[30%]">
        {data?.splice(0, 1).map((data: dataType) => {
          return <Trailer data={data} key={data.key} />;
        })}
      </DialogContent>
    </Dialog>
  );
};
