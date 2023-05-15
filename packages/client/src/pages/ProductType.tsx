import React from 'react';
import ProductsGallery, { TProductType } from '../components/ProductsGallery';

function ProductType(props: { products: any[], productType: TProductType }) {
    return (
        <div>
            <ProductsGallery productType={props.productType} products={props.products} key={`gallery-${props.productType}`} />
        </div>
    );
}

export default ProductType;