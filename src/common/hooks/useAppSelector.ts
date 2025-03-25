import { RootStore } from "app/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;
