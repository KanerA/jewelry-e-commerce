import React from 'react';
import DropdownSelector from './DropdownSelector';



const CartSummary = (props: any) => {
    return (
        <aside className="orderSummary">
            <div id="summaryTitle">סיכום הזמנה</div>
            <div id="currentItemsSum"></div>
            <div id="shipmentPrice"></div>
            <div id="shipmentOptions">
                <DropdownSelector options={[]} placeHolder='assaf' />
            </div>
        </aside>
    );
};

export default CartSummary;