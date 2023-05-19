export type TProduct = {
    id: string;
    name: string;
    price: {
        "raw": number,
        "formatted": string,
        "formatted_with_symbol": string
        "formatted_with_code": string
    };
    description: string;
    meta: {
        nameEnglish: string;
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
    favorites: TProduct[]
    cart: TProduct[]
}