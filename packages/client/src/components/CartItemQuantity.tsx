import React from 'react';

const CartItemQuantity = ({ onAddClick, onLessClick, quantity }: { onAddClick: any, onLessClick: any, quantity: number }) => {
    return (
        <div className="qtyContainer">
            <div onClick={onAddClick}>+</div>
            <div>{quantity}</div>
            <div onClick={onLessClick}>-</div>
        </div>
    );
};

export default CartItemQuantity;