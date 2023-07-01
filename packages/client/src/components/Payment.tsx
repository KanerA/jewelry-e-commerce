import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import { getCartData, getOrderDetails } from "../store/selectors";
import { TProduct } from "../store/types";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || "";

const PaymentMethods = ({ shippingCost, clientName, phoneNumber, address }: { shippingCost: number, clientName: string, phoneNumber: string, address: string }) => {
    const navigate = useNavigate();

    const orderDetails = useSelector(getOrderDetails);

    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);
    const [transactionID, setTransactionID] = useState<string>("");
    const [orderTotal, setOrderTotal] = useState<number>(0);
    const cart = useSelector(getCartData);

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
            cart.map((item: TProduct) => orderString += `${item.product_meta.nameEnglish} - ${item.quantity} \n`);
            try {
                // send mail with {orderDetails}
                emailjs.send(
                    "service",
                    "template",
                    {
                        client_name: clientName,
                        client_address: address,
                        phone_number: phoneNumber,
                        order_total: orderTotal,
                        order_products: orderString
                    })
                setSuccess(true);
                setTransactionID(details.purchase_units?.[0]?.payments?.captures?.[0]?.id);
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
