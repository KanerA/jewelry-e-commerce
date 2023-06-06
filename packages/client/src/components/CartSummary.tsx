import React, { useState, useEffect } from 'react';
import DropdownSelector from './DropdownSelector';
import { TDropdownOptions, TProduct } from '../store/types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTotal } from '../store/actions';
import { useSelector } from 'react-redux';
import { getCheckoutTotal } from '../store/selectors';

interface ICartSummaryProps {
    cartData: TProduct[];
}

const calculateCartSubTotal = (cartProducts: any): number => {
    let total: number = 0;
    cartProducts.forEach((val: any) => total += val.price.raw * val.quantity);
    return total;
};


const CartSummary = (props: ICartSummaryProps) => {
    const [shipmentCost, setShipmentCost] = useState<number>(0);
    const cartSubTotal = calculateCartSubTotal(props.cartData);
    const total = useSelector(getCheckoutTotal);
    const dispatch = useDispatch();

    const shipmentOptions: TDropdownOptions[] = [];

    // const calculateShipmentCost = (): void => {
    //     setShipmentCost(0);
    // };

    const calculateTotalSum = (): void => {
        const total: number = shipmentCost + cartSubTotal;
        dispatch(setTotal(total));
    };

    useEffect(() => {
        calculateTotalSum();
    }, [cartSubTotal, shipmentCost]);

    return (
        <aside className="orderSummary">
            <div id="summaryTitle">סיכום הזמנה</div>
            <div id="summaryMain">
                <div id="currentSubTotalContainer">
                    <span id="currentSubTotal">{cartSubTotal}</span>
                    <span id="currentItemsSumTitle">סכום ביניים</span>
                </div>
                <div id="shipmentPriceContainer">
                    <span id="shipmentCost">{0}</span>
                    <span id="shipmentSummaryTitle">משלוח</span>
                </div>
                <div id="shipmentOptions">
                    <DropdownSelector options={shipmentOptions} placeHolder='אופציות משלוח' />
                </div>
            </div>
            <div id="summaryTotalAndCheckout">
                <div id="totalContainer">
                    <span id="totalSum">{total}</span>
                    <span id="totalTitle">סך הכל</span>
                </div>
            </div>
            <div id="continueToPaymentContainer">
                {
                    props.cartData.length === 0 ? <button disabled>Cart Is Empty</button> :
                        <Link to="/checkout" >
                            <button>Continue To Pay</button>
                        </Link>
                }
            </div>
        </aside>
    );
};

export default CartSummary;