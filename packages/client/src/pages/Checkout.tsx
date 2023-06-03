import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getCartId, getCheckoutToken } from '../store/selectors';
import useGenerateCheckoutToken from '../hooks/useGenerateCheckoutToken';
import CheckoutForm from '../components/CheckoutForm';
import useCheckQuantity from '../hooks/useCheckQuantity';
import ShipmentSelection from '../components/ShipmentSelection';
import CheckoutFormNotEditing from '../components/CheckoutFormNotEditing';

export interface IFormState {
    ApartmentNumber: string;
    City: string;
    Country: string;
    Email: string;
    FirstName: string;
    LastName: string;
    MobileNumber: string;
    PostalCode: string;
    StreetName: string;
    Title: string;
}

const Checkout = () => {
    const cartId = useSelector(getCartId);
    const generateChktToken = useGenerateCheckoutToken(cartId);
    const checkItemQuantity = useCheckQuantity();

    const [quantityChecks, setQuantityChecks] = useState<any[]>([]);
    const [formData, setFormData] = useState<IFormState | null>(null);
    const [isEditingForm, setIsEditingForm] = useState<boolean>(true);

    const onSubmit = (data: any) => {
        console.log("form data", { data, timestamp: new Date() })
        setFormData(data);
        setIsEditingForm(false);
    };

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

    }, [window])

    // useEffect(() => {
    //     if (!checkoutToken) return;
    //     const asyncFunc = async () => {
    //         const promises = checkoutToken?.line_items?.map(async (val: any) => new Promise(async (resolve, reject) => {
    //             try {
    //                 const a = await checkItemQuantity(val);
    //                 resolve(a)
    //             } catch (err) {
    //                 return reject(err)
    //             }
    //         }));
    //         const responses = await Promise.all(promises ? promises : []);
    //         if (checkoutToken?.line_items?.length && responses.length) {
    //             setQuantityChecks(responses)
    //         }
    //     }
    //     asyncFunc();
    // }, [checkoutToken]);

    //* unComment for amount checking
    // useEffect(() => { // error message for when the amount chosen cant be delivered, change to something more meaningful
    //     quantityChecks.forEach((val: any) => {
    //         console.log(val[1]);
    //         !val[1] && alert("amount too big of item " + val[0]);
    //     });
    // }, [quantityChecks]);


    return (
        <div className="checkoutPage">
            {isEditingForm && <CheckoutForm onSubmit={onSubmit} />}
            {!isEditingForm && <CheckoutFormNotEditing formData={formData!} setIsEditingForm={setIsEditingForm} />}
            {!isEditingForm && <ShipmentSelection />}
        </div>
    );
};

export default Checkout;