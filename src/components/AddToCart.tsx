import React from 'react';

const AddToCart = (props: { onCartClick: any, isAddingToCart: boolean }) => {
    return (
        <div className="addToCartContainer">
            <button
                disabled={props.isAddingToCart}
                onClick={props.onCartClick}
            >
                {props.isAddingToCart ? "Adding To Cart" : "Add To Cart"}
            </button>
        </div>
    );
};

export default AddToCart;