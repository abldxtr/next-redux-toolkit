import Image from "next/image";
import { Movie } from "@/component/data";
import { CiBookmark } from "react-icons/ci";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { add } from "@/redux/features/bookmarkSlice";
import { IoBookmark } from "react-icons/io5";

const MovieItem = ({ movie }: { movie: Movie }) => {
  const stateBook = useAppSelector((state) => state.bookmark);
  const dispatch = useAppDispatch();

  return (
    <div className="relative overflow-hidden group rounded-md cursor-pointer shadow-sm h-96">
      {/* Content */}
      {/* <div ></div> */}
      <div className="relative z-20 flex flex-col justify-end w-full h-full px-4 pb-10">
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-2 ">
            <div className="inline-block px-2 py-1 text-xs rounded-md line-clamp-1 bg-yellow-100/80 text-slate-900">
              {movie.rating}
            </div>
            <div className="inline-block px-2 py-1 text-xs rounded-md line-clamp-1 bg-slate-800/80 text-slate-200">
              {movie.type.toUpperCase()}
            </div>
            <div className="inline-block px-2 py-1 text-xs rounded-md line-clamp-1 bg-slate-800/80 text-slate-200">
              {movie.genre.toUpperCase()}
            </div>
          </div>
          <div
            onClick={() => dispatch(add(movie))}
            className=" flex items-center justify-cente group  z-[1000] group-hover:opacity-100 opacity-50 fill-white text-white stroke-white transition duration-300 "
          >
            {stateBook.findIndex((pre) => pre.id === movie.id) === -1 ? (
              <CiBookmark className="size-10 opacity-0 group-hover:opacity-100 transition  " />
            ) : (
              <IoBookmark className="size-10 " />
            )}
          </div>
        </div>
        <h2 className="mt-2 text-2xl font-semibold text-slate-200">
          {movie.title}
        </h2>
        <p className="text-sm text-slate-400 line-clamp-2">{movie.plot}</p>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 z-10 rounded-md bg-gradient-to-b from-slate-900/30 via-slate-900/90 to-slate-900 " />
      {/* BG Image */}
      <Image
        className="object-cover object-center pb-1 rounded-md"
        src={movie.image}
        fill
        alt={movie.title}
      />
    </div>
  );
};

export default MovieItem;
