import { IInitialState } from "./types";

const initialState: IInitialState = {
    products: {
        rings: [],
        bracelets: [],
        necklaces: [],
        earrings: [],
    },
    orderDetails: {
        client: {
            address: "",
            city: "",
            fullName: "",
            phoneNumber: "",
        },
        products: {},
        shippingMethod: "selfPickup"
    },
    favorites: [],
    cart: [],
    cartId: null,
    checkoutToken: {},
    total: 0,
    showReturnPolicy: false
};

export default initialState;
