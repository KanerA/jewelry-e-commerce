import { IInitialState, TProduct } from "./types";
import * as actions from './actionTypes';
import initialState from "./initialState";

type TProductCategories = {
    id: string;
    name: "rings" | "bracelets" | "necklaces" | "earrings";
    slug: "rings" | "bracelets" | "necklaces" | "earrings";
}

export const products = (state: IInitialState = initialState, action: any) => {
    switch (action.type) {
        case actions.SET_CART_ID: {
            return { ...state, cartId: action.payload };
        }
        case actions.SET_CHECKOUT_TOKEN: {
            return { ...state, checkoutToken: action.payload };
        }
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
            const item = currentFavorites.find(id => id === action.payload); // TODO: change to id
            if (item) return state;
            currentFavorites.push(action.payload);
            return {
                ...state,
                favorites: currentFavorites
            }
        }
        case actions.REMOVE_FAVORITE_ITEM: {
            const currentFavorites = [...state.favorites];
            const indexToRemove = currentFavorites.findIndex((id: string) => id === action.payload);
            currentFavorites.splice(indexToRemove, 1);
            return {
                ...state,
                favorites: currentFavorites
            }
        }
        case actions.SET_TOTAL: {
            return { ...state, total: action.payload as number }
        }
        case actions.ADD_ITEM_TO_CART:
            break;
        case actions.REMOVE_ITEM_FROM_CART: {
            const cartData = state.cart;
            const updated = cartData.reduce((prev, curr) => {
                if (curr.id !== action.payload) prev.push(curr);
                return prev;
            }, [] as TProduct[]);
            return { ...state, cart: updated }
        }
        case actions.SET_ORDER_DETAILS: {
            const currentOrderDetails = state.orderDetails;
            const updatedOrderDetails = { ...currentOrderDetails, ...action.payload }
            return { ...state, orderDetails: updatedOrderDetails }
        }
        case actions.SET_RETURN_POLICY_STATE: {
            window.scrollTo({ top: 0, left: 0 })
            return { ...state, showReturnPolicy: action.payload }
        }
        default:
            return state;
    }
}