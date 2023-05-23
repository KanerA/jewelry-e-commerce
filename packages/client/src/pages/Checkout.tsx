import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getCartId, getCheckoutToken } from '../store/selectors';
import useGenerateCheckoutToken from '../hooks/useGenerateCheckoutToken';

const Checkout = () => {
    const cartId = useSelector(getCartId);
    const checkoutToken = useSelector(getCheckoutToken);
    const generateChktToken = useGenerateCheckoutToken(cartId);

    useEffect(() => {
        const a = async () => {
            await generateChktToken();
        }
        if (cartId && !checkoutToken) {
            a();
        }
    }, [cartId]);


    return (
        <div className="checkoutPage">

        </div>
    );
};

export default Checkout;