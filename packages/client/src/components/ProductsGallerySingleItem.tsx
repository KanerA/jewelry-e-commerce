import React from 'react';

export type TSingleGalleryProduct = {
    imageSrc: string; // image path inside src folder
    name: string;
    price: number;
    description: string;
    // alt prop 
}

const ProductsGallerySingleItem = (props: TSingleGalleryProduct) => {
    return (
        <div className="gallerySingleItem">
            <div className="imageContainer"> {/* TODO: change alt prop */}
                <img className="singleImage" style={{
                    width: "150px",

                }} src={require("../" + props.imageSrc)} alt="some picture" />
            </div>
            <div className="itemName">{props.name}</div>
            <div className="itemPrice">{props.price}</div>
            <div className="itemDescription">{props.description}</div>
        </div>
    );
};

export default ProductsGallerySingleItem;