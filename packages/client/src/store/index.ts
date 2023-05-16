import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { products } from "./reducers";

const reducer = combineReducers({ products });
const store = configureStore({ reducer });

export default store;
