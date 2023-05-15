import React from 'react';
import ProductsGallerySingleItem, { TSingleGalleryProduct } from './ProductsGallerySingleItem';

export type TProductType = "Rings" | "Earrings" | "Necklaces" | "Bracelets";

interface IProductGalleryProps {
    productType: TProductType;
    products: TSingleGalleryProduct[]
}

const ProductsGallery = (props: IProductGalleryProps) => {
    if (props.products.length === 0) {
        return <div>
            No Products To Show At The Moment!
        </div>;
    }

    return (
        <div id={props.productType} className="productsGallery">
            {props.products.map((product, index) => <ProductsGallerySingleItem price={product.price} description={product.description} imageSrc={product.imageSrc} name={product.name} key={`product-${index}`} />)}
        </div>
    );
};

export default ProductsGallery;