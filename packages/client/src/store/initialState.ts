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
};

export default initialState;
