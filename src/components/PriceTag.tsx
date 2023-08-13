import React from 'react';

const PriceTag = ({ price }: { price: string }) => {

    return (
        <div className="itemPrice">{price}</div>
    );
};

export default PriceTag;