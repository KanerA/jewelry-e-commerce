import React from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

const CartItemQuantity = ({ onAddClick, onLessClick, quantity }: { onAddClick: any, onLessClick: any, quantity: number }) => {
    return (
        <div className="qtyContainer">
            <div className="cartQuantityButton" onClick={onAddClick}><AiOutlinePlusCircle /></div>
            <div>{quantity}</div>
            <div className="cartQuantityButton" onClick={onLessClick}><AiOutlineMinusCircle /></div>
        </div>
    );
};

export default CartItemQuantity;