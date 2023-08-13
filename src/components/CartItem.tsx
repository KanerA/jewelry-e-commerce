import React, { useEffect, useState } from 'react';

import { BiShekel } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';

import PriceTag from './PriceTag';
import { Price } from '../store/types';
import CartItemQuantity from './CartItemQuantity';
import useFetchCartData from '../hooks/useFetchCartData';
import useRemoveFromCart from '../hooks/useRemoveFromCart';
import useUpdateCartItemQuantity from '../hooks/useUpdateCartItemQuantity';
import ImageComponent from './ImageComponent';

interface ICartItemProps {
    id: string;
    imageSrc: string;
    price: Price;
    name: string;
    quantity: number;
    sizes: string[] | number[];
}

const CartItem = (props: ICartItemProps) => {
    const [quantity, setQuantity] = useState<number>(props.quantity);
    const [isLoadingQuantity, setIsLoadingQuantity] = useState<boolean>(false);
    const removeFromCart = useRemoveFromCart();
    const updateCartItemQuantity = useUpdateCartItemQuantity();
    const fetchCartFunc = useFetchCartData();

    const onRemoveClick = () => {
        removeFromCart(props.id);
    };

    const updateItemQuantity = async (qty: number) => {
        try {
            return await updateCartItemQuantity(props.id, qty);
        } catch (err) {
            console.log(err);
        }
    };

    const onAddClick = async () => {
        try {
            setIsLoadingQuantity(true);
            const res = await updateItemQuantity(quantity + 1);
            setIsLoadingQuantity(!res?.success);
            setQuantity(prev => prev + 1);

        } catch (err) {
            console.log(err);
        }
    }
    const onLessClick = async () => {
        try {
            setIsLoadingQuantity(true);
            const res = await updateItemQuantity(quantity - 1);
            setIsLoadingQuantity(!res?.success);
            setQuantity(prev => prev - 1 <= 0 ? 0 : prev - 1);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCartFunc();
    }, [quantity, fetchCartFunc])
    return (
        <div className="cartItem">
            <main>
                <div className="imageContainer">
                    <ImageComponent
                        className="singleImage"
                        src={props.imageSrc}
                        alt={props.name} />
                    <div className="namePriceContainer">
                        <div className="itemName">{props.name}</div>
                        <PriceTag price={props.price.formatted_with_symbol} />
                        <div>מידות: {props.sizes.toString()}</div>
                    </div>
                </div>
            </main>
            <aside>
                <CartItemQuantity quantity={quantity} isLoadingQuantity={isLoadingQuantity} onAddClick={onAddClick} onLessClick={onLessClick} />
                <div className="totalPrice center">
                    <span>{props.quantity * props.price.raw}</span>
                    <BiShekel />
                </div>
                <div className="removeFromCart">
                    <button onClick={onRemoveClick}>
                        <MdDeleteOutline size={25} />
                    </button>
                </div>
            </aside>
        </div>
    );
};

export default CartItem;