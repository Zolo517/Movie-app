"use client";

import { dataType } from "@/lib/type";
import { axiosInstance } from "@/lib/utils";
import React from "react";
import ReactPlayer from "react-player";
import useSWR from "swr";

export const Trailer = ({ data }: { data: dataType }) => {
  const { key } = data;
  return (
    <div className="w-150 h-150">
      <ReactPlayer src={`https://www.youtube.com/watch?v=${key}`} />
    </div>
  );
};
