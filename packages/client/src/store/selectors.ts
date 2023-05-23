import store from ".";
import initialState from "./initialState";

export const getFavorites = (state: any = store.getState()) => state.products.favorites;
export const getProductsData = (state: any = store.getState()) => state.products.products;
export const getCartData = (state: any = store.getState()) => state.products.cart;
export const getCartId = (state: any = store.getState()) => state.products.cartId;
export const getCheckoutToken = (state: any = store.getState()) => state.products.checkoutToken;