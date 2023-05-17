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
    favorites: TProduct[]
    cart: TProduct[]
}