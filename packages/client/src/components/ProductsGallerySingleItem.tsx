import React, { useState } from 'react';
import PriceTag from './PriceTag';
import FavoriteIcon from './FavoriteIcon';
import AddToCart from './AddToCart';

export type TSingleGalleryProduct = {
    imageSrc: string; // image path inside src folder
    name: string;
    price: number;
    description: string;
    // alt prop 
}

const ProductsGallerySingleItem = (props: TSingleGalleryProduct) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const onFavoriteClick = (props: any) => setIsFavorite(prev => !prev);
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