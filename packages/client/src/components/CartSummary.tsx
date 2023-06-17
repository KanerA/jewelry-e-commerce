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
                    <span id="currentItemsSumTitle">סכום ביניים</span>
                    <span id="currentSubTotal">{cartSubTotal}</span>
                </div>
                <div id="shipmentPriceContainer">
                    <span id="shipmentSummaryTitle">משלוח</span>
                    <span id="shipmentCost">{0}</span>
                </div>
                <div id="shipmentOptions">
                    <DropdownSelector options={shipmentOptions} placeHolder='אופציות משלוח' />
                </div>
            </div>
            <div id="summaryTotalAndCheckout">
                <span id="totalTitle">סך הכל</span>
                <span id="totalSum">{total}</span>

            </div>
            {
                props.cartData.length === 0 ? <div className="checkoutButton center disabled">העגלה ריקה</div> :
                    <Link to="/checkout" >
                        <div className="checkoutButton center">
                            מעבר לתשלום
                        </div>
                    </Link>
            }
        </aside>
    );
};

export default CartSummary;