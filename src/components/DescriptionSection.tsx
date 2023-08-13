import React from 'react';
import ProductTitle from './ProductTitle';
import ProductDescription from './ProductDescription';
import { TProduct } from '../store/types';

const DescriptionSection = ({ product }: { product: TProduct }) => {
    return (
        <div className='productDescriptionSection center'>
            <ProductTitle name={product.meta.nameEnglish} />
            <ProductDescription text={product.description} />
        </div>
    );
};

export default DescriptionSection;