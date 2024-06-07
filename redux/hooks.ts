import {
  TypedUseSelectorHook,
  useSelector,
  useDispatch,
  useStore,
} from "react-redux";
import { AppDispatch, RootState, AppStore } from "./store";

// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
