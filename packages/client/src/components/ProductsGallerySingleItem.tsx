import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import PriceTag from './PriceTag';
import AddToCart from './AddToCart';
import FavoriteIcon from './FavoriteIcon';
import * as actions from '../store/actionTypes';

export type TSingleGalleryProduct = {
    imageSrc: string; // image path inside src folder
    name: string;
    price: number;
    description: string;
    // alt prop 
}

const ProductsGallerySingleItem = (props: TSingleGalleryProduct) => {
    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const onFavoriteClick = (e: any) => {
        !isFavorite ? dispatch({ type: actions.ADD_FAVORITE_ITEM, payload: props }) : dispatch({ type: actions.REMOVE_FAVORITE_ITEM, payload: props });
        setIsFavorite(prev => !prev);
    };
    return (
        <div className="gallerySingleItem">
            <div className="imageContainer"> {/* TODO: change alt prop */}
                <img
                    className="singleImage"
                    style={{
                        width: "150px",

                    }}
                    src={require("../" + props.imageSrc)} alt="some picture"
                />
                <FavoriteIcon onClick={onFavoriteClick} isFavorite={isFavorite} />
            </div>
            <div className="itemName">{props.name}</div>
            <PriceTag price={props.price} />
            <AddToCart />
        </div>
    );
};

export default ProductsGallerySingleItem;