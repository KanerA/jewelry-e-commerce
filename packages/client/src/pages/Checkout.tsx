import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getCartId, getCheckoutToken } from '../store/selectors';
import useGenerateCheckoutToken from '../hooks/useGenerateCheckoutToken';
import CheckoutForm from '../components/CheckoutForm';
import useCheckQuantity from '../hooks/useCheckQuantity';

const Checkout = () => {
    const cartId = useSelector(getCartId);
    const generateChktToken = useGenerateCheckoutToken(cartId);
    const checkItemQuantity = useCheckQuantity();

    const [quantityChecks, setQuantityChecks] = useState<any[]>([]);

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
        const asyncFunc = async () => {
            const promises = checkoutToken?.line_items?.map(async (val: any) => new Promise(async (resolve, reject) => {
                try {
                    const a = await checkItemQuantity(val);
                    console.log(a);
                    resolve(a)
                } catch (err) {
                    return reject(err)
                }
            }));
            const responses = await Promise.all(promises ? promises : []);
            if (checkoutToken?.line_items?.length && responses.length) {
                setQuantityChecks(responses)
            }
        }
        asyncFunc();
    }, [checkoutToken]);

    useEffect(() => { // error message for when the amount chosen cant be delivered, change to something more meaningful
        quantityChecks.forEach((val: any) => {
            console.log(val[1]);
            !val[1] && alert("amount too big of item " + val[0]);
        });
    }, [quantityChecks]);


    return (
        <div className="checkoutPage">
            <CheckoutForm />
        </div>
    );
};

export default Checkout;