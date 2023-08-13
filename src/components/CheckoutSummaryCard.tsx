import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getCartData, getCheckoutTotal } from '../store/selectors';
import CheckoutSummaryItem from './CheckoutSummaryItem';
import { TProduct } from '../store/types';
import { BiShekel } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { TShipmentOptions } from '../pages/Checkout';

const CheckoutSummaryCard = ({ shipmentOption, shipmentCost }: { shipmentOption: TShipmentOptions, shipmentCost: number }) => {
    const cartData = useSelector(getCartData);
    const total = useSelector(getCheckoutTotal);

    const [totalPlusShipment, setTotalPlusShipment] = useState(total);


    useEffect(() => {
        shipmentOption === 'delivery' ?
            setTotalPlusShipment(shipmentCost + total) :
            setTotalPlusShipment(total)
    }, [shipmentOption, shipmentCost, total]);

    return (
        <div className="checkoutSummaryContainer">
            <div className="checkoutSummaryTitleContainer">
                <span className="checkoutSummaryTitle">סיכום הזמנה</span>
                <span className='returnToEditCart'><Link to="/cart">לעריכת הסל</Link></span> {/* TODO: Link to cart */}
            </div>
            <div className="checkoutSummaryItemsContainer">
                {
                    cartData.map((val: TProduct) => {
                        return <CheckoutSummaryItem item={val} qty={val.quantity} />
                    })
                }
            </div>
            <div className="checkoutSummaryPaymentData">
                <div id="currentSubTotalContainer">
                    <span id="currentItemsSumTitle">סכום ביניים</span>
                    <span id="currentSubTotal" className='center'>{total}<BiShekel /></span>
                </div>
                <div id="shipmentPriceContainer">
                    <span id="shipmentSummaryTitle">משלוח</span>
                    <span id="shipmentCost" className='center'>{shipmentOption === 'delivery' ? shipmentCost : 0}<BiShekel /></span>
                </div>
            </div>
            <div className="checkoutTotal">
                <span className="checkoutTotalTitle">סך הכל:</span>
                <span className="checkoutTotalValue center">{totalPlusShipment}<BiShekel /></span>
            </div>
        </div>
    );
};

export default CheckoutSummaryCard;