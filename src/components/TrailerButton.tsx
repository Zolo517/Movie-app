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

export const TraillerButton = ({ id }: { id: number }) => {
  const getTrailer = async (id: number) => {
    const res = await axiosInstance.get(`/movie/${id}/videos?language=en-US`);
    return res.data.results;
  };
  const { data, error, isLoading } = useSWR(
    `/movie/${id}/videos?language=en-US`,
    () => getTrailer(id)
  );
  console.log("trailer video", data);
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex gap-2 py-2 px-4 ">
          <svg
            className=" dark:text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="14"
            viewBox="0 0 12 14"
            fill="none"
          >
            <path
              d="M1.33301 1L10.6663 7L1.33301 13V1Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>Watch Trailer</p>
        </div>
      </DialogTrigger>
      <DialogContent>
        {data?.splice(0, 1).map((data: dataType) => {
          return <Trailer data={data} key={data.key} />;
        })}
      </DialogContent>
    </Dialog>
  );
};
