import React from 'react';
import ProductsGallerySingleItem from './ProductsGallerySingleItem';
import { TProduct } from '../store/types';

export type TProductType = "rings" | "earrings" | "necklaces" | "bracelets";

interface IProductGalleryProps {
    productType: TProductType;
    products: TProduct[];
}

const ProductsGallery = (props: IProductGalleryProps) => {
    const formatVariantsToSizes = (product: TProduct) => {
        const variantGroup = product?.variant_groups?.find((group: any) => group.name === "Size");
        const options = variantGroup?.options.map((option: any) => option.name) ?? [];
        return options;
    };

    const findVariant = (size: number, variantGroup: any) => {
        const variantOptionId = variantGroup?.options?.find((option: any) => option.name === size)?.id;
        return variantOptionId;
    };

    if (props.products.length === 0) {
        return <div className="noProductsToShow center">
            No Products To Show At The Moment!
        </div>;
    }

    return (
        <div id={props.productType} className="productsGallery">
            {props.products.map((product, index) => {
                const sizeOptions = formatVariantsToSizes(product);
                const variantGroup = product?.variant_groups?.find((group: any) => group.name === "Size");
                return <ProductsGallerySingleItem
                    id={product.id}
                    price={product.price}
                    description={product.description}
                    imageSrc={product.image.url}
                    name={product.name}
                    nameEnglish={product.meta?.nameEnglish}
                    sizes={sizeOptions}
                    variantGroup={variantGroup}
                    findVariant={findVariant}
                    key={`product-${index}`}
                />
            })}
        </div>
    );
};

export default ProductsGallery;