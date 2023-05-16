export type TProduct = {
    imageSrc: string; // image path inside src folder
    name: string;
    price: number;
    description: string;
    // alt prop 
}

export interface IInitialState {
    favorites: TProduct[]
    cart: TProduct[]

}