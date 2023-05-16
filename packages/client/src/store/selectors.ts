import store from ".";

export const getFavorites = (state: any = store.getState()) => state.products.favorites;