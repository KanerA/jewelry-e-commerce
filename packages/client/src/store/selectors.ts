import store from ".";

export const getFavorites = (state: any = store.getState()) => state.products.favorites;
export const getProductsData = (state: any = store.getState()) => state.products.products;
export const getCartData = (state: any = store.getState()) => state.products.cart;