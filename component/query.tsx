"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { MOVIE_DATA, Movie } from "@/component/data";
import MovieItem from "./movieItem";

export default function Query() {
  const { data, error, isLoading } = useQuery<Movie[]>({
    queryKey: ["movies"],
    queryFn: () => fetch("/api/data").then((res) => res.json()),
  });
  //   console.log(data);
  if (isLoading) {
    return (
      // [...if(isLoading){

      <div className="grid grid-cols-1 overflow-hidden gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4 w-full">
        {[...new Array(19)].map((_, index) => {
          return (
            <div
              key={index}
              className="w-full h-96 animate-pulse  bg-[#0F172A] sm:rounded-md "
            ></div>
          );
        })}
      </div>
    );
  }
  if (data) {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4 w-full">
        {data.map((item, index) => {
          return <MovieItem key={index} movie={item} />;
        })}
      </div>
    );
  }
}
