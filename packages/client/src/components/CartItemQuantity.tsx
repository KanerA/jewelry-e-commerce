import { CircularProgress } from '@mui/material';
import React from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';

interface ICartItemQuantityProps {
    onAddClick: any,
    onLessClick: any,
    quantity: number,
    isLoadingQuantity: boolean
}

const CartItemQuantity = ({ onAddClick, onLessClick, quantity, isLoadingQuantity }: ICartItemQuantityProps) => {
    return (
        <div className="qtyContainer">
            <div
                className="cartQuantityButton"
                onClick={onAddClick}
            >
                <AiOutlinePlusCircle />
            </div>
            {
                isLoadingQuantity
                    ? <CircularProgress size={20} color="inherit" />
                    : <div>{quantity}</div>
            }
            <div
                className="cartQuantityButton"
                onClick={onLessClick}
            >
                <AiOutlineMinusCircle />
            </div>
        </div>
    );
};

export default CartItemQuantity;