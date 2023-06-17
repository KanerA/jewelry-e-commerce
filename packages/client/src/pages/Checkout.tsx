import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getCartData, getCartId, getCheckoutToken } from '../store/selectors';
import useGenerateCheckoutToken from '../hooks/useGenerateCheckoutToken';
import CheckoutForm from '../components/CheckoutForm';
import useCheckQuantity from '../hooks/useCheckQuantity';
import ShipmentSelection from '../components/ShipmentSelection';
import CheckoutFormNotEditing from '../components/CheckoutFormNotEditing';
import PaymentMethods from '../components/Payment';
import CheckoutSummaryCard from '../components/CheckoutSummaryCard';

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
};

export type TShipmentOptions = "selfPickup" | "delivery";

const Checkout = () => {
    // selectors
    const cartId = useSelector(getCartId);
    const checkoutToken = useSelector(getCheckoutToken);

    // custom hooks
    const generateChktToken = useGenerateCheckoutToken(cartId);
    const checkItemQuantity = useCheckQuantity();

    // local states
    const [quantityChecks, setQuantityChecks] = useState<any[]>([]);
    const [formData, setFormData] = useState<IFormState | null>(null);
    const [isEditingForm, setIsEditingForm] = useState<boolean>(true);
    const [isEditingShipment, setIsEditingShipment] = useState<boolean>(false);
    const [isPayment, setIsPayment] = useState<boolean>(false);
    const [shipmentOption, setShipmentOption] = useState<TShipmentOptions>('selfPickup');

    const onSubmit = (data: any) => {
        console.log("form data", { data, timestamp: new Date() })
        setFormData(data);
        setIsEditingForm(false);
    };


    useEffect(() => {
        const a = async () => {
            await generateChktToken();
        }
        if (cartId && !checkoutToken.id) {
            a();
        }
    }, [cartId]);

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
        <div className="checkoutPage center">
            <div className="checkoutPageContainer">
                <main>
                    {isEditingForm && <div className="firstStep">
                        <span className="stepTitle firstStepTitle">פרטי משלוח</span>
                        <CheckoutForm onSubmit={onSubmit} />
                    </div>}

                    {(!isEditingForm && !isPayment) && <div className="secondStep">
                        <span className="stepTitle">פרטי משלוח</span>
                        <CheckoutFormNotEditing formData={formData!} setIsEditingForm={setIsEditingForm} setIsPayment={setIsPayment} />
                        <span className="stepTitle">אופן המשלוח</span>
                        <ShipmentSelection shippingCostForSelfPickUp={"חינם"} shippingPriceToAddress={0} setShipmentOption={setShipmentOption} setIsPayment={setIsPayment} />
                    </div>
                    }
                    {
                        isPayment && <div className="thirdStep">
                            <span className="stepTitle">פרטי משלוח</span>
                            <CheckoutFormNotEditing formData={formData!} setIsEditingForm={setIsEditingForm} setIsPayment={setIsPayment} />
                            <div className="shipmentOptionsNotEditing">
                                <span className="stepTitle">אופן המשלוח</span>
                                <div>{shipmentOption}</div>
                            </div>
                            <PaymentMethods />
                        </div>
                    }
                </main>
                <aside>
                    <CheckoutSummaryCard />
                </aside>
            </div>
        </div>
    );
};

export default Checkout;