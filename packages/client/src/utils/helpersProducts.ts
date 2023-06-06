import { IInitialState } from "../store/types";

export const spreadProductsState = (products: IInitialState["products"]) => [
    ...products.bracelets,
    ...products.rings,
    ...products.necklaces,
    ...products.earrings
];