import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { productReducer } from "./reducers";

const reducer = combineReducers({ productReducer });
const store = configureStore({ reducer });

export default store;
