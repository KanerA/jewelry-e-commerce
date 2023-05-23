import React from 'react';
import DropdownSelector from './DropdownSelector';
import { TDropdownOptions } from '../store/types';
import { Link } from 'react-router-dom';


const CartSummary = (props: any) => {
    const shipmentOptions: TDropdownOptions[] = [];
    const calculateCurrentSum = (): number => {
        return 0;
    };

    const calculateShipmentCost = (): number => {
        return 0;
    };

    const calculateTotalSum = (): number => {
        return 0;
    };

    return (
        <aside className="orderSummary">
            <div id="summaryTitle">סיכום הזמנה</div>
            <div id="summaryMain">
                <div id="currentItemsSumContainer">
                    <span id="currentItemsSum">{calculateCurrentSum()}</span>
                    <span id="currentItemsSumTitle">סכום ביניים</span>
                </div>
                <div id="shipmentPriceContainer">
                    <span id="shipmentPrice">{calculateShipmentCost()}</span>
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