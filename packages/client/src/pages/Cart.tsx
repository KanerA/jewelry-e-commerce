import React from 'react';
import CartSummary from '../components/CartSummary';
import CartMainSection from '../components/CartMainSection';
import { useSelector } from 'react-redux';
import { getCartData } from '../store/selectors';

function Cart(props: any) {
    const cartData = useSelector(getCartData);
    return (
        <div className="cartPage center">
            <CartMainSection cartData={cartData} />
            <CartSummary cartData={cartData} />
        </div>
    );
}

export default Cart;