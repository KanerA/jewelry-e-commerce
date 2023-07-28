import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import { getCartData, getCheckoutTotal, getOrderDetails } from "../store/selectors";
import { TProduct } from "../store/types";
import useEmptyCart from "../hooks/useEmptyCart";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID || "";

const PaymentMethods = ({ shippingCost }: { shippingCost: number }) => {
    const navigate = useNavigate();

    const emptyCart = useEmptyCart();

    const cart = useSelector(getCartData);
    const orderDetails = useSelector(getOrderDetails);
    const checkoutTotal = useSelector(getCheckoutTotal);

    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState("");
    const [transactionID, setTransactionID] = useState<string>("");

    const paypalScriptOptions = { "client-id": CLIENT_ID, currency: "ILS" };
    emailjs.init("-vZorVfC1fpO_apTn");

    // creates a paypal order
    const createOrder = (data: any, actions: any) => {
        return actions.order.create({
            currency: "ILS",
            purchase_units: [
                {
                    description: "kama jewelry",
                    amount: {
                        currency_code: "ILS",
                        value: checkoutTotal + shippingCost,
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

            cart.map((item: TProduct) =>
                orderString += `${item.product_meta.nameEnglish} - ${item.quantity} - size: ${item.selected_options[0]?.option_name} \n`);
            try {
                // send mail with {orderDetails}
                emailjs.send(
                    "service_agkbf8f",
                    "template_zrn6mbs",
                    {
                        client_name: orderDetails.client.fullName,
                        client_address: orderDetails.client.address + ", " + orderDetails.client.city,
                        phone_number: orderDetails.client.phoneNumber,
                        order_total: checkoutTotal + shippingCost,
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
