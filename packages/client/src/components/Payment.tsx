import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import { getCartData, getOrderDetails } from "../store/selectors";
import { TProduct } from "../store/types";
import useEmptyCart from "../hooks/useEmptyCart";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || "";

const PaymentMethods = ({ shippingCost }: { shippingCost: number }) => {
    const navigate = useNavigate();

    const emptyCart = useEmptyCart();

    const cart = useSelector(getCartData);
    const orderDetails = useSelector(getOrderDetails);

    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState("");
    const [transactionID, setTransactionID] = useState<string>("");
    const [orderTotal, setOrderTotal] = useState<number>(0);

    const paypalScriptOptions = { "client-id": CLIENT_ID, currency: "ILS" };
    emailjs.init("publicKey");

    // creates a paypal order
    const createOrder = (data: any, actions: any) => {

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
            let orderString = "";
            const transactionId = details.purchase_units?.[0]?.payments?.captures?.[0]?.id;
            cart.map((item: TProduct) => orderString += `${item.product_meta.nameEnglish} - ${item.quantity} \n`);
            try {
                // send mail with {orderDetails}
                emailjs.send(
                    "service",
                    "template",
                    {
                        client_name: orderDetails.client.fullName,
                        client_address: orderDetails.client.address + ", " + orderDetails.client.city,
                        phone_number: orderDetails.client.phoneNumber,
                        order_total: orderTotal,
                        order_products: orderString,
                        shipping_method: orderDetails.shippingMethod,
                        order_id: orderID,
                        transaction_id: transactionId
                    })
                setSuccess(true);
                setTransactionID(transactionId);
                emptyCart();
            } catch (err) {
                console.log(err);
            }

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

    useEffect(() => {
        const temp = cart.reduce((prev: number, cartItem: any) => {
            const a = cartItem.quantity * cartItem.price.raw;
            return a + prev;
        }, shippingCost);
        setOrderTotal(temp);
    }, [cart])

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

export default PaymentMethods;
