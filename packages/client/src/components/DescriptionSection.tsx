import React from 'react';
import ProductTitle from './ProductTitle';
import ProductDescription from './ProductDescription';
import { TProduct } from '../store/types';

const DescriptionSection = ({ product }: { product: TProduct }) => {
    return (
        <div className='productDescriptionSection'>
            <ProductTitle name={product.name} />
            <ProductDescription text={product.description} />
        </div>
    );
};

export default DescriptionSection;