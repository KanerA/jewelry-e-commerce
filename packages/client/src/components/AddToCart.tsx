import React from 'react';

const AddToCart = (props: { onCartClick: any, isAdded: boolean }) => {
    return (
        <div className="addToCartContainer">
            <button disabled={props.isAdded} onClick={props.onCartClick}>{props.isAdded ? "Added To Cart" : "Add To Cart"}</button>
        </div>
    );
};

export default AddToCart;