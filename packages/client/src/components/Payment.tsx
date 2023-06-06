// import React from 'react';

// const PaymentMethods = () => {
//     return (
//         <div className="paymentMethodsContainer">
//             <div id="methodOne" className="methodContainer">paypal</div>
//             <div id="methodTwo" className="methodContainer">credit card</div>
//         </div>
//     );
// };

// export default PaymentMethods;

import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";
import { getCartData } from "../store/selectors";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || "";

const PaymentMethods = () => {
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);
    const cart = useSelector(getCartData);

    console.log(cart);

    // creates a paypal order
    const createOrder = (data: any, actions: any) => {
        const orderTotal = cart.reduce((prev: number, cartItem: any) => {
            const a = cartItem.quantity * cartItem.price.raw;
            return a + prev;
        }, 0);
        console.log(data)
        return actions.order.create({
            purchase_units: [
                {
                    description: "kama jewelry",
                    amount: {
                        currency_code: "ILS",
                        value: orderTotal,
                    },
                },
            ],
        }).then((orderID: any) => {
            setOrderID(orderID);
            return orderID;
        });
    };

    // check Approval
    const onApprove = (data: any, actions: any) => {
        return actions.order.capture().then(function (details: any) {
            const { payer } = details;
            setSuccess(true);
        });
    };

    //capture likely error
    const onError = (data: any, actions: any) => {
        setErrorMessage("An Error occured with your payment ");
    };

    useEffect(() => {
        if (success) {
            alert("Payment successful!!");
            console.log('Order successful . Your order id is--', orderID);
        }
    }, [success]);

    return (
        <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
            <div>
                <PayPalButtons
                    style={{ layout: "vertical" }}
                    createOrder={createOrder}
                    onApprove={onApprove}
                />
            </div>
        </PayPalScriptProvider>
    );
}

export default PaymentMethods