import { IInitialState } from "./types";

const initialState: IInitialState = {
    products: {
        rings: [],
        bracelets: [],
        necklaces: [],
        earrings: [],
    },
    favorites: [],
    cart: [],
    cartId: null,
    checkoutToken: "",
};

export default initialState;
