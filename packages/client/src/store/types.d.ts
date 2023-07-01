import { TShipmentOptions } from "../pages/Checkout";

export type Price = {
    raw: number,
    formatted: string,
    formatted_with_symbol: string
    formatted_with_code: string
}
export type TProduct = {
    id: string;
    name: string;
    price: Price;
    description: string;
    meta: {
        nameEnglish: string;
        sizes?: number[];
        [x: string]: any;
    };
    image: {
        id: string;
        url: string;
        [x: string]: any
    };
    [x: string]: any;
    // alt prop 
    // engravingOption
    // productsImages
}

export interface IInitialState {
    products: {
        rings: TProduct[],
        bracelets: TProduct[],
        necklaces: TProduct[],
        earrings: TProduct[],
    },
    orderDetails: {
        client: {
            fullName: string,
            address: string,
            city: string,
            phoneNumber: string,
        },
        products: {
            [item: string]: {
                quantity: number,
            }
        },
        shippingMethod: TShipmentOptions
    },
    favorites: string[],
    cart: TProduct[],
    cartId: string | null,
    checkoutToken: any,
    total: number,
    showReturnPolicy: boolean
}

export interface IOrderDetailsUpdate {
    client?: {
        fullName: string,
        address: string,
        city: string,
        phoneNumber: string,
    },
    products?: {
        [item: string]: {
            quantity: number,
        }
    },
    shippingMethod?: TShipmentOptions
}


export type TDropdownOptions = number | string;
