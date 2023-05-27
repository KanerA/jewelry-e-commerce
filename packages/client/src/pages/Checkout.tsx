import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getCartId, getCheckoutToken } from '../store/selectors';
import useGenerateCheckoutToken from '../hooks/useGenerateCheckoutToken';
import CheckoutForm from '../components/CheckoutForm';
import useCheckQuantity from '../hooks/useCheckQuantity';

const Checkout = () => {
    const cartId = useSelector(getCartId);
    const generateChktToken = useGenerateCheckoutToken(cartId);
    const checkItemQuantity = useCheckQuantity();

    // selectors
    const checkoutToken = useSelector(getCheckoutToken);

    useEffect(() => {
        const a = async () => {
            await generateChktToken();
        }
        if (cartId && !checkoutToken.id) {
            a();
        }
    }, [cartId]);

    useEffect(() => {
        if (!checkoutToken) return;
        checkoutToken?.line_items?.forEach((val: any, index: number) => {
            console.log(val)
            checkItemQuantity(val, index);
        });
    }, [checkoutToken])


    return (
        <div className="checkoutPage">
            <CheckoutForm />
        </div>
    );
};

export default Checkout;