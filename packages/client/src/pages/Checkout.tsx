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
import { useDispatch } from 'react-redux';
import { setOrderDetails } from '../store/actions';
import { IOrderDetailsUpdate, TProduct } from '../store/types';
import ShipmentOptionsNotEditing from './ShipmentOptionsNotEditing';

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
    const dispatch = useDispatch();

    // selectors
    const cartId = useSelector(getCartId);
    const cart = useSelector(getCartData);
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

    const shipmentCost = 35; // shipment  cost to clients address

    const onSubmit = (data: any) => {
        console.log(data)
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

    useEffect(() => {
        const formatClientOrderDetails = (): IOrderDetailsUpdate["client"] => {
            return {
                fullName: formData?.FirstName + " " + formData?.LastName,
                address: formData?.StreetName + " " + formData?.ApartmentNumber + " " + formData?.PostalCode,
                city: formData?.City ?? "",
                phoneNumber: formData?.MobileNumber ?? ""

            }
        };

        const formatProductsOrderDetails = (): IOrderDetailsUpdate["products"] => {
            const objects: IOrderDetailsUpdate["products"] = {};
            cart.forEach((item: TProduct) => {
                objects[item.product_meta.nameEnglish] = {
                    quantity: item.quantity
                }
            });
            return objects;
        }

        const finalOrderFormat: IOrderDetailsUpdate = {
            client: formatClientOrderDetails(),
            products: formatProductsOrderDetails(),
            shippingMethod: shipmentOption
        }

        dispatch(setOrderDetails(finalOrderFormat))
    }, [formData, cart])

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
                        <ShipmentSelection shippingCostForSelfPickUp={"חינם"} shippingPriceToAddress={shipmentCost} setShipmentOption={setShipmentOption} setIsPayment={setIsPayment} />
                    </div>
                    }
                    {
                        isPayment && <div className="thirdStep">
                            <span className="stepTitle">פרטי משלוח</span>
                            <CheckoutFormNotEditing formData={formData!} setIsEditingForm={setIsEditingForm} setIsPayment={setIsPayment} />
                            <ShipmentOptionsNotEditing setIsEditingForm={setIsEditingForm} setIsPayment={setIsPayment} shipmentOption={shipmentOption} />
                            <PaymentMethods
                                key="paymentButtons"
                                shippingCost={shipmentOption === 'delivery' ? shipmentCost : 0}
                            />
                        </div>
                    }
                </main>
                <aside>
                    <CheckoutSummaryCard shipmentOption={shipmentOption} shipmentCost={shipmentCost} />
                </aside>
            </div>
        </div>
    );
};

export default Checkout;