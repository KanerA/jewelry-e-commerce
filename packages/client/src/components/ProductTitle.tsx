import React from 'react';

const ProductTitle = ({ name }: { name: string }) => {
    return (
        <div className='productTitle'>
            <h1>{name}</h1>
        </div>
    );
};

export default ProductTitle;