import React from 'react';

const ProductDescription = ({ text }: { text: string }) => {
    return (
        <div className="productDescription">
            <p>{text}</p>
        </div>
    );
};

export default ProductDescription;