import React from 'react';

const ProductDescription = ({ text }: { text: string }) => {
    return (
        <div className="productDescription">
            {text}
        </div>
    );
};

export default ProductDescription;