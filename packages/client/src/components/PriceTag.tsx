import React from 'react';

const PriceTag = ({ price }: { price: number }) => {
    const defaultCurrencyIcon = <span>&#8362;</span>;
    return (
        <div className="itemPrice">{price}{defaultCurrencyIcon}</div>
    );
};

export default PriceTag;