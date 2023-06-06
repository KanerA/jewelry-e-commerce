import * as actions from './actionTypes';

export const actionAddFavorite = (itemId: string) => ({
    type: actions.ADD_FAVORITE_ITEM,
    payload: itemId
});
export const actionRemoveFavorite = (itemId: string) => ({
    type: actions.REMOVE_FAVORITE_ITEM,
    payload: itemId
});
export const actionAddItemToCart = (itemId: string) => ({
    type: actions.ADD_ITEM_TO_CART,
    payload: itemId
});
export const actionRemoveItemFromCart = (itemId: string) => ({
    type: actions.REMOVE_ITEM_FROM_CART,
    payload: itemId
});

export const setProductsData = (payload: any) => ({
    type: actions.SET_PRODUCTS_DATA,
    payload
});

export const setCartData = (payload: any) => ({
    type: actions.SET_CART_DATA,
    payload
});

export const setCartId = (payload: string) => ({
    type: actions.SET_CART_ID,
    payload
});

export const setCheckoutToken = (payload: any) => ({
    type: actions.SET_CHECKOUT_TOKEN,
    payload
});

export const setTotal = (payload: number) => ({
    type: actions.SET_TOTAL,
    payload
});
