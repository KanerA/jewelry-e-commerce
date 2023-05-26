import React, { useState } from 'react';
import DropdownSelector from './DropdownSelector';
import { TDropdownOptions } from '../store/types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCartData } from '../store/selectors';
import { useDispatch } from 'react-redux';
import { setTotal } from '../store/actions';

const calculateCartSubTotal = (cartProducts: any): number => {
    let total: number = 0;
    cartProducts.forEach((val: any) => total += val.price.raw * val.quantity);
    return total;
};


const CartSummary = (props: any) => {
    const [shipmentCost, setShipmentCost] = useState<number>(0);
    const cartProducts = useSelector(getCartData);
    const cartSubTotal = calculateCartSubTotal(cartProducts);
    const dispatch = useDispatch();

    const shipmentOptions: TDropdownOptions[] = [];

    const calculateShipmentCost = (): void => {
        setShipmentCost(0);
    };

    const calculateTotalSum = (): number => {
        const total: number = shipmentCost + cartSubTotal;
        dispatch(setTotal(total));
        return total;
    };

    return (
        <aside className="orderSummary">
            <div id="summaryTitle">סיכום הזמנה</div>
            <div id="summaryMain">
                <div id="currentSubTotalContainer">
                    <span id="currentSubTotal">{cartSubTotal}</span>
                    <span id="currentItemsSumTitle">סכום ביניים</span>
                </div>
                <div id="shipmentPriceContainer">
                    <span id="shipmentCost">{shipmentCost}</span>
                    <span id="shipmentSummaryTitle">משלוח</span>
                </div>
                <div id="shipmentOptions">
                    <DropdownSelector options={shipmentOptions} placeHolder='assaf' />
                </div>
            </div>
            <div id="summaryTotalAndCheckout">
                <div id="totalContainer">
                    <span id="totalSum">{calculateTotalSum()}</span>
                    <span id="totalTitle">סך הכל</span>
                </div>
            </div>
            <div id="continueToPaymentContainer">
                <Link to="/checkout">
                    <button>Continue To Pay</button>
                </Link>
            </div>
        </aside>
    );
};

export default CartSummary;