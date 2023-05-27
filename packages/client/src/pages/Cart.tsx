import React from 'react';
import CartSummary from '../components/CartSummary';
import CartMainSection from '../components/CartMainSection';
import { useSelector } from 'react-redux';
import { getCartData } from '../store/selectors';

function Cart(props: any) {
    const cartData = useSelector(getCartData);
    console.log(cartData)
    return (
        <div className="cartPage">
            <CartMainSection cartData={cartData} />
            <CartSummary cartData={cartData} />
        </div>
    );
}

export default Cart;