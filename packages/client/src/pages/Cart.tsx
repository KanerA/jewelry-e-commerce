import React from 'react';
import CartSummary from '../components/CartSummary';
import CartMainSection from '../components/CartMainSection';

function Cart(props: any) {
    return (
        <div className="cartPage">
            <CartMainSection />
            <CartSummary />
        </div>
    );
}

export default Cart;