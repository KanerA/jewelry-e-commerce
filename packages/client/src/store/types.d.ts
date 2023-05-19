export type TProduct = {
    imageSrc: string; // image path inside src folder
    name: string;
    price: number;
    description: string;
    nameEnglish?: string;
    sizes?: number[];
    // alt prop 
    // engravingOption
    // productsImages
}

export interface IInitialState {
    products: {
        rings: any[],
        bracelets: any[],
        necklaces: any[],
        earrings: any[],
    },
    favorites: TProduct[]
    cart: TProduct[]
}