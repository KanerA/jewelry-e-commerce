import React from 'react';
import ProductsGallery, { TProductType } from '../components/ProductsGallery';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getProductsData } from '../store/selectors';

function ProductType() {
    const location = useLocation().pathname.split('/')[1] as unknown as TProductType;
    const allProducts = useSelector(getProductsData);
    return (
        <div>
            <ProductsGallery productType={location} products={allProducts[location]} key={`gallery-${location}`} />
        </div>
    );
}

export default ProductType;