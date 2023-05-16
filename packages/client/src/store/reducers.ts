import { IInitialState } from "./types";
import * as actions from './actionTypes';
import initialState from "./initialState";

export const productReducer = (state: IInitialState = initialState, action: any) => {
    switch (action.type) {
        case actions.ADD_FAVORITE_ITEM:
            const currentFavorites = [...state.favorites];
            const item = currentFavorites.find(val => val.name === action.payload.name); // TODO: change to id
            if (item) return state;
            currentFavorites.push(action.payload);
            return {
                ...state,
                favorites: currentFavorites
            }
        case actions.ADD_ITEM_TO_CART:
            break;
        case actions.REMOVE_FAVORITE_ITEM:
            break;
        case actions.REMOVE_ITEM_FROM_CART:
            break;
        default:
            return state;
    }
}