import React from 'react';

const AddToCart = (props: { onCartClick: any }) => {
    return (
        <div className="addToCartContainer">
            <button onClick={props.onCartClick}>Add To Cart</button>
        </div>
    );
};

export default AddToCart;