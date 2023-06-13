import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";
import { getCartData } from "../store/selectors";
import { useNavigate } from "react-router-dom";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || "";

const PaymentMethods = () => {
    const navigate = useNavigate();

    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);
    const [transactionID, setTransactionID] = useState<string>("");
    const cart = useSelector(getCartData);

    const paypalScriptOptions = { "client-id": CLIENT_ID, currency: "ILS" }

    // creates a paypal order
    const createOrder = (data: any, actions: any) => {
        const orderTotal = cart.reduce((prev: number, cartItem: any) => {
            const a = cartItem.quantity * cartItem.price.raw;
            return a + prev;
        }, 0);
        return actions.order.create({
            currency: "ILS",
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
            setSuccess(true);
            setTransactionID(details.purchase_units?.[0]?.payments?.captures?.[0]?.id);
        });
    };

    //capture likely error
    const onError = (data: any) => {
        setErrorMessage("An Error occured with your payment " + JSON.stringify(data));
    };

    useEffect(() => {
        if (success) {
            console.log('Order successful . Your order id is--', orderID);
            navigate('/thankyou', { state: { orderID, transactionID } });
        }
    }, [success]);

    useEffect(() => {
        if (ErrorMessage) {
            console.log(ErrorMessage);
            alert("An error has occured, refresh and try again")
        }
    });

    return (
        <PayPalScriptProvider options={paypalScriptOptions}>
            <div className="paypalContainer">
                <PayPalButtons
                    style={{ layout: "vertical" }}
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={onError}
                />
            </div>
        </PayPalScriptProvider>
    );
}

export default PaymentMethods