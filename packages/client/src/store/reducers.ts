import { IInitialState } from "./types";
import * as actions from './actionTypes';
import initialState from "./initialState";

type TProductCategories = {
    id: string;
    name: "rings" | "bracelets" | "necklaces" | "earrings";
    slug: "rings" | "bracelets" | "necklaces" | "earrings";
}

export const products = (state: IInitialState = initialState, action: any) => {
    switch (action.type) {
        case actions.SET_PRODUCTS_DATA: {
            const categorizedProducts: IInitialState["products"] = {
                rings: [],
                bracelets: [],
                necklaces: [],
                earrings: [],
            };
            action.payload.forEach((product: any) => {
                product.categories.forEach((cat: TProductCategories) => categorizedProducts[cat.slug].push(product))
            });

            return { ...state, products: categorizedProducts }
            // return state
        }
        case actions.SET_CART_DATA: {
            return { ...state, cart: action.payload };
        }
        case actions.ADD_FAVORITE_ITEM: {
            const currentFavorites = [...state.favorites];
            const item = currentFavorites.find(val => val.name === action.payload.name); // TODO: change to id
            if (item) return state;
            currentFavorites.push(action.payload);
            return {
                ...state,
                favorites: currentFavorites
            }
        }
        case actions.ADD_ITEM_TO_CART:
            break;
        case actions.REMOVE_FAVORITE_ITEM: {
            const currentFavorites = [...state.favorites];
            const indexToRemove = currentFavorites.findIndex(val => val.name === action.payload.name);
            currentFavorites.splice(indexToRemove, 1);
            return {
                ...state,
                favorites: currentFavorites
            }
        }
        case actions.REMOVE_ITEM_FROM_CART:
            break;
        default:
            return state;
    }
}