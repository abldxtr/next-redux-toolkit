"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { AppStore, makeStore } from "@/redux/store";
import { useRef } from "react";
import { initialState, Movie, add } from "@/redux/features/bookmarkSlice";

type child = {
  children: ReactNode;
};

// const Providers = ({ children }: child) => {
//   return <Provider store={store}>{children}</Provider>;
// };

// export default Providers;
export default function StoreProvider({
  children,
  // movie,
}: {
  children: React.ReactNode;
  // movie: Movie;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    // storeRef.current.dispatch(add(movie));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
