"use client";

import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "./slices/counterSlice";
// import txtrefSlice from "./slices/txtref";
// import userpageSlice from "./slices/userpageSlice";

import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import bookmarkSlice from "./features/bookmarkSlice";
import showSlice from "./features/showSlice";

export const store = configureStore({
  reducer: {
    bookmark: bookmarkSlice,
    show: showSlice, // counter: counterSlice,
    // txtrefSlice,
    // userpage: userpageSlice,
  },
  //   devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
