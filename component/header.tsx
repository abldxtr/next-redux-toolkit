"use client";

import { CiBookmark } from "react-icons/ci";
import { useState, useEffect } from "react";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { show } from "@/redux/features/showSlice";

export default function Header() {
  const stateShow = useAppSelector((state) => state.show);
  const count = useAppSelector((state) => state.bookmark.length);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const dispatch = useAppDispatch();
  if (!isClient) {
    return (
      <header className=" container mx-auto p-8sticky h-16 top-0 z-40 w-full border-b bg-[#020817] ">
        <div className="flex items-center h-full justify-between  ">
          <div
            className={classNames(
              " text-white font-semibold text-lg cursor-default",
            )}
          >
            Next Movie
          </div>

          <div
            className=" size-10 relative cursor-pointer flex items-center justify-center text-white stroke-white hover:bg-white/10 transition-all rounded-md "
            onClick={() => dispatch(show())}
          >
            <CiBookmark className="size-6" />
            <div className="absolute flex item-center justify-center text-white -bottom-1 -right-1 size-6 aspect-square rounded-full bg-red-500">
              0
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className=" container mx-auto p-8sticky h-16 top-0 z-40 w-full border-b bg-[#020817] ">
      <div className="flex items-center h-full justify-between  ">
        <div
          className={classNames(
            " text-white font-semibold text-lg cursor-default",
          )}
        >
          Next Movie
        </div>

        <div
          className=" size-10 relative cursor-pointer flex items-center justify-center text-white stroke-white hover:bg-white/10 transition-all rounded-md "
          onClick={() => dispatch(show())}
        >
          <CiBookmark className="size-6" />
          <div className="absolute flex item-center justify-center text-white -bottom-1 -right-1 size-6 aspect-square rounded-full bg-red-500">
            {count}
          </div>
        </div>
      </div>
    </header>
  );
}
