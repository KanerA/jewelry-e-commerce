import React from 'react';
import ProductsGallerySingleItem from './ProductsGallerySingleItem';
import { TProduct } from '../store/types';

export type TProductType = "rings" | "earrings" | "necklaces" | "bracelets";

interface IProductGalleryProps {
    productType: TProductType;
    products: TProduct[];
}

const ProductsGallery = (props: IProductGalleryProps) => {
    if (props.products.length === 0) {
        return <div className="noProductsToShow center">
            No Products To Show At The Moment!
        </div>;
    }

    return (
        <div id={props.productType} className="productsGallery">
            {props.products.map((product, index) =>
                <ProductsGallerySingleItem
                    id={product.id}
                    price={product.price}
                    description={product.description}
                    imageSrc={product.image.url}
                    name={product.name}
                    nameEnglish={product.meta?.nameEnglish}
                    key={`product-${index}`}
                />
            )}
        </div>
    );
};

export default ProductsGallery;