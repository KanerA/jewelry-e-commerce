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