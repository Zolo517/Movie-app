"use client";

import { dataType } from "@/lib/type";
import { axiosInstance } from "@/lib/utils";
import React from "react";
import ReactPlayer from "react-player";
import useSWR from "swr";

export const Trailer = ({ data }: { data: dataType }) => {
  const { key } = data;
  return (
    <ReactPlayer
      width={"100%"}
      height={800}
      src={`https://www.youtube.com/watch?v=${key}`}
    />
  );
};
