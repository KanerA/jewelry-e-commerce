import React from 'react';
import { TProduct } from '../store/types';
import { BiShekel } from 'react-icons/bi';

interface IProps {
    item: TProduct;
    qty: number;
}

const CheckoutSummaryItem = ({ item, qty }: IProps) => {
    return (
        <div className="checkoutSummaryItem">
            <div className='itemMain'>
                <div className="checkoutSummaryItemImage">
                    <img src={item?.image?.url} alt={item?.name} />
                </div>
                <div className="checkoutSummaryItemData">
                    <div className="checkoutSummaryItemName">{item?.name}</div>
                    <div className="checkoutSummaryItemQuantity">כמות: {qty}</div>
                </div>
            </div>
            <div className='itemAside'>
                <div className="checkoutSummaryItemTotal center">{item?.price.raw * qty}<BiShekel /></div>
            </div>
        </div>
    );
};

export default CheckoutSummaryItem;