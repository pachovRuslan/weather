import { RootState } from './../store/store';
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";

export const useCustomDispatch = () => useDispatch()
export const useCustomSelector = useSelector