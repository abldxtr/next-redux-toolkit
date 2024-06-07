"use client";
import { IoMdClose } from "react-icons/io";

import { remove } from "@/redux/features/bookmarkSlice";
import { show } from "@/redux/features/showSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { useOnClickOutside } from "usehooks-ts";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

export default function Book() {
  const [isClient, setIsClient] = useState(false);
  const stateBook = useAppSelector((state) => state.bookmark);
  const stateShow = useAppSelector((state) => state.show);
  const dispatch = useAppDispatch();
  const ref = useRef(null);
  const handleClickOutside = () => {
    // Your custom logic here
    if (stateShow) {
      dispatch(show());
    }
  };
  useOnClickOutside(ref, handleClickOutside);
  useEffect(() => {
    if (stateBook.length === 0 && stateShow === true) {
      dispatch(show());
    }
  }, [stateBook]);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }
  return (
    <div
      className={classNames(
        "fixed  top-0 left-0 w-full h-screen",
        stateShow
          ? " pacity-100 z-[1000]  "
          : "opacity-0 pointer-events-none -z-[1000] transition-all duration-500 delay-300 ",
      )}
    >
      <div
        className={classNames(
          " h-full z-[1000] transiton-all duration-300 overflow-y-auto  w-[320px] bg-[#94A3B8] p-6 absolute top-0 right-0   ",
          // // stateShow ? " animate-fade-in " : "animate-fade-out",

          stateShow ? "translate-x-0" : "translate-x-full",
        )}
        ref={ref}
      >
        <div
          className=" size-6 rounded-full  cursor-pointer p-2 m-6 absolute top-0 right-0 "
          onClick={() => dispatch(show())}
        >
          <IoMdClose className="size-6 hover:bg-gray-200 transition rounded-full " />
        </div>
        <div className="mt-6 flex flex-col space-y-2 w-full pt-6 ">
          {stateBook.map((item) => {
            return (
              <div
                key={item.id}
                className="flex items-center bg-gray-100 cursor-pointer rounded-md p-2 hover:bg-gray-200 transition  justify-between "
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1024}
                    height={1024}
                    className=" w-[80px] aspect-video  "
                  />
                  <h1 className="text-sm">{item.title}</h1>
                </div>
                <div>
                  <div
                    className="size-4 flex items-center justify-center rounded-full bg-gray-400 hover:bg-gray-500 cursor-pointer"
                    onClick={() => dispatch(remove(item))}
                  >
                    <IoMdClose className="size-3  transition rounded-full " />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
