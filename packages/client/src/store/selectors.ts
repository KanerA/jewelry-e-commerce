import { useSelector } from "react-redux";
import { IInitialState } from "./types";
import store from ".";

export const getFavorites = (state: any = store.getState()) => state.products.favorites;